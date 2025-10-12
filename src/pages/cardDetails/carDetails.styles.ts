import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DetailContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #dc2626;
  font-weight: 500;
  text-decoration: none;
  margin: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid #dc2626;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    color: white;
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    border: none;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  // padding: 0 2rem 4rem;
`;

export const CarDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageSection = styled.div`
  position: relative;
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 2000px;
  // border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const MainImage = styled.img`
  width: 100%;
  height: 10%;
  object-fit: cover;
  border-radius: 10px;
  background-color: #f8f7f4;

  @media (max-width: 480px) {
    border-radius: 0;
    height: 50vh;
  }
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: zoom-out;
`;

export const FullscreenImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  max-height: 90vh;
  overflow: hidden;
  border-radius: 12px;
  cursor: default;

  @media (max-width: 480px) {
    border-radius: 0;
    cursor: zoom-out;
    height: 100vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: rgba(0, 0, 0, 0.9);
  }

  button {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 30px;
  background: rgba(248, 247, 244, 0.9);
  color: #dc2626;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: #dc2626;
    color: white;
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    top: 70px;
    right: 20px;
  }
`;

export const ImageNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(248, 247, 244, 0.9);
  color: #dc2626;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: #dc2626;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 1rem;
  }

  &.next {
    right: 1rem;
  }
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.2rem;
  }
`;

export const Thumbnail = styled.img<{ $active: boolean }>`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid ${(props) => (props.$active ? "#DC2626" : "transparent")};

  &:hover {
    hight: 100px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #dc2626;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
    height: 100px;
  }
`;

export const InfoSection = styled.div`
  padding: 0 2rem 4rem;
`;

export const CarHeader = styled.div`
  margin-bottom: 2rem;
`;

export const CarTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CarPrice = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  color: #dc2626;
  font-family: "Playfair Display", serif;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CarDescription = styled(motion.p)`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SpecItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(220, 38, 38, 0.05);
  border-radius: 12px;

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  svg {
    color: #dc2626;
    flex-shrink: 0;
  }
`;

export const SpecContent = styled.div`
  h4 {
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.2rem;
    font-size: 0.9rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

export const FeaturesSection = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2b2b2b;

  &::before {
    content: "✓";
    color: #dc2626;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;
