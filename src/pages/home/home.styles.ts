import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
`;

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f7f4 0%, rgba(220, 38, 38, 0.1) 100%);
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("https://i.pinimg.com/736x/d5/62/31/d56231182c2b7b3f34808a4789f6e76f.jpg")
    center/cover;
  // opacity: 0.2;
  z-index: 1;
`;

export const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`;

export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: normal;
  color: white;

  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: white;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const HeroTagline = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #dc2626;
  font-style: italic;
  margin-bottom: 3rem;
  font-weight: 500;
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    // display: flex;
    font-size: 1rem;
  }
`;

export const Section = styled.section`
  padding: 3rem 1rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2b2b2b;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: #dc2626;
  }

  &[style*="text-align: center"]::after {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const FeaturedCarsCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #dc2626 rgba(220, 38, 38, 0.1);
  scrollbar-color: #dc2626 rgba(220, 38, 38, 0.1);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(220, 38, 38, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dc2626;
    border-radius: 10px;
    border: 1px solid rgba(220, 38, 38, 0.05);
  }

  & > div {
    flex: 0 0 250px;
  }
`;

export const ViewAllButton = styled.div`
  text-align: center;
  margin-bottom: -3rem;
`;

export const WhyChooseSection = styled.section`
  padding: 2rem 1rem;
  // color: green;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #dc2626;
`;

export const FeatureTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const ExploreNowText = styled.div`
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  font-weight: 500;
  color: #dc2626;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InfoBoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const InfoBox = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // text-align: center;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(220, 38, 38, 0.2);

    h3::after {
      width: 50px;
    }
    ${ExploreNowText} {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .box-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    transition: opacity 0.3s ease;
    z-index: 1;

    @media (max-width: 768px) {
      border-radius: 0;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 20px;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 60%
      );
    }
    @media (max-width: 768px) {
      border-radius: 0;
    }
  }

  &:hover .box-background {
  }

  & > div,
  .arrow {
    position: relative;
    z-index: 2;
  }

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: white;
    position: relative;
    padding-bottom: 0.5rem;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: #dc2626;
      transition: width 0.4s ease;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
  }

  .arrow {
    align-self: flex-end;
    color: #dc2626;
    transition: transform 0.3s ease;
  }
`;
