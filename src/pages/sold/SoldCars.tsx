import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
// import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { getSoldCars } from "../../services/api";
import type { Car } from "../../types";
import CarCard from "../../components/CarCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const SoldCarsContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
`;

const HeaderSection = styled.section`
  padding: 8rem 2rem;
  position: relative;
  text-align: center;
  background-size: cover;
  background-position: center;
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const PageTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #1a1a1a;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #dc2626;
  }
`;

// const PageSubtitle = styled(motion.p)`
//   font-size: 1.2rem;
//   color: #666;
//   color: rgba(255, 255, 255, 0.9);
//   max-width: 600px;
//   margin: 0 auto;
// `;

const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

// const StatsSection = styled.section`
//   padding: 1rem 0.5rem;
//   // background: rgba(220, 38, 38, 0.05);
// `;

// const StatsGrid = styled.div`
//   display: grid;
//   // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   // gap: 2rem;
//   max-width: 200px;
//   margin: 0 auto;
// `;

// const StatCard = styled(motion.div)`
//   background: white;
//   padding: 0.5rem;
//   border-radius: 20px;
//   text-align: center;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
// `;

// const StatIcon = styled.div`
//   width: 60px;
//   height: 60px;
//   background: rgba(220, 38, 38, 0.1);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 1rem;
//   color: #dc2626;
// `;

// const StatNumber = styled.div`
//   font-family: "Playfair Display", serif;
//   font-size: 2rem;
//   font-weight: 700;
//   color: #dc2626;
//   margin-bottom: 0.5rem;
// `;

// const StatLabel = styled.div`
//   color: #2b2b2b;
//   font-weight: 500;
// `;

const FiltersSection = styled.section`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #dc2626;
`;

const ResultsSection = styled.section`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ResultsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ResultsCount = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

const CarsGrid = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2b2b2b;
  }

  p {
    font-size: 1.1rem;
  }
`;

// const LoadingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 60vh;
//   gap: 1rem;
// `;

// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const Spinner = styled.div`
//   border: 4px solid rgba(220, 38, 38, 0.2);
//   border-top: 4px solid #dc2626;
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   animation: ${spin} 1s linear infinite;
// `;

// const LoadingText = styled.p`
//   color: #666;
//   font-size: 1.1rem;
//   font-weight: 500;
// `;

const SoldCars: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [soldCars, setSoldCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getSoldCars();
        setSoldCars(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = useMemo(() => {
    return soldCars.filter((car) => {
      const search = searchTerm.toLowerCase();
      return (
        car.model.toLowerCase().includes(search) ||
        car.brand.toLowerCase().includes(search) ||
        car.description.toLowerCase().includes(search)
      );
    });
  }, [soldCars, searchTerm]);

  // Stats
  // const stats = [
  //   {
  //     icon: CheckCircle,
  //     number: soldCars.length.toString(),
  //     label: "Cars Sold",
  //   },
  //   {
  //     icon: TrendingUp,
  //     number: `₦${Math.round(totalSoldValue / 1000)}K`,
  //     label: "Total Sales",
  //   },
  //   {
  //     icon: Calendar,
  //     number: `₦${Math.round(averagePrice / 1000)}K`,
  //     label: "Average Price",
  //   },
  // ];

  if (loading) {
    return <LoadingSpinner text="Loading sold cars..." />;
  }

  if (error) {
    return <LoadingSpinner text={`Error: ${error}`} />;
  }

  return (
    <SoldCarsContainer>
      {/* Header */}
      <HeaderSection
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}>
        <HeaderOverlay />
        <HeaderContent>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Recently Sold Vehicles
          </PageTitle>
          {/* <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Discover the luxury vehicles that have found their perfect owners
            through SK_Leeno
          </PageSubtitle> */}
        </HeaderContent>
      </HeaderSection>

      {/* Stats */}
      {/* <StatsSection>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>
              <StatIcon>
                <stat.icon size={16} />
              </StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection> */}

      {/* Search */}
      <FiltersSection>
        <SearchContainer>
          <SearchIcon size={20} />
          <SearchInput
            type="text"
            placeholder="Search sold vehicles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </FiltersSection>

      {/* Results */}
      <ResultsSection>
        <ResultsHeader>
          <ResultsCount>
            {filteredCars.length}{" "}
            {filteredCars.length === 1 ? "vehicle" : "vehicles"} found
          </ResultsCount>
        </ResultsHeader>

        {filteredCars.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <CarsGrid>
              {filteredCars.map((car, index) => (
                <CarCard key={car._id} car={car} index={index} isSold={true} />
              ))}
            </CarsGrid>
          </motion.div>
        ) : (
          <NoResults>
            <h3>No sold vehicles found</h3>
            <p>Try adjusting your search criteria</p>
          </NoResults>
        )}
      </ResultsSection>
    </SoldCarsContainer>
  );
};

export default SoldCars;
