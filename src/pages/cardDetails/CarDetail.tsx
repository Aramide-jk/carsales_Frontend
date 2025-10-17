import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import {
  DetailContainer,
  BackButton,
  ContentWrapper,
  CarDetailGrid,
  ImageSection,
  MainImageContainer,
  MainImage,
  FullscreenOverlay,
  FullscreenImageContainer,
  CloseButton,
  ImageNavButton,
  ThumbnailGrid,
  Thumbnail,
  InfoSection,
  CarHeader,
  CarTitle,
  CarPrice,
  CarDescription,
  SpecsGrid,
  SpecItem,
  SpecContent,
  FeaturesSection,
  SectionTitle,
  FeaturesList,
  FeatureItem,
  ActionButtons,
  NotFound,
  SoldLabel,
} from "../cardDetails/carDetails.styles";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Fuel,
  Settings,
  Gauge,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getCarById } from "../../services/api";
import Button from "../../components/Button";

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const fromGallery = location.state?.fromGallery;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(fromGallery || false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const data = await getCarById(id!);
        setCar(data);
      } catch (err: any) {
        if (err.response) {
          setError(err.response.data.message || "Could not fetch car details.");
        } else if (err.request) {
          setError("Network error. Please check your connection.");
        } else {
          setError("An unexpected error occurred while fetching the car.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCar();
  }, [id]);

  if (loading) {
    return (
      <DetailContainer>
        <NotFound>
          <h2>Loading Car Details...</h2>
        </NotFound>
      </DetailContainer>
    );
  }
  if (error || !car) {
    return (
      <DetailContainer>
        <NotFound>
          <h2>Car Not Found</h2>
          <p>
            {error ||
              "The car you're looking for doesn't exist or has been removed."}
          </p>
          <Link to="/cars">
            <Button variant="primary">View All Cars</Button>
          </Link>
        </NotFound>
      </DetailContainer>
    );
  }

  const galleryImages = car.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleCloseFullscreen = () => {
    if (fromGallery) {
      navigate("/gallery");
    } else {
      setIsFullscreen(false);
    }
  };

  const specs = [
    { icon: Calendar, label: "Year", value: car.year },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Settings, label: "Transmission", value: car.transmission },
    { icon: Gauge, label: "Mileage", value: car.mileage },
    { icon: Shield, label: "Condition", value: car.condition },
    { icon: Settings, label: "Engine", value: car.engine },
  ];

  return (
    <DetailContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <BackButton to={fromGallery ? "/gallery" : "/cars"}>
          <ArrowLeft size={20} />
          {fromGallery ? "Back to Gallery" : "Back to Cars"}
        </BackButton>

        <ContentWrapper>
          <CarDetailGrid $fromGallery={fromGallery}>
            {galleryImages.length > 0 && (
              <ImageSection>
                <MainImageContainer onClick={() => setIsFullscreen(true)}>
                  <MainImage
                    src={galleryImages[currentImageIndex]}
                    alt={car.brand}
                  />
                  <ImageNavButton className="prev" onClick={prevImage}>
                    <ChevronLeft size={24} />
                  </ImageNavButton>
                  <ImageNavButton className="next" onClick={nextImage}>
                    <ChevronRight size={24} />
                  </ImageNavButton>
                </MainImageContainer>

                {!fromGallery && (
                  <ThumbnailGrid>
                    {galleryImages.map((image: string, index: number) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`${car.name} ${index + 1}`}
                        $active={index === currentImageIndex}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </ThumbnailGrid>
                )}

                {/* Fullscreen Image Overlay */}
                {isFullscreen && (
                  <FullscreenOverlay onClick={handleCloseFullscreen}>
                    {/* Close button */}
                    <CloseButton onClick={handleCloseFullscreen}>×</CloseButton>
                    <FullscreenImageContainer
                      onClick={(e) => e.stopPropagation()}>
                      <MainImage
                        src={galleryImages[currentImageIndex]}
                        alt={car.brand}
                        style={{ borderRadius: "0" }}
                      />
                      <ImageNavButton className="prev" onClick={prevImage}>
                        <ChevronLeft size={24} />
                      </ImageNavButton>
                      <ImageNavButton className="next" onClick={nextImage}>
                        <ChevronRight size={24} />
                      </ImageNavButton>
                    </FullscreenImageContainer>
                  </FullscreenOverlay>
                )}
              </ImageSection>
            )}

            {!fromGallery && (
              <InfoSection>
                <CarHeader>
                  <CarTitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    {car.brand} {car.model}
                  </CarTitle>

                  {car.status === "sold" ? (
                    <SoldLabel
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}>
                      SOLD
                    </SoldLabel>
                  ) : (
                    <CarPrice
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}>
                      ₦{car.price.toLocaleString()}
                    </CarPrice>
                  )}

                  <CarDescription
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    {car.description}
                  </CarDescription>
                </CarHeader>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  <SectionTitle>Specifications</SectionTitle>
                  <SpecsGrid>
                    {specs.map((spec) => (
                      <SpecItem key={spec.label}>
                        <spec.icon size={24} />
                        <SpecContent>
                          <h4>{spec.label}</h4>
                          <p>{spec.value}</p>
                        </SpecContent>
                      </SpecItem>
                    ))}
                  </SpecsGrid>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  <FeaturesSection>
                    <SectionTitle>Premium Features</SectionTitle>
                    <FeaturesList>
                      {car.features &&
                        car.features.map((feature: string, index: number) => (
                          <FeatureItem key={index}>{feature}</FeatureItem>
                        ))}
                    </FeaturesList>
                  </FeaturesSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}>
                  <ActionButtons>
                    <a
                      href={`https://wa.me/message/LJBYJAKZGOFQK1?text=${encodeURIComponent(
                        `Hello, I'm interested in the ${car.brand} ${car.model} (${car.year}) listed on your website.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1 }}
                      className="p-8">
                      <Button variant="primary" size="large" fullWidth>
                        Chat
                      </Button>
                    </a>
                    {car.status !== "sold" && (
                      <Link
                        to={`/book-inspection?car=${car._id}`}
                        style={{ flex: 1 }}>
                        <Button variant="outline" size="large" fullWidth>
                          Book Inspection
                        </Button>
                      </Link>
                    )}
                  </ActionButtons>
                </motion.div>
              </InfoSection>
            )}
          </CarDetailGrid>
        </ContentWrapper>
      </motion.div>
    </DetailContainer>
  );
};

export default CarDetail;
