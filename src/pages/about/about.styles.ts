import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
`;

export const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f7f4 0%, rgba(220, 38, 38, 0.1) 100%);
`;

export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

export const HeroTagline = styled(motion.p)`
  font-size: 1.1rem;
  color: #dc2626;
  font-style: italic;
  font-weight: 500;
`;

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
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
`;

export const StoryContent = styled.div`
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const ValueCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
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
`;

export const StatLabel = styled.div`
  color: #2b2b2b;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const TestimonialCard = styled(motion.div)`
  background: white;
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
