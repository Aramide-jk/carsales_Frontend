import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        const data = await getCarById(id!);
        setCar(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch car");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCar();
  }, [id]);

  if (loading) return <p>Loading car...</p>;
  if (error) return <p>{error}</p>;

  if (loading) {
    return (
      <DetailContainer>
        <NotFound>
          <h2>Loading...</h2>
        </NotFound>
      </DetailContainer>
    );
  }
  if (error || !car) {
    return (
      <DetailContainer>
        <NotFound>
          <h2>Car Not Found</h2>
          <p>The car you're looking for doesn't exist or has been removed.</p>
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
        <BackButton to="/cars">
          <ArrowLeft size={20} />
          Back to Cars
        </BackButton>

        <ContentWrapper>
          <CarDetailGrid>
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

                {/* Fullscreen Image Overlay */}
                {isFullscreen && (
                  <FullscreenOverlay onClick={() => setIsFullscreen(false)}>
                    {/* Close button */}
                    <CloseButton onClick={() => setIsFullscreen(false)}>
                      ×
                    </CloseButton>
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

            <InfoSection>
              <CarHeader>
                <CarTitle
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}>
                  {car.brand} {car.model}
                </CarTitle>

                <CarPrice
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}>
                  ₦{car.price.toLocaleString()}
                </CarPrice>

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
                    <Button variant="primary" size="small" fullWidth>
                      Chat
                    </Button>
                  </a>

                  <Link
                    to={`/book-inspection?car=${car._id}`}
                    style={{ flex: 1 }}>
                    <Button variant="outline" size="large" fullWidth>
                      Book Inspection
                    </Button>
                  </Link>
                </ActionButtons>
              </motion.div>
            </InfoSection>
          </CarDetailGrid>
        </ContentWrapper>
      </motion.div>
    </DetailContainer>
  );
};

export default CarDetail;
