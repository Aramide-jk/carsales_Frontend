import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Zap, Users } from "lucide-react";
// import styled from "styled-components";
import Button from "../../components/Button";
import CarCard from "../../components/CarCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getCars } from "../../services/api";
import type { Car } from "../../types";
import {
  HomeContainer,
  HeroSection,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  Section,
  SectionHeader,
  SectionTitle,
  FeaturedCarsCarousel,
  ViewAllButton,
  InfoBoxGrid,
  InfoBox,
  ExploreNowText,
  WhyChooseSection,
  WhyChooseGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from "./home.styles";

// import api from "../services/api";

const Home: React.FC = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || featuredCars.length === 0) return;

    const scrollAmount = 320 + 16;
    let timer: ReturnType<typeof setTimeout>;

    const startScrolling = () => {
      timer = setInterval(() => {
        if (carousel) {
          if (
            carousel.scrollLeft + carousel.clientWidth >=
            carousel.scrollWidth - 5
          ) {
            carousel.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 2000);
    };

    const stopScrolling = () => clearInterval(timer);

    carousel.addEventListener("mouseenter", stopScrolling);
    carousel.addEventListener("mouseleave", startScrolling);
    startScrolling();

    return () => {
      stopScrolling();
    };
  }, [featuredCars]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars(1, 10);
        if (!data.success) throw new Error("Failed to fetch cars");
        setFeaturedCars(data.data);
      } catch (err: any) {
        if (err.response) {
          setError(err.response.data.message || "Could not fetch cars.");
        } else if (err.request) {
          setError("Network error. Please check your connection.");
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <LoadingSpinner text="Loading featured cars..." />;
  }
  if (error) {
    return <LoadingSpinner text={`Error: ${error}`} />;
  }

  const features = [
    {
      icon: Shield,
      title: "Trusted Dealer",
      description:
        "Over six years of excellence in luxury car sales with verified authenticity and complete transparency.",
    },
    {
      icon: Award,
      title: "Luxury Curation",
      description:
        "Each vehicle is hand-picked for its exceptional quality, performance, and pristine condition.",
    },
    {
      icon: Zap,
      title: "Seamless Buying",
      description:
        "Streamlined purchase process with flexible financing options and comprehensive support.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated luxury car specialists to guide you through every step of your purchase journey.",
    },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Luxury on Wheels
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Exceptional cars. Smooth process. Trusted by countless owners.
          </HeroSubtitle>
          {/* <HeroTagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            "Where Excellence Meets Elegance"
          </HeroTagline> */}
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <Link to="/cars">
              <Button variant="primary" size="large">
                View Cars <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/book-inspection">
              <Button variant="outline" size="large">
                Book Inspection
              </Button>
            </Link>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionHeader>
            <SectionTitle>Featured Stock</SectionTitle>
          </SectionHeader>
          <FeaturedCarsCarousel ref={carouselRef}>
            {featuredCars.map((car, index) => {
              return <CarCard key={car._id} car={car} index={index} />;
            })}
          </FeaturedCarsCarousel>
          <ViewAllButton>
            <Link to="/cars">
              <Button variant="secondary" size="large">
                View All Cars <ArrowRight size={20} />
              </Button>
            </Link>
          </ViewAllButton>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}>
          <InfoBoxGrid>
            <InfoBox to="/cars" whileHover={{ y: -8 }}>
              <div
                className="box-background"
                style={{
                  backgroundImage: `url(https://i.pinimg.com/736x/6f/2c/9e/6f2c9ed9bb47c670c445d890080830c3.jpg)`,
                }}
              />
              <div>
                <h3>Available Cars</h3>
                <ExploreNowText>Explore Now</ExploreNowText>
              </div>
            </InfoBox>
            <InfoBox to="/sold-cars" whileHover={{ y: -8 }}>
              <div
                className="box-background"
                style={{
                  backgroundImage: `url(https://i.pinimg.com/736x/2f/30/03/2f3003335fa848a42d13debeadada944.jpg)`,
                }}
              />
              <div>
                <h3>Sold Cars</h3>
                <ExploreNowText>Explore Now</ExploreNowText>
              </div>
            </InfoBox>
            <InfoBox to="/sell-your-car" whileHover={{ y: -8 }}>
              <div
                className="box-background"
                style={{
                  backgroundImage: `url(https://i.pinimg.com/736x/cc/9a/91/cc9a91360fd779cecc099543b4696da9.jpg)`,
                }}
              />
              <div>
                <h3>Sell Your Car</h3>
                <ExploreNowText>Explore Now</ExploreNowText>
              </div>
            </InfoBox>
          </InfoBoxGrid>
        </motion.div>
      </Section>

      <WhyChooseSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionTitle
            style={{
              textAlign: "center",
              color: "black",
            }}>
            What Sets JK_Autos Apart
          </SectionTitle>
          <WhyChooseGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <FeatureIcon>
                  <feature.icon size={32} />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </WhyChooseGrid>
        </motion.div>
      </WhyChooseSection>
    </HomeContainer>
  );
};

export default Home;
