import React, { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

import CarCard from "../../components/CarCard";
import Button from "../../components/Button";
import { getCars } from "../../services/api";
import type { Car } from "../../types";
import { useAuth } from "../../contexts/AuthContext";
import {
  CarsContainer,
  HeaderSection,
  PageTitle,
  PageSubtitle,
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
  SortContainer,
  SortLabel,
} from "./cars.styles";

const Cars: React.FC = () => {
  // const [cars, setCars] = useState<any[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const { token } = useAuth();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars();
        setCars(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

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
            matchesPrice = car.price < 50000;
            break;
          case "5000000k-10000000":
            matchesPrice = car.price >= 50000 && car.price < 100000;
            break;
          case "10000000-150000000":
            matchesPrice = car.price >= 100000 && car.price < 150000;
            break;
          case "over-150000000":
            matchesPrice = car.price >= 150000;
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
    searchTerm,
    brandFilter,
    yearFilter,
    priceFilter,
    transmissionFilter,
    sortBy,
    cars,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setBrandFilter("");
    setYearFilter("");
    setPriceFilter("");
    setTransmissionFilter("");
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
      <HeaderSection>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Our Luxury Collection
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Discover exceptional vehicles curated for the most discerning
          automotive enthusiasts
        </PageSubtitle>
      </HeaderSection>
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
              <option value="under-5000000">Under ₦5000000</option>
              <option value="5000000-10000000">₦5000000 - ₦10000000</option>
              <option value="10000000-15000000">₦10000000 - ₦15000000</option>
              <option value="over-15000000">Over ₦15000000</option>
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

      <ResultsSection>
        <ResultsHeader>
          {error ? (
            <ResultsCount style={{ color: "red" }}>{error}</ResultsCount>
          ) : (
            <ResultsCount>
              {filteredAndSortedCars.length}{" "}
              {filteredAndSortedCars.length === 1 ? "car" : "cars"} found
            </ResultsCount>
          )}

          <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            <FilterSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}>
              <option value="brand">Brand (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="year-new">Year (Newest First)</option>
              <option value="year-old">Year (Oldest First)</option>
              <option value="brand">Brand</option>
            </FilterSelect>
          </SortContainer>
        </ResultsHeader>

        {filteredAndSortedCars.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <CarsGrid>
              {filteredAndSortedCars.map((car, index) => {
                return <CarCard key={car._id} car={car} index={index} />;
              })}
            </CarsGrid>
          </motion.div>
        ) : (
          <NoResults>
            <h3>No cars found</h3>
            <p>Try adjusting your search criteria or clearing the filters</p>
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
