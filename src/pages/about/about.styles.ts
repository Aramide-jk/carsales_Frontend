import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
`;

export const HeroSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    display: none;
  }
`;

export const HeroTagline = styled(motion.p)`
  font-size: 1.1rem;
  color: #dc2626;
  opacity: 0.9;
  font-style: italic;
  font-weight: 500;
`;

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3.5rem;
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
    // font-size: 1rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 0;
    padding: 0;
  }
`;

export const StoryContent = styled.div`
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    padding: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    padding: 1rem;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ValueCard = styled(motion.div)`
  // background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #dc2626;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ValueTitle = styled.h4`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const StatsSection = styled.section`
  background: rgba(220, 38, 38, 0.05);
  padding: 4rem 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem 0;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 0.2rem;
    color: green;
  }
`;

export const StatItem = styled(motion.div)`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StatLabel = styled.div`
  color: #2b2b2b;
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const TestimonialCard = styled(motion.div)`
  // background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: #dc2626;
    font-family: "Playfair Display", serif;
  }
`;

export const TestimonialText = styled.p`
  color: #666;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a1a;
  font-weight: 600;

  .stars {
    color: #ffd700;
    margin-left: auto;
  }
`;
