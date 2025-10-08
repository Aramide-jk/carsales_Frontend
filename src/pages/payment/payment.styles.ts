import styled from "styled-components";
import { motion } from "framer-motion";

export const PaymentContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f7f4;
`;

export const FormWrapper = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  padding: 2rem;
`;

export const FormCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const OrderSummary = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(220, 38, 38, 0.1);
  text-align: center;

  h4 {
    font-family: "Playfair Display", serif;
    font-size: 1.2rem;
    color: #2b2b2b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: #dc2626;
    margin: 0;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;

  .success-icon {
    color: #22c55e;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;
