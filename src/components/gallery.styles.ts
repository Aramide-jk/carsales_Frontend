import styled from "styled-components";
import { motion } from "framer-motion";

export const GalleryContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
  background: #f8f7f4;
`;

export const HeaderSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  text-align: center;
  background-size: contain;
  background-position: center;
  color: white;
  margin-bottom: 3rem;
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
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 0 2rem 4rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem 2rem;
  }
`;

export const ImageWrapper = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  aspect-ratio: 16/ 20;

  @media (max-width: 768px) {
    aspect-ratio: 3/ 2;
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${ImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

export const NoImagesMessage = styled.div`
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
