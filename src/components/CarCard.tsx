import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Eye, Calendar, Fuel, Settings, Shield } from "lucide-react";
import Button from "./Button";
import type { Car } from "../types";

interface CarCardProps {
  car: Car;
  index?: number;
  isSold?: boolean;
}

// Format prices to  Naira

// const formatMileage = (mileage: string): string => {
//   const numericMileage = parseInt(mileage, 10);
//   if (isNaN(numericMileage)) {
//     return mileage;
//   }
//   return numericMileage.toLocaleString();
// };

const CardContainer = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #f0f0f0;
`;

const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  object-position: center 80%;

  ${CardContainer}:hover & {
    transform: scale(1.08);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const ViewButton = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(220, 38, 38, 0.9);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-weight: 400;
  text-decoration: none;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 0.8rem;
`;

const CarTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  text-transform: capitalize;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CarSpecs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  text-transform: capitalize;

  svg {
    color: #dc2626;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #dc2626;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const CarCard: React.FC<CarCardProps> = ({
  car,
  index = 0,
  isSold = false,
}) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      <ImageContainer>
        <CarImage
          src={car.images[0]}
          alt={car.brand}
          style={{ filter: isSold ? "grayscale(80%)" : "none" }}
        />
        <ImageOverlay />
        <ViewButton to={isSold ? `/sold-cars` : `/cars/${car._id}`}>
          <Eye size={16} />
          View
        </ViewButton>
      </ImageContainer>

      <CardContent>
        <CarTitle>
          {car.brand} {car.model}
        </CarTitle>

        {/* <CarDescription>{car.description}</CarDescription> */}

        <CarSpecs>
          <SpecItem>
            <Calendar size={16} />
            <span>{car.year}</span>
          </SpecItem>
          <SpecItem>
            <Settings size={16} />
            <span>{car.transmission}</span>
          </SpecItem>
          <SpecItem>
            <Fuel size={16} />
            <span>{car.fuelType}</span>
          </SpecItem>
          <SpecItem>
            <Shield size={16} />
            <span>{car.condition}</span>
          </SpecItem>
        </CarSpecs>

        <>
          <PriceContainer>
            <Price>₦{car.price.toLocaleString()}</Price>
          </PriceContainer>

          <ActionButtons>
            <a
              href={`https://wa.me/message/LJBYJAKZGOFQK1?text=${encodeURIComponent(
                `Hello, I'm interested in the ${car.brand} ${car.model} (${car.year}) listed on your website.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1 }}>
              <Button variant="primary" size="small" fullWidth>
                Chat
              </Button>
            </a>

            <Link to={`/book-inspection?car=${car._id}`} style={{ flex: 1 }}>
              <Button variant="outline" size="small" fullWidth>
                Book Inspection
              </Button>
            </Link>
          </ActionButtons>
        </>
      </CardContent>
    </CardContainer>
  );
};

export default CarCard;
