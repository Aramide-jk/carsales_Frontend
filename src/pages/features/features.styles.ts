import styled from "styled-components";
import { motion } from "framer-motion";

export const FeaturesContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
`;

export const HeaderSection = styled.section`
  padding: 10rem 2rem;
  position: relative;
  text-align: center;
  background-size: cover;
  background-position: center;
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
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

export const PageTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    display: none;
  }
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  text-align: center;
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
@media (max-width: 768px) {
    width: 60px;
    height: 60px;
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

export const ProcessSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(220, 38, 38, 0.01);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProcessCard = styled(motion.div)<{ $step: number }>`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;

  &::before {
    content: "${(props) => props.$step}";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: #dc2626;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export const ProcessIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 1rem;
  color: #dc2626;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ProcessTitle = styled.h4`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
`;

export const ProcessDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const ServiceItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ServiceContent = styled.div`
  h4 {
    font-family: "Playfair Display", serif;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;
