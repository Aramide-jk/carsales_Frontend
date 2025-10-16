import React from "react";
import styled, { keyframes } from "styled-components";
import { Loader } from "lucide-react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100%;
  padding: 2rem;
  gap: 1.5rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  color: #dc2626;
  animation: ${spin} 1.2s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
  font-family: "Inter", sans-serif;
`;

interface LoadingSpinnerProps {
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  text = "Loading...",
}) => {
  return (
    <LoadingContainer>
      <Spinner>
        <Loader size={50} />
      </Spinner>
      <LoadingText>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
