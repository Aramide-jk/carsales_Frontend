import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Shield, Zap, Star } from "lucide-react";
import {
  AboutContainer,
  HeroSection,
  HeroTitle,
  HeaderOverlay,
  HeaderContent,
  HeroSubtitle,
  HeroTagline,
  Section,
  SectionTitle,
  StoryGrid,
  StoryImage,
  StoryContent,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  StatsSection,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
  TestimonialsSection,
  TestimonialGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
} from "./about.styles";

const About: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in every vehicle we curate, ensuring only the finest luxury cars make it to our collection.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "Built on transparency and integrity, we provide complete vehicle histories and honest assessments to earn your confidence.",
    },
    {
      icon: Users,
      title: "Service",
      description:
        "Our dedicated team of luxury car specialists provides personalized service tailored to your unique preferences and needs.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Embracing cutting-edge technology and modern practices to create a seamless, sophisticated buying experience.",
    },
  ];

  const stats = [
    { number: "115+", label: "Cars Sold" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "45+", label: "Luxury Brands" },
  ];

  const testimonials = [
    {
      text: "SK_Leeno transformed my car buying experience. Their attention to detail and commitment to excellence is unmatched. I found my dream car and couldn't be happier.",
      author: "Sheriff",
    },
    {
      text: "The level of service and professionalism at SK_Leeno is exceptional. They made purchasing my luxury vehicle effortless and enjoyable.",
      author: "DLord",
    },
    {
      text: "The moment I reached out, I knew I was dealing with professionals. The car was exactly as described—immaculate condition and fairly priced.",
      author: "DecMedia",
    },
    {
      text: "From browsing to purchase, every step was seamless. The team's expertise in luxury vehicles is evident in their curated collection.",
      author: "Adelekan",
    },
    {
      text: "Exceptional service from start to finish. They understood exactly what I was looking for and delivered beyond expectations. Truly a premium experience.",
      author: "Aliyu",
    },
  ];

  return (
    <AboutContainer>
      <HeroSection
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}>
        <HeaderOverlay />
        <HeaderContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Excellence in Every Drive
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            For over six years, we've been connecting discerning buyers with the
            world’s finest luxury vehicles, building lasting relationships
            founded on trust and excellence
          </HeroSubtitle>
          <HeroTagline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            "Where Passion Meets Precision"
          </HeroTagline>
        </HeaderContent>
      </HeroSection>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>Our Story</SectionTitle>
          <StoryGrid>
            <StoryImage
              src="https://i.pinimg.com/736x/d0/a2/ac/d0a2acdba110e02d704376b416f89922.jpg"
              alt="Luxury car showroom"
            />
            <StoryContent>
              <h3>A Legacy of Luxury</h3>
              <p>
                Founded in 2019 with a vision to redefine the luxury car buying
                experience, SK_Leeno began as a boutique dealership focused on
                curating exceptional vehicles for exceptional people.
              </p>
              <p>
                Our founder's passion for automotive excellence and commitment
                to customer satisfaction laid the foundation for what has become
                a trusted name in luxury vehicle sales.
              </p>
              <p>
                Today, we continue to uphold those founding principles while
                embracing innovation and expanding our reach to serve luxury car
                enthusiasts worldwide.
              </p>
            </StoryContent>
          </StoryGrid>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <ValueIcon>
                  <value.icon size={32} />
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </motion.div>
      </Section>

      <StatsSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>Our Track Record</SectionTitle>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </motion.div>
      </StatsSection>

      <TestimonialsSection>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <TestimonialGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  {testimonial.author}
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </motion.div>
      </TestimonialsSection>
    </AboutContainer>
  );
};

export default About;
