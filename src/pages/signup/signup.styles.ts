import styled from "styled-components";
import { motion } from "framer-motion";

export const SignUpContainer = styled.div`
  min-height: 100vh;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f7f4 0%, rgba(220, 38, 38, 0.05) 100%);
`;

export const FormWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const FormCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Logo = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  .logo-accent {
    color: #dc2626;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  text-align: left;
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

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
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

export const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #dc2626;
  }
`;

export const SignInLink = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #666;

  a {
    color: #dc2626;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
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
