import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Eye, Calendar, Shield, Gauge, LocateIcon } from "lucide-react";
// import Button from "./Button";
import type { Car } from "../types";

interface CarCardProps {
  car: Car;
  index?: number;
  isSold?: boolean;
}

const CardContainer = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 480px) {
    // width: 100%;
    border-radius: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  // height: 100%;
  // aspect-ratio: 14 /16;
  overflow: hidden;
  background: #f0f0f0;
`;

const CarImage = styled.img`
  width: 100%;
  // height: 50%;
  aspect-ratio: 16 /16;
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
  font-family: "playfair display", serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #1a1a1a;
  text-transform: capitalize;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CarSpecs = styled.div`
  display: flex;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  // gap: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 0.5rem;

  text-transform: capitalize;

  svg {
    color: #dc2626;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    // font-weight: 500;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 0.5px solid red;
  margin: 0.75rem 0;
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #dc2626;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SoldLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #dc2626;
  font-family: "Playfair Display", serif;
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
          style={{ filter: isSold ? "" : "none" }}
        />
        <ImageOverlay />
        <ViewButton to={`/cars/${car._id}`}>
          <Eye size={20} />
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
            <Calendar size={20} />
            <span>{car.year}</span>
          </SpecItem>
          <SpecItem>
            <Shield size={20} />
            <span>{car.condition}</span>
          </SpecItem>
        </CarSpecs>

        {isSold ? (
          <SoldLabel>SOLD</SoldLabel>
        ) : (
          <>
            <Divider />

            <CarSpecs>
              <SpecItem>
                <Gauge size={20} />
                <span>{car.mileage.toLocaleString()} km</span>
              </SpecItem>
              <SpecItem>
                <LocateIcon size={20} />
                <span>{car.location}</span>
              </SpecItem>
            </CarSpecs>

            <Price>₦{car.price.toLocaleString()}</Price>
           
          </>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default CarCard;
