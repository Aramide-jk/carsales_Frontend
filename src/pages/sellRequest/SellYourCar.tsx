import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Car,
  Upload,
  DollarSign,
  Calendar,
  Settings,
  Fuel,
  User,
  Mail,
  Phone,
  CheckCircle,
  Camera,
  FileText,
  Award,
  ArrowRight,
  ArrowLeft,
  CreditCard,
  Shield,
  X,
} from "lucide-react";
import Button from "../../components/Button";
import { createSellRequest } from "../../services/api";

const SellCarContainer = styled.div`
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

const ProcessSection = styled.section`
  padding: 4rem 2rem;
  // background: rgba(220, 38, 38, 0.05);
`;

const ProcessTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProcessCard = styled(motion.div)<{ step: number }>`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  position: relative;

  &::before {
    content: "${(props) => props.step}";
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
  width: 80px;
  height: 80px;
  background: rgba(220, 38, 38, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 1.5rem;
  color: #dc2626;
`;

const ProcessTitle2 = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FormSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const FormContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  gap: 1rem;
`;

const StepDot = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$completed
      ? "#DC2626"
      : props.$active
      ? "#DC2626"
      : "rgba(220, 38, 38, 0.3)"};
  transition: all 0.3s ease;
`;

const StepLine = styled.div<{ $completed: boolean }>`
  width: 40px;
  height: 2px;
  background: ${(props) =>
    props.$completed ? "#DC2626" : "rgba(220, 38, 38, 0.3)"};
  transition: all 0.3s ease;
`;

const Form = styled.form`
  display: grid;
  gap: 2rem;
`;

const FormSection2 = styled.div`
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #dc2626;
    }
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const DocumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageUploadGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #dc2626;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f7f4;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: #f8f7f4;
  color: #2b2b2b;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid rgba(220, 38, 38, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #f8f7f4;

  &:focus {
    outline: none;
    border-color: #dc2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`;

const FileUpload = styled.div<{ $hasImage?: boolean }>`
  border: 2px dashed rgba(220, 38, 38, 0.3);
  border-radius: 12px;
  padding: ${(props) => (props.$hasImage ? "0" : "2rem")};
  text-align: center;
  background: rgba(220, 38, 38, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #dc2626;
    background: rgba(220, 38, 38, 0.1);
  }

  input {
    display: none;
  }
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(220, 38, 38, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    transform: scale(1.1);
  }
`;

const UploadIcon = styled.div`
  color: #dc2626;
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
`;

const UploadSubtext = styled.p`
  color: #999;
  font-size: 0.9rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ImageItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  background: rgba(34, 197, 94, 0.05);
  border: 2px solid rgba(34, 197, 94, 0.2);
  border-radius: 20px;

  .success-icon {
    color: #22c55e;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

interface UploadedFile {
  file: File;
  url: string;
}

const SellYourCar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    // Owner Information
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",

    // Car Information
    brand: "",
    model: "",
    year: "",
    mileage: "",
    features: "",
    location: "",
    engine: "",
    condition: "",
    transmission: "",
    fuelType: "",
    price: "",

    // Additional Details (moved to step 4)
    description: "",
    serviceHistory: "",
    modifications: "",
    reason: "",
  });

  // Document images state
  const [documentImages, setDocumentImages] = useState({
    idFront: null as UploadedFile | null,
    idBack: null as UploadedFile | null,
    carReg: null as UploadedFile | null,
    customPaper: null as UploadedFile | null,
  });

  // Car images state
  const [carImages, setCarImages] = useState({
    interiorImages: [] as UploadedFile[],
    exteriorImages: [] as UploadedFile[],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDocumentUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    documentType: keyof typeof documentImages
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDocumentImages((prev) => ({
        ...prev,
        [documentType]: { file, url },
      }));
    }
  };

  const handleCarImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    imageType: "interiorImages" | "exteriorImages"
  ) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setCarImages((prev) => ({
      ...prev,
      [imageType]: [...prev[imageType], ...newImages],
    }));
  };

  const removeDocumentImage = (documentType: keyof typeof documentImages) => {
    if (documentImages[documentType]) {
      URL.revokeObjectURL(documentImages[documentType]!.url);
      setDocumentImages((prev) => ({
        ...prev,
        [documentType]: null,
      }));
    }
  };

  const removeCarImage = (
    imageType: "interiorImages" | "exteriorImages",
    index: number
  ) => {
    const imageToRemove = carImages[imageType][index];
    URL.revokeObjectURL(imageToRemove.url);

    setCarImages((prev) => ({
      ...prev,
      [imageType]: prev[imageType].filter((_, i) => i !== index),
    }));
  };

  const validateStep = (step: number): boolean => {
    setErrorMessage("");

    switch (step) {
      case 1:
        const requiredFields = [
          "ownerName",
          "ownerEmail",
          "ownerPhone",
          "brand",
          "model",
          "year",
          "mileage",
          "condition",
          "transmission",
          "engine",
          "fuelType",
          "price",
          "location",
        ];
        const missingFields = requiredFields.filter(
          (field) => !formData[field as keyof typeof formData]
        );

        if (missingFields.length > 0) {
          setErrorMessage(
            "Please fill in all required fields before proceeding."
          );
          return false;
        }
        return true;

      case 2:
        const requiredDocuments = [
          "idFront",
          "idBack",
          "carReg",
          "customPaper",
        ] as const;
        const missingDocuments = requiredDocuments.filter(
          (doc) => !documentImages[doc]
        );

        if (missingDocuments.length > 0) {
          setErrorMessage(
            "Please upload all required documents before proceeding."
          );
          return false;
        }
        return true;

      case 3:
        if (
          carImages.interiorImages.length === 0 ||
          carImages.exteriorImages.length === 0
        ) {
          setErrorMessage(
            "Please upload both interiorImages and exteriorImages images before proceeding."
          );
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsLoading(true);
    setErrorMessage("");

    const submissionData = new FormData();

    // Append form fields
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    // Append document images
    if (documentImages.idFront)
      submissionData.append("idFront", documentImages.idFront.file);
    if (documentImages.idBack)
      submissionData.append("idBack", documentImages.idBack.file);
    if (documentImages.carReg)
      submissionData.append("carReg", documentImages.carReg.file);
    if (documentImages.customPaper)
      submissionData.append("customPaper", documentImages.customPaper.file);

    // Append car images
    carImages.interiorImages.forEach((img) => {
      submissionData.append("interiorImages", img.file);
    });
    carImages.exteriorImages.forEach((img) => {
      submissionData.append("exteriorImages", img.file);
    });

    try {
      await createSellRequest(submissionData);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Failed to submit sell request:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const processSteps = [
    {
      icon: FileText,
      title: "Submit Details",
      description:
        "Fill out our comprehensive form with your car's information.",
    },
    {
      icon: Award,
      title: "Professional Evaluation",
      description:
        "Our experts will assess your vehicle and provide a competitive market valuation.",
    },
    {
      icon: DollarSign,
      title: "Receive Offer",
      description:
        "Get a fair, transparent offer based on current market conditions and vehicle condition.",
    },
    {
      icon: CheckCircle,
      title: "Complete Sale",
      description:
        "Accept our offer and we'll handle all paperwork and payment processing.",
    },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <FormSection2>
              <h3>
                <User size={20} />
                Owner Information
              </h3>
              <FormGrid>
                <FormGroup>
                  <Label>
                    <User size={16} />
                    Full Name *
                  </Label>
                  <Input
                    type="text"
                    name="ownerName"
                    placeholder="Enter your full name"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <Mail size={16} />
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    name="ownerEmail"
                    placeholder="Enter your email"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <Phone size={16} />
                    Phone Number *
                  </Label>
                  <Input
                    type="tel"
                    name="ownerPhone"
                    placeholder="Enter your phone number"
                    value={formData.ownerPhone}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormGrid>
            </FormSection2>

            <FormSection2>
              <h3>
                <Car size={20} />
                Vehicle Details
              </h3>
              <FormGrid>
                <FormGroup>
                  <Label>Brand *</Label>
                  <Input
                    type="text"
                    name="brand"
                    placeholder="e.g., BMW, Mercedes, Audi"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Model *</Label>
                  <Input
                    type="text"
                    name="model"
                    placeholder="e.g., M4, S-Class, R8"
                    value={formData.model}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <Calendar size={16} />
                    Year *
                  </Label>
                  <Select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required>
                    <option value="">Select Year</option>
                    {Array.from({ length: 25 }, (_, i) => 2024 - i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Mileage *</Label>
                  <Input
                    type="text"
                    name="mileage"
                    placeholder="e.g., 25,000 miles"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>
                    <Settings size={16} />
                    Transmission *
                  </Label>
                  <Select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    required>
                    <option value="">Select Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>
                    <Fuel size={16} />
                    Fuel Type *
                  </Label>
                  <Select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                    required>
                    <option value="">Select Fuel Type</option>

                    <option value="Peteol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Condition *</Label>
                  <Select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required>
                    <option value="">Select Condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>₦ Asking Price *</Label>
                  <Input
                    type="text"
                    name="price"
                    placeholder="e.g., >₦85,000"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Engine Type *</Label>
                  <Input
                    type="text"
                    name="engine"
                    placeholder="e.g.,V4,V6,V8,V12"
                    value={formData.engine}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Your location *</Label>
                  <Input
                    type="text"
                    name="location"
                    placeholder="e.g., Lagos, Abuja, PortHarcourt"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormGrid>
            </FormSection2>
          </>
        );

      case 2:
        return (
          <FormSection2>
            <h3>
              <Shield size={20} />
              Upload Documents
            </h3>
            <DocumentGrid>
              <FormGroup>
                <Label>Front Side of Your ID *</Label>
                <FileUpload
                  $hasImage={!!documentImages.idFront}
                  onClick={() => document.getElementById("id-front")?.click()}>
                  <input
                    id="id-front"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleDocumentUpload(e, "idFront")}
                  />
                  {documentImages.idFront ? (
                    <>
                      <UploadedImage
                        src={documentImages.idFront.url}
                        alt="ID Front"
                      />
                      <RemoveImageButton
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDocumentImage("idFront");
                        }}>
                        <X size={16} />
                      </RemoveImageButton>
                    </>
                  ) : (
                    <>
                      <UploadIcon>
                        <Upload size={32} />
                      </UploadIcon>
                      <UploadText>Upload front side of ID</UploadText>
                      <UploadSubtext>
                        Clear photo of your government-issued ID
                      </UploadSubtext>
                    </>
                  )}
                </FileUpload>
              </FormGroup>

              <FormGroup>
                <Label>Back Side of Your ID *</Label>
                <FileUpload
                  $hasImage={!!documentImages.idBack}
                  onClick={() => document.getElementById("id-back")?.click()}>
                  <input
                    id="id-back"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleDocumentUpload(e, "idBack")}
                  />
                  {documentImages.idBack ? (
                    <>
                      <UploadedImage
                        src={documentImages.idBack.url}
                        alt="ID Back"
                      />
                      <RemoveImageButton
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDocumentImage("idBack");
                        }}>
                        <X size={16} />
                      </RemoveImageButton>
                    </>
                  ) : (
                    <>
                      <UploadIcon>
                        <Upload size={32} />
                      </UploadIcon>
                      <UploadText>Upload back side of ID</UploadText>
                      <UploadSubtext>
                        Back side of your government-issued ID
                      </UploadSubtext>
                    </>
                  )}
                </FileUpload>
              </FormGroup>

              <FormGroup>
                <Label>Vehicle Registration Front *</Label>
                <FileUpload
                  $hasImage={!!documentImages.carReg}
                  onClick={() => document.getElementById("reg-front")?.click()}>
                  <input
                    id="reg-front"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleDocumentUpload(e, "carReg")}
                  />
                  {documentImages.carReg ? (
                    <>
                      <UploadedImage
                        src={documentImages.carReg.url}
                        alt="Registration Front"
                      />
                      <RemoveImageButton
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDocumentImage("carReg");
                        }}>
                        <X size={16} />
                      </RemoveImageButton>
                    </>
                  ) : (
                    <>
                      <UploadIcon>
                        <Upload size={32} />
                      </UploadIcon>
                      <UploadText>Upload registration front</UploadText>
                      <UploadSubtext>
                        Front side of vehicle registration
                      </UploadSubtext>
                    </>
                  )}
                </FileUpload>
              </FormGroup>

              <FormGroup>
                <Label>Vehicle Custom Paper *</Label>
                <FileUpload
                  $hasImage={!!documentImages.customPaper}
                  onClick={() => document.getElementById("reg-back")?.click()}>
                  <input
                    id="reg-back"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleDocumentUpload(e, "customPaper")}
                  />
                  {documentImages.customPaper ? (
                    <>
                      <UploadedImage
                        src={documentImages.customPaper.url}
                        alt="Registration Back"
                      />
                      <RemoveImageButton
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDocumentImage("customPaper");
                        }}>
                        <X size={16} />
                      </RemoveImageButton>
                    </>
                  ) : (
                    <>
                      <UploadIcon>
                        <Upload size={32} />
                      </UploadIcon>
                      <UploadText>Upload custom paper</UploadText>
                      <UploadSubtext>Vehicle custom registration</UploadSubtext>
                    </>
                  )}
                </FileUpload>
              </FormGroup>
            </DocumentGrid>
          </FormSection2>
        );

      case 3:
        return (
          <FormSection2>
            <h3>
              <Camera size={20} />
              Upload Vehicle Images
            </h3>
            <ImageUploadGrid>
              <FormGroup>
                <Label>Upload Interior Images *</Label>
                <FileUpload
                  onClick={() =>
                    document.getElementById("interiorImages-images")?.click()
                  }>
                  <input
                    id="interiorImages-images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleCarImageUpload(e, "interiorImages")}
                  />
                  <UploadIcon>
                    <Upload size={48} />
                  </UploadIcon>
                  <UploadText>Upload Interior Photos</UploadText>
                  <UploadSubtext>
                    Upload multiple high-quality photos of your vehicle's
                    interiorImages
                  </UploadSubtext>
                </FileUpload>

                {carImages.interiorImages.length > 0 && (
                  <ImageGrid>
                    {carImages.interiorImages.map((image, index) => (
                      <ImageItem key={index}>
                        <ImagePreview
                          src={image.url}
                          alt={`Interior ${index + 1}`}
                        />
                        <RemoveImageButton
                          type="button"
                          onClick={() =>
                            removeCarImage("interiorImages", index)
                          }>
                          <X size={16} />
                        </RemoveImageButton>
                      </ImageItem>
                    ))}
                  </ImageGrid>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Upload Exterior Images *</Label>
                <FileUpload
                  onClick={() =>
                    document.getElementById("exteriorImages-images")?.click()
                  }>
                  <input
                    id="exteriorImages-images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleCarImageUpload(e, "exteriorImages")}
                  />
                  <UploadIcon>
                    <Upload size={48} />
                  </UploadIcon>
                  <UploadText>Upload Exterior Photos</UploadText>
                  <UploadSubtext>
                    Upload multiple high-quality photos of your vehicle's
                    exteriorImages
                  </UploadSubtext>
                </FileUpload>

                {carImages.exteriorImages.length > 0 && (
                  <ImageGrid>
                    {carImages.exteriorImages.map((image, index) => (
                      <ImageItem key={index}>
                        <ImagePreview
                          src={image.url}
                          alt={`Exterior ${index + 1}`}
                        />
                        <RemoveImageButton
                          type="button"
                          onClick={() =>
                            removeCarImage("exteriorImages", index)
                          }>
                          <X size={16} />
                        </RemoveImageButton>
                      </ImageItem>
                    ))}
                  </ImageGrid>
                )}
              </FormGroup>
            </ImageUploadGrid>
          </FormSection2>
        );

      case 4:
        return (
          <FormSection2>
            <h3>
              <FileText size={20} />
              Additional Information
            </h3>
            <FormGroup>
              <Label>Vehicle Description *</Label>
              <TextArea
                name="description"
                placeholder="Describe your vehicle's features, condition, and any notable details..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGrid>
              <FormGroup>
                <Label>Service History</Label>
                <TextArea
                  name="serviceHistory"
                  placeholder="Describe maintenance history, recent services, etc."
                  value={formData.serviceHistory}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Modifications</Label>
                <TextArea
                  name="modifications"
                  placeholder="List any modifications or upgrades"
                  value={formData.modifications}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormGrid>
            <FormGroup>
              <Label>Reason for Selling</Label>
              <TextArea
                name="reason"
                placeholder="Why are you selling this vehicle?"
                value={formData.reason}
                onChange={handleChange}
              />
            </FormGroup>
          </FormSection2>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <SellCarContainer>
        <FormSection>
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <CheckCircle size={64} className="success-icon" />
            <h3>Submission Received!</h3>
            <p>
              Thank you for choosing jk_Autos to sell your luxury vehicle. Our
              team of experts will review your submission and contact you within
              24 hours with a competitive market evaluation and offer.
            </p>
            <Button
              variant="primary"
              onClick={() => (window.location.href = "/cars")}>
              Browse Our Collection
            </Button>
          </SuccessMessage>
        </FormSection>
      </SellCarContainer>
    );
  }

  return (
    <SellCarContainer>
      <HeaderSection>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Sell Your Luxury Car
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Get the best value for your luxury vehicle with our expert evaluation
          and seamless selling process
        </PageSubtitle>
      </HeaderSection>

      <ProcessSection>
        <ProcessTitle>How It Works</ProcessTitle>
        <ProcessGrid>
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.title}
              step={index + 1}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>
              <ProcessIcon>
                <step.icon size={32} />
              </ProcessIcon>
              <ProcessTitle2>{step.title}</ProcessTitle2>
              <ProcessDescription>{step.description}</ProcessDescription>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessSection>

      <FormSection>
        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <FormTitle>
            {currentStep === 1 && "Vehicle Information"}
            {currentStep === 2 && "Upload Documents"}
            {currentStep === 3 && "Upload Vehicle Images"}
            {currentStep === 4 && "Additional Information"}
          </FormTitle>

          <StepIndicator>
            {[1, 2, 3, 4].map((step, index) => (
              <React.Fragment key={step}>
                <StepDot
                  $active={step === currentStep}
                  $completed={step < currentStep}
                />
                {index < 3 && <StepLine $completed={step < currentStep} />}
              </React.Fragment>
            ))}
          </StepIndicator>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Form
            onSubmit={
              currentStep === 4 ? handleSubmit : (e) => e.preventDefault()
            }>
            {renderStepContent()}

            <NavigationButtons>
              <div>
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}>
                    <ArrowLeft size={18} />
                    Previous
                  </Button>
                )}
              </div>

              <div>
                {currentStep < 4 ? (
                  <Button type="button" variant="primary" onClick={handleNext}>
                    Next
                    <ArrowRight size={18} />
                  </Button>
                ) : (
                  <Button type="submit" variant="primary" disabled={isLoading}>
                    {isLoading
                      ? "Submitting Your Information..."
                      : "Submit for Evaluation"}
                  </Button>
                )}
              </div>
            </NavigationButtons>
          </Form>
        </FormContainer>
      </FormSection>
    </SellCarContainer>
  );
};

export default SellYourCar;
