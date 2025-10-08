import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Zap,
  Users,
  Search,
  CreditCard,
  Truck,
  Settings,
  Eye,
  FileText,
  Phone,
  Star,
  CheckCircle,
  Clock,
  MapPin,
  Heart,
} from "lucide-react";

const FeaturesContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
`;

const HeaderSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f7f4 0%, rgba(220, 38, 38, 0.1) 100%);
`;

const PageTitle = styled(motion.h1)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #dc2626;
`;

const FeatureTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ProcessSection = styled.section`
  padding: 4rem 2rem;
  // background: rgba(220, 38, 38, 0.02);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProcessCard = styled(motion.div)<{ $step: number }>`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;

  &::before {
    content: "${(props) => props.$step}";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: #dc2626;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

const ProcessIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 1rem;
  color: #dc2626;
`;

const ProcessTitle = styled.h4`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  color: #1a1a1a;
  margin-bottom: 0.8rem;
`;

const ProcessDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ServiceItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  flex-shrink: 0;
`;

const ServiceContent = styled.div`
  h4 {
    font-family: "Playfair Display", serif;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: Shield,
      title: "Trusted Excellence",
      description:
        "Over a decade of proven expertise in luxury car sales with verified authenticity and complete transparency in every transaction.",
    },
    {
      icon: Award,
      title: "Curated Collection",
      description:
        "Each vehicle is hand-picked by our experts for exceptional quality, performance, and pristine condition. Only the finest make our selection.",
    },
    {
      icon: Zap,
      title: "Seamless Experience",
      description:
        "Streamlined buying process with flexible financing options, comprehensive support, and white-glove service from start to finish.",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description:
        "Dedicated luxury car specialists provide personalized guidance, helping you find the perfect vehicle for your lifestyle and preferences.",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description:
        "Powerful filtering system to find your dream car by brand, year, price range, features, and more with intelligent recommendations.",
    },
    {
      icon: Eye,
      title: "Professional Inspection",
      description:
        "Comprehensive 150-point quality checks, detailed condition reports, and expert evaluations ensure complete peace of mind.",
    },
  ];

  const buyingProcess = [
    {
      icon: Search,
      title: "Browse & Search",
      description: "Explore our curated collection using advanced filters",
    },
    {
      icon: Eye,
      title: "Book Inspection",
      description: "Schedule a professional vehicle inspection",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete paperwork with our assistance",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Choose from flexible payment options",
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "White-glove delivery to your location",
    },
  ];

  const additionalServices = [
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
    },
    {
      icon: Settings,
      title: "Maintenance Services",
      description: "Ongoing maintenance and service recommendations",
    },
    {
      icon: Star,
      title: "Warranty Options",
      description: "Extended warranty packages for added protection",
    },
    {
      icon: CreditCard,
      title: "Financing Solutions",
      description: "Competitive financing rates and flexible terms",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Professional delivery service across the country",
    },
    {
      icon: Heart,
      title: "Trade-In Program",
      description: "Fair market value for your current luxury vehicle",
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "Every vehicle comes with our quality assurance",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Appointments that work with your busy schedule",
    },
    {
      icon: MapPin,
      title: "Premium Showroom",
      description: "Luxury showroom experience in prime location",
    },
  ];

  return (
    <FeaturesContainer>
      <HeaderSection>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Premium Features & Services
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Discover what makes jk_Autos the premier destination for luxury car
          enthusiasts
        </PageSubtitle>
      </HeaderSection>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>Core Features</SectionTitle>
          <FeaturesGrid>
            {coreFeatures.map((feature, index) => (
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
          </FeaturesGrid>
        </motion.div>
      </Section>

      <ProcessSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>Our Buying Process</SectionTitle>
          <ProcessGrid>
            {buyingProcess.map((step, index) => (
              <ProcessCard
                key={step.title}
                $step={index + 1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <ProcessIcon>
                  <step.icon size={24} />
                </ProcessIcon>
                <ProcessTitle>{step.title}</ProcessTitle>
                <ProcessDescription>{step.description}</ProcessDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </motion.div>
      </ProcessSection>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>Additional Services</SectionTitle>
          <ServicesList>
            {additionalServices.map((service, index) => (
              <ServiceItem
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}>
                <ServiceIcon>
                  <service.icon size={20} />
                </ServiceIcon>
                <ServiceContent>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </ServiceContent>
              </ServiceItem>
            ))}
          </ServicesList>
        </motion.div>
      </Section>
    </FeaturesContainer>
  );
};

export default Features;
