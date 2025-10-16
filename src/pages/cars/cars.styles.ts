import styled from "styled-components";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

export const ClearFiltersButton = styled.button`
  background: transparent;
  color: #dc2626;
  padding: 0.5rem 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    color: white;
  }

  .clear-icon {
    display: none;
  }

  @media (max-width: 768px) {
    .clear-text {
      display: none;
    }
    .clear-icon {
      display: inline-block;
    }

    padding: 0.8rem;
    min-width: 44px;
    line-height: 1;
  }
`;

export const CarsContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
`;

export const HeaderSection = styled.section`
  padding: 8rem 2rem;
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const PageTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  // font-size: 3rem;
  font-weight: 500;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
`;

export const FiltersSection = styled.section`
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
  }
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

// export const SearchContainer = styled.div`
//   position: relative;
//   flex: 1;
//   min-width: 300px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const SearchInput = styled.input`
//   width: 100%;
//   padding: 0.8rem 1rem 0.8rem 3rem;
//   border: 2px solid rgba(220, 38, 38, 0.2);
//   border-radius: 12px;
//   font-size: 1rem;
//   background: white;
//   transition: all 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #dc2626;
//     box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
//   }

//   &::placeholder {
//     color: #999;
//   }
// `;

// export const SearchIcon = styled(Search)`
//   position: absolute;
//   left: 1rem;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #dc2626;
// `;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  .brand-year-filters {
    display: flex;
    gap: 1rem;
    width: 100%;

    @media (min-width: 769px) {
      width: auto;
    }
  }
`;

export const FilterSelect = styled.select`
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  color: #2b2b2b;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

// export const ClearFiltersButton = styled.button`
//   background: transparent;
//   color: #dc2626;
//   padding: 0.8rem 1rem;
//   border: 2px solid #dc2626;
//   border-radius: 12px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #dc2626;
//     color: white;
//   }
// `;

export const ResultsSection = styled.section`
  padding: 2rem;
  max-width: 1500px;
  // margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
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

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  gap: 1rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(220, 38, 38, 0.2);
  border-top: 4px solid #dc2626;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
`;
export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  .select-arrow {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: #dc2626;
    pointer-events: none;
  }
`;

export const SortLabel = styled.span`
  color: #2b2b2b;
  font-weight: 500;
`;

export const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // grid-template-columns: repeat(4, 1fr);
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

export const PaginationContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-bottom: 1;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  padding: 0.6rem 1.2rem;
  border: 2px solid
    ${(props) => (props.$active ? "#dc2626" : "rgba(220, 38, 38, 0.2)")};
  background: ${(props) => (props.$active ? "#dc2626" : "white")};
  color: ${(props) => (props.$active ? "white" : "#2b2b2b")};
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #dc2626;
    color: white;
    border-color: #dc2626;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem;
  }
`;

export const PageInfo = styled.span`
  color: #666;
  font-weight: 500;
`;
