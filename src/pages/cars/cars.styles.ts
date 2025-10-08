import styled from "styled-components";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export const CarsContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
`;

export const HeaderSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f7f4 0%, rgba(220, 38, 38, 0.1) 100%);
`;

export const PageTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 500;
  color: #2b2b2b;
  margin-bottom: 1rem;
`;

export const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

export const FiltersSection = styled.section`
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
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

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #dc2626;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

export const FilterSelect = styled.select`
  padding: 0.8rem 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: #2b2b2b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

export const ClearFiltersButton = styled.button`
  background: transparent;
  color: #dc2626;
  padding: 0.8rem 1rem;
  border: 2px solid #dc2626;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    color: white;
  }
`;

export const ResultsSection = styled.section`
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export const ResultsCount = styled.p`
  color: #666;
  font-size: 1.1rem;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SortLabel = styled.span`
  color: #2b2b2b;
  font-weight: 500;
`;

export const CarsGrid = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NoResults = styled.div`
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
    margin-bottom: 2rem;
  }
`;
