import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

import CarCard from "../../components/CarCard";
import Button from "../../components/Button";
// import { getCars } from "../../services/api";
// import type { Car } from "../../types";
import { useAuth } from "../../contexts/AuthContext";
import {
  CarsContainer,
  PageTitle,
  HeaderSection,
  FiltersSection,
  FiltersContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FilterGroup,
  FilterSelect,
  ClearFiltersButton,
  ResultsSection,
  ResultsHeader,
  ResultsCount,
  CarsGrid,
  NoResults,
  HeaderOverlay,
  HeaderContent,
  SortContainer,
  SortLabel,
  PaginationContainer,
  PageButton,
} from "./cars.styles";

import { getCars } from "../../services/api";

const Cars = () => {
  useAuth();

  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCars, _] = useState(0);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState("");
  const [sortBy, setSortBy] = useState("brand");
  const carsPerPage = 16;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars(currentPage, carsPerPage);
        if (!data.success) throw new Error("Failed to fetch cars");
        setCars(data.data);
        setTotalPages(data.totalPages);
      } catch (err: any) {
        setError(err.message || "Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, carsPerPage]);

  const brands = [...new Set(cars.map((car) => car.brand))].sort();
  const years = [...new Set(cars.map((car) => car.year))].sort((a, b) => b - a);
  const transmissions = [
    ...new Set(cars.map((car) => car.transmission)),
  ].sort();

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter((car) => {
      const matchesSearch =
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand = !brandFilter || car.brand === brandFilter;
      const matchesYear = !yearFilter || car.year.toString() === yearFilter;
      const matchesTransmission =
        !transmissionFilter || car.transmission === transmissionFilter;

      let matchesPrice = true;
      if (priceFilter) {
        switch (priceFilter) {
          case "under-5000000":
            matchesPrice = car.price < 5000000;
            break;
          case "5000000-10000000":
            matchesPrice = car.price >= 5000000 && car.price < 10000000;
            break;
          case "10000000-15000000":
            matchesPrice = car.price >= 10000000 && car.price < 15000000;
            break;
          case "over-15000000":
            matchesPrice = car.price >= 15000000;
            break;
        }
      }

      return (
        matchesSearch &&
        matchesBrand &&
        matchesYear &&
        matchesTransmission &&
        matchesPrice
      );
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "year-new":
          return b.year - a.year;
        case "year-old":
          return a.year - b.year;
        case "brand":
          return a.model.localeCompare(b.model);
        default:
          return a.brand.localeCompare(b.brand);
      }
    });

    return filtered;
  }, [
    cars,
    searchTerm,
    brandFilter,
    yearFilter,
    priceFilter,
    transmissionFilter,
    sortBy,
  ]);

  // Calculate the range of cars being shown
  const firstCarIndex = (currentPage - 1) * carsPerPage + 1;
  const lastCarIndex = Math.min(currentPage * carsPerPage, totalCars);
  const showingResultsText = `Showing ${firstCarIndex}–${lastCarIndex} of ${totalCars} results`;

  const clearFilters = () => {
    setSearchTerm("");
    setBrandFilter("");
    setYearFilter("");
    setPriceFilter("");
    setTransmissionFilter("");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <CarsContainer>
        <ResultsSection>
          <ResultsCount>Loading cars...</ResultsCount>
        </ResultsSection>
      </CarsContainer>
    );
  }

  return (
    <CarsContainer>
      {/* ====== HEADER SECTION ====== */}
      <HeaderSection
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}>
        <HeaderOverlay />
        <HeaderContent>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Our Luxury Collection
          </PageTitle>
        </HeaderContent>
      </HeaderSection>

      {/* ====== FILTERS SECTION ====== */}
      <FiltersSection>
        <FiltersContainer>
          <SearchContainer>
            <SearchIcon size={20} />
            <SearchInput
              type="text"
              placeholder="Search by brand, model, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>

          <FilterGroup>
            <FilterSelect
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}>
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </FilterSelect>

            <FilterSelect
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}>
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </FilterSelect>

            <FilterSelect
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="">All Prices</option>
              <option value="under-5000000">Under ₦5,000,000</option>
              <option value="5000000-10000000">₦5,000,000 - ₦10,000,000</option>
              <option value="10000000-15000000">
                ₦10,000,000 - ₦15,000,000
              </option>
              <option value="over-15000000">Over ₦15,000,000</option>
            </FilterSelect>

            <FilterSelect
              value={transmissionFilter}
              onChange={(e) => setTransmissionFilter(e.target.value)}>
              <option value="">All Transmissions</option>
              {transmissions.map((transmission) => (
                <option key={transmission} value={transmission}>
                  {transmission}
                </option>
              ))}
            </FilterSelect>

            <ClearFiltersButton onClick={clearFilters}>
              Clear Filters
            </ClearFiltersButton>
          </FilterGroup>
        </FiltersContainer>
      </FiltersSection>

      {/* ====== RESULTS SECTION ====== */}
      <ResultsSection>
        <ResultsHeader>
          {error ? (
            <ResultsCount style={{ color: "red" }}>{error}</ResultsCount>
          ) : (
            <ResultsCount>
              {totalCars > 0 ? showingResultsText : "No cars found"}
            </ResultsCount>
          )}

          <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            <FilterSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}>
              <option value="brand">Brand (A–Z)</option>
              <option value="price-low">Price (Low → High)</option>
              <option value="price-high">Price (High → Low)</option>
              <option value="year-new">Newest Year</option>
              <option value="year-old">Oldest Year</option>
            </FilterSelect>
          </SortContainer>
        </ResultsHeader>

        {filteredAndSortedCars.length > 0 ? (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}>
            <CarsGrid>
              {filteredAndSortedCars.map((car, index) => (
                <CarCard key={car._id} car={car} index={index} />
              ))}
            </CarsGrid>

            {totalPages > 1 && (
              <PaginationContainer>
                <PageButton
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}>
                  Previous
                </PageButton>

                {[...Array(totalPages).keys()].map((num) => (
                  <PageButton
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    $active={currentPage === num + 1}>
                    {num + 1}
                  </PageButton>
                ))}

                <PageButton
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}>
                  Next
                </PageButton>
              </PaginationContainer>
            )}
          </motion.div>
        ) : (
          <NoResults>
            <h3>No cars found</h3>
            <p>Try adjusting your filters or search terms</p>
            <Button onClick={clearFilters} variant="outline">
              Clear All Filters
            </Button>
          </NoResults>
        )}
      </ResultsSection>
    </CarsContainer>
  );
};

export default Cars;
