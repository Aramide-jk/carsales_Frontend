import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Zap, Users } from "lucide-react";
import Button from "../../components/Button";
import CarCard from "../../components/CarCard";
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
    let intervalId: NodeJS.Timeout;

    const startScrolling = () => {
      intervalId = setInterval(() => {
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

    const stopScrolling = () => clearInterval(intervalId);

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
        const data = await getCars();
        setFeaturedCars(data.slice(0, 10));
      } catch (err: any) {
        setError(err.message || "Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

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
                  backgroundImage: `url(https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800)`,
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
                  backgroundImage: `url(https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800)`,
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
                  backgroundImage: `url(https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
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
            What Sets JKAutos Apart
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
