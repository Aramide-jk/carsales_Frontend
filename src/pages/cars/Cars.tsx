import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ChevronDown } from "lucide-react";

import CarCard from "../../components/CarCard";
import LoadingSpinner from "../../components/LoadingSpinner";
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
  // SearchContainer,
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
  SelectWrapper,
} from "./cars.styles";

import { getCars } from "../../services/api";

const Cars = () => {
  useAuth();

  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCars, setTotalCars] = useState(0);

  // Filters
  const [brandFilter, setBrandFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [sortBy, setSortBy] = useState("brand");
  const carsPerPage = 1;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars(currentPage, carsPerPage);
        if (!data.success) throw new Error("Failed to fetch cars");
        setCars(data.data);
        setTotalPages(data.totalPages);
        setTotalCars(data.totalCars);
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

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter((car) => {
      const matchesBrand = !brandFilter || car.brand === brandFilter;
      const matchesYear = !yearFilter || car.year.toString() === yearFilter;

      return matchesBrand && matchesYear;
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
  }, [cars, brandFilter, yearFilter, sortBy]);

  // Calculate the range of cars being shown
  const firstCarIndex = (currentPage - 1) * carsPerPage + 1;
  const lastCarIndex = Math.min(currentPage * carsPerPage, totalCars);
  const showingResultsText =
    totalCars > 0
      ? `Showing ${firstCarIndex}–${lastCarIndex} of ${totalCars} results`
      : "No cars found";

  const clearFilters = () => {
    setBrandFilter("");
    setYearFilter("");
    setCurrentPage(1);
  };

  const getPaginationItems = () => {
    if (totalPages <= 3) {
      return [...Array(totalPages).keys()].map((i) => i + 1);
    }

    let startPage;
    if (currentPage === 1) {
      startPage = 1;
    } else if (currentPage === totalPages) {
      startPage = totalPages - 2;
    } else {
      startPage = currentPage - 1;
    }

    const pages = [...Array(3).keys()].map((i) => startPage + i);

    return pages;
  };

  if (loading) {
    return <LoadingSpinner text="Loading cars..." />;
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
          <FilterGroup>
            <div className="brand-year-filters">
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
            </div>

            <SortContainer>
              <SortLabel>Sort by:</SortLabel>
              <SelectWrapper>
                <FilterSelect
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}>
                  <option value="brand">Brand (A–Z)</option>
                  <option value="price-low">Price (Low → High)</option>
                  <option value="price-high">Price (High → Low)</option>
                  <option value="year-new">Newest Year</option>
                  <option value="year-old">Oldest Year</option>
                </FilterSelect>
                <ChevronDown size={20} className="select-arrow" />
              </SelectWrapper>
            </SortContainer>

            <ClearFiltersButton onClick={clearFilters} title="Clear Filters">
              <span className="clear-text">Clear Filters</span>
              <span className="clear-icon">
                <RotateCcw size={20} />
              </span>
            </ClearFiltersButton>
          </FilterGroup>
        </FiltersContainer>
      </FiltersSection>

      {/* ====== RESULTS SECTION ====== */}
      <ResultsSection>
        <ResultsHeader>
          {error ? (
            <ResultsCount style={{ color: "red" }}>{error}</ResultsCount>
          ) : null}
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
                {getPaginationItems().map((item, index) =>
                  typeof item === "number" ? (
                    <PageButton
                      key={`${item}-${index}`}
                      onClick={() => setCurrentPage(item)}
                      $active={currentPage === item}>
                      {item}
                    </PageButton>
                  ) : (
                    <PageButton key={`${item}-${index}`} as="span" disabled>
                      {item}
                    </PageButton>
                  )
                )}

                <PageButton
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}>
                  Next
                </PageButton>
              </PaginationContainer>
            )}

            <ResultsCount style={{ textAlign: "center", marginTop: "2rem" }}>
              {showingResultsText}
            </ResultsCount>
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
