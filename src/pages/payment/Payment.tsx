import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { CheckCircle } from "lucide-react";
import { PaymentContainer, FormWrapper, FormCard, SectionTitle, OrderSummary, Form, SuccessMessage } from "./payment.styles";
import api from "../../services/api";
import Button from "../../components/Button";


const Payment: React.FC = () => {
  useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, car, totalAmount } = location.state || {};

  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!formData || !totalAmount) {
      navigate("/cars", { state: { message: "Invalid checkout session." } });
    }
  }, [formData, totalAmount, navigate]);

  // --- Paystack Configuration ---
  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: totalAmount * 100, // Amount in kobo
    publicKey: "sk_test_c7c6991c46e980fcdea8932c7409471ca8239e9c",
  };

  const onSuccess = (reference: any) => {
    // Payment was successful, now record the purchase on the backend
    api
      .post("/purchases", {
        carId: car._id,
        ...formData,
        paymentMethod: "card",
        paymentReference: reference.reference,
      })
      .then(() => {
        setIsCompleted(true);
      })
      .catch((error) => {
        console.error("Purchase failed on backend:", error);
        alert(
          "Payment was successful but we couldn't confirm your order. Please contact support."
        );
      })
      .finally(() => setIsProcessing(false));
  };

  const onClose = () => {
    // User closed the Paystack modal
    setIsProcessing(false);
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    initializePayment({ onSuccess, onClose });
  };

  if (!car) {
    return (
      <PaymentContainer>
        <div>Loading or invalid navigation...</div>
      </PaymentContainer>
    );
  }

  if (isCompleted) {
    return (
      <PaymentContainer>
        <SuccessMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}>
          <CheckCircle size={80} className="success-icon" />
          <h2>Payment Successful!</h2>
          <p>
            Congratulations on your purchase of the {car.brand} {car.name}!
            We'll contact you shortly to arrange delivery and finalize all
            paperwork.
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate("/cars")}>
            Continue Shopping
          </Button>
        </SuccessMessage>
      </PaymentContainer>
    );
  }

  return (
    <PaymentContainer>
      <FormWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <FormCard>
          <SectionTitle>Secure Card Payment</SectionTitle>
          <OrderSummary>
            <h4>
              {car.brand} {car.name}
            </h4>
            <p>₦{totalAmount.toLocaleString()}</p>
          </OrderSummary>
          <Form onSubmit={handleSubmit}>
            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              disabled={isProcessing}>
              {isProcessing
                ? "Processing..."
                : `Pay ₦${totalAmount.toLocaleString()}`}
            </Button>
          </Form>
        </FormCard>
      </FormWrapper>
    </PaymentContainer>
  );
};

export default Payment;
