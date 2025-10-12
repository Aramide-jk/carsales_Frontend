import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
`;

export const HeroSection = styled.section`
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

export const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div``;

export const ContactForm = styled.div``;

export const InfoCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(220, 38, 38, 0.05);
  }

  svg {
    color: #dc2626;
    flex-shrink: 0;
  }
`;

export const InfoContent = styled.div`
  h4 {
    color: #1a1a1a;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  p {
    color: #666;
    font-size: 0.95rem;
  }
`;

export const FormCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #dc2626;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f7f4;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #f8f7f4;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`;

export const MapSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(220, 38, 38, 0.05);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const MapTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const MapSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

export const MapFrame = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;
`;

export const WhatsAppButton = styled(motion.a)`
  position: fixed;
  bottom: 4.5rem;
  right: 1rem;
  background: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
  text-decoration: none;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
  }
`;

export const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(34, 197, 94, 0.05);
  border: 2px solid rgba(34, 197, 94, 0.2);
  border-radius: 20px;

  .success-icon {
    color: #22c55e;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;
