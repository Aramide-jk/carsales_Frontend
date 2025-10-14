import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  User,
} from "lucide-react";
import Button from "../../components/Button";
import { sendContactMessage } from "../../services/api";
import {
  ContactContainer,
  ContentWrapper,
  HeaderContent,
  HeaderOverlay,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  MapSection,
  MapContainer,
  MapTitle,
  MapSubtitle,
  MapFrame,
  WhatsAppButton,
  ContactGrid,
  ContactInfo,
  InfoCard,
  SectionTitle,
  InfoItem,
  InfoContent,
  ContactForm,
  FormCard,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  TextArea,
  SuccessMessage,
  ErrorMessage,
} from "./contact.styles";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await sendContactMessage(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+234 813 013 575 6",
      description: "Call us anytime for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      content: "jkautos97@gmail.com",
      description: "Send us your questions and we'll respond promptly",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "12, kasimu lawalstreet,",
      description: "City Center, zaria",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-7PM",
      description: "Saturday: 10AM-6PM, Sunday: By appointment",
    },
  ];

  return (
    <ContactContainer>
      <HeroSection
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}>
        <HeaderOverlay />
        <HeaderContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Get In Touch
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            Have questions about our luxury vehicles or need personalized
            assistance? Our expert team is here to help you find your perfect
            car.
          </HeroSubtitle>
        </HeaderContent>
      </HeroSection>

      <ContentWrapper>
        <ContactGrid>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <InfoCard>
                <SectionTitle>Contact Information</SectionTitle>
                {contactInfo.map((info) => (
                  <InfoItem key={info.title}>
                    <info.icon size={24} />
                    <InfoContent>
                      <h4>{info.title}</h4>
                      <p>{info.content}</p>
                      <p style={{ fontSize: "0.85rem", marginTop: "0.2rem" }}>
                        {info.description}
                      </p>
                    </InfoContent>
                  </InfoItem>
                ))}
              </InfoCard>
            </motion.div>
          </ContactInfo>

          <ContactForm>
            <FormCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <SectionTitle>Send us a Message</SectionTitle>

              {isSubmitted ? (
                <SuccessMessage
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}>
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for contacting jk_Autos. We've received your
                    message and will get back to you within 24 hours.
                  </p>
                </SuccessMessage>
              ) : (
                <>
                  <Form onSubmit={handleSubmit}>
                    <FormRow>
                      <FormGroup>
                        <Label htmlFor="name">
                          <User size={16} />
                          Full Name
                        </Label>
                        <Input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="email">
                          <Mail size={16} />
                          Email
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </FormRow>

                    <FormRow>
                      <FormGroup>
                        <Label htmlFor="phone">
                          <Phone size={16} />
                          Phone
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </FormRow>

                    <FormGroup>
                      <Label htmlFor="message">
                        <MessageCircle size={16} />
                        Message
                      </Label>
                      <TextArea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>

                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      fullWidth
                      disabled={isLoading}>
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Form>
                </>
              )}
            </FormCard>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>

      <MapSection>
        <MapContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <MapTitle>Visit Our Showroom</MapTitle>
            <MapSubtitle>
              Experience our luxury collection in person at our premium showroom
              location
            </MapSubtitle>
            <MapFrame>
              Interactive Map Coming Soon - 123 jk_Autos, City Center
            </MapFrame>
          </motion.div>
        </MapContainer>
      </MapSection>

      <WhatsAppButton
        href="https://wa.me/message/LJBYJAKZGOFQK1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 500 }}>
        <MessageCircle size={28} />
      </WhatsAppButton>
    </ContactContainer>
  );
};

export default Contact;
