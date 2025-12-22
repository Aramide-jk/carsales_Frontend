import React from "react";
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

import {
  HeaderSection,
  HeaderOverlay,
  HeaderContent,
  PageTitle,
  PageSubtitle,
  Section,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ProcessSection,
  ProcessGrid,
  ProcessCard,
  ProcessIcon,
  ProcessTitle,
  ProcessDescription,
  ServicesList,
  ServiceItem,
  ServiceIcon,
  ServiceContent,
  FeaturesContainer,
} from "./features.styles";

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
      <HeaderSection
        style={{
          backgroundImage: `url(https://i.pinimg.com/736x/37/59/44/375944eb8a590f43075d4825266cba38.jpg)`,
        }}>
        <HeaderOverlay />
        <HeaderContent>
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
            Discover what makes JK_AUTOS the premier destination for luxury car
            enthusiasts
          </PageSubtitle>
        </HeaderContent>
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
