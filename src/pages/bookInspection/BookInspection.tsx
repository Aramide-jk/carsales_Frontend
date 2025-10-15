import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Car,
  User,
  Mail,
  Phone,
  CheckCircle,
  MessageSquare,
  LocateIcon,
} from "lucide-react";
import Button from "../../components/Button";
import api from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

// ---------- STYLED COMPONENTS ----------

const BookingContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
`;

const HeaderSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  color: white;
  background-image: url("https://i.pinimg.com/1200x/ed/cb/95/edcb951ce13837b06412524cbef47957.jpg");
  background-size: cover;
  background-position: center;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const PageTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  z-index: 2;

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

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  z-index: 2;
`;

const FormSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
`;

const FormContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: grid;
  gap: 2rem;

  .carGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    color: #dc2626;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
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

const Select = styled.select`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: #f8f7f4;
  color: #2b2b2b;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;
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

const DateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  background: rgba(34, 197, 94, 0.03);
  border: 2px solid rgba(220, 38, 38, 0.05);
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

const SelectedCarContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  background: rgba(220, 38, 38, 0.05);
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  align-items: center;
`;

const SelectedCarImage = styled.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const SelectedCarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectedCarName = styled.h4`
  font-family: "Playfair Display", serif;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const SelectedCarPrice = styled.p`
  color: #dc2626;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
`;

const InfoCard = styled.div`
  background: rgba(220, 38, 38, 0.05);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;

  h4 {
    font-family: "Playfair Display", serif;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;

    li {
      padding: 0.5rem 0;
      color: #666;

      &::before {
        content: "✓";
        color: #dc2626;
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`;

// ---------- COMPONENT ----------

const BookInspection: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preSelectedCarId = searchParams.get("car");
  const { user } = useAuth();

  const [cars, setCars] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    selectedCar: preSelectedCarId || "",
    location: "",
    date: "",
    time: "",
    message: "",
  });
  console.log(formData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await api.get("/cars");
        setCars(Array.isArray(res.data) ? res.data : res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        fullName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  const selectedCarDetails = useMemo(
    () => cars.find((car) => car._id === formData.selectedCar),
    [cars, formData.selectedCar]
  );

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { selectedCar, ...rest } = formData;
      const payload = {
        ...rest,
        car: selectedCar,
      };
      await api.post("/inspections", payload);
      setIsSubmitted(true);
    } catch (err) {
      alert("Failed to book inspection. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <BookingContainer>
        <FormSection>
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <CheckCircle size={64} className="success-icon" />
            <h3>Inspection Booked Successfully!</h3>
            <p>
              Thank you for booking with JK Autos. We'll contact you shortly to
              confirm your inspection schedule.
            </p>
            <Button
              variant="primary"
              onClick={() => (window.location.href = "/cars")}>
              Continue Browsing
            </Button>
          </SuccessMessage>
        </FormSection>
      </BookingContainer>
    );
  }

  return (
    <BookingContainer>
      <HeaderSection>
        <HeaderOverlay />
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Book Vehicle Inspection
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Schedule a professional inspection with our certified car experts.
        </PageSubtitle>
      </HeaderSection>

      <FormSection>
        <InfoCard>
          <h4>What to Expect During Your Inspection</h4>
          <ul>
            <li>
              A warm welcome and a comfortable waiting area with refreshments.
            </li>
            <li>
              A dedicated specialist will walk you through the car's key
              features.
            </li>
            <li>
              A thorough 150-point quality check by our expert technicians.
            </li>
            <li>
              An accompanied test drive to experience the vehicle's performance.
            </li>
            <li>A transparent review of the detailed inspection report.</li>
            <li>
              A no-pressure environment to ask any questions you may have.
            </li>
          </ul>
        </InfoCard>
        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          {selectedCarDetails && (
            <SelectedCarContainer layout>
              <SelectedCarImage
                src={selectedCarDetails.images?.[0]}
                alt={selectedCarDetails.name}
              />
              <SelectedCarInfo>
                <SelectedCarName>
                  {selectedCarDetails.brand} {selectedCarDetails.name} (
                  {selectedCarDetails.year})
                </SelectedCarName>
                <SelectedCarPrice>
                  ₦{selectedCarDetails.price.toLocaleString()}
                </SelectedCarPrice>
              </SelectedCarInfo>
            </SelectedCarContainer>
          )}

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                <User size={18} /> Full Name
              </Label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <Phone size={18} /> Phone Number
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                <Mail size={18} /> Email Address
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            <div className="carGrid">
              <FormGroup>
                <Label>
                  <Car size={18} /> Select Vehicle
                </Label>
                <Select
                  name="selectedCar"
                  value={formData.selectedCar}
                  onChange={handleChange}
                  disabled={!!preSelectedCarId}
                  required>
                  <option value="">
                    {preSelectedCarId
                      ? "Vehicle pre-selected"
                      : "Choose a vehicle"}
                  </option>
                  {cars.map((car) => (
                    <option key={car._id} value={car._id}>
                      {car.brand} {car.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>
                  <LocateIcon size={18} /> Location
                </Label>
                <Input
                  type="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  required
                />
              </FormGroup>
            </div>

            <DateTimeGrid>
              <FormGroup>
                <Label>
                  <Calendar size={18} /> Preferred Date
                </Label>
                <Input
                  type="date"
                  name="date"
                  min={minDate}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>
                  <Clock size={18} /> Preferred Time
                </Label>
                <Select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required>
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </DateTimeGrid>

            <FormGroup>
              <Label>
                <MessageSquare size={18} /> Additional Message (Optional)
              </Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific requests?"
              />
            </FormGroup>

            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              disabled={isLoading}>
              {isLoading ? "Booking..." : "Book Inspection"}
            </Button>
          </Form>
        </FormContainer>
      </FormSection>
    </BookingContainer>
  );
};

export default BookInspection;
