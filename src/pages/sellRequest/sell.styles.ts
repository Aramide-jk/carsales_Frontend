import { motion } from "framer-motion";
import styled from "styled-components";

export const SellCarContainer = styled.div`
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
  font-size: 2.5rem;
  font-weight: 600;
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
    font-size: 2rem;
  }
`;

export const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  display: none;
`;

export const ProcessSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(220, 38, 38, 0.01);

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ProcessTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
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
    font-size: 2rem;
  }
`;

export const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ProcessCard = styled(motion.div)<{ step: number }>`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;

  &::before {
    content: "${(props) => props.step}";
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProcessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 1.5rem;
  color: #dc2626;
`;

export const ProcessTitle2 = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const ProcessDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

export const FormSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const FormContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2.5rem;
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

export const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  gap: 1rem;
`;

export const StepDot = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$completed
      ? "#DC2626"
      : props.$active
      ? "#DC2626"
      : "rgba(220, 38, 38, 0.3)"};
  transition: all 0.3s ease;
`;

export const StepLine = styled.div<{ $completed: boolean }>`
  width: 40px;
  height: 2px;
  background: ${(props) =>
    props.$completed ? "#DC2626" : "rgba(220, 38, 38, 0.3)"};
  transition: all 0.3s ease;
`;

export const Form = styled.form`
  display: grid;
  gap: 2rem;
`;

export const FormSection2 = styled.div`
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #dc2626;
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const DocumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageUploadGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

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

export const Select = styled.select`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: #f8f7f4;
  color: #2b2b2b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
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

export const FileUpload = styled.div<{ $hasImage?: boolean }>`
  border: 2px dashed rgba(220, 38, 38, 0.3);
  border-radius: 12px;
  padding: ${(props) => (props.$hasImage ? "0" : "2rem")};
  text-align: center;
  background: rgba(220, 38, 38, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #dc2626;
    background: rgba(220, 38, 38, 0.1);
  }

  input {
    display: none;
  }
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(220, 38, 38, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
  }
`;

export const UploadIcon = styled.div`
  color: #dc2626;
  margin-bottom: 1rem;
`;

export const UploadText = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

export const UploadSubtext = styled.p`
  color: #999;
  font-size: 0.9rem;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const ImageItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

export const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  background: rgba(34, 197, 94, 0.05);
  border: 2px solid rgba(34, 197, 94, 0.2);
  border-radius: 20px;

  .success-icon {
    color: #22c55e;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;
