import React, { useState, useEffect } from "react";

import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/api";

import {
  SignUpContainer,
  FormWrapper,
  FormCard,
  Form,
  FormGroup,
  Label,
  Input,
  Logo,
  Title,
  Subtitle,
  InputContainer,
  PasswordToggle,
  SignInLink,
  SuccessMessage,
} from "./signup.styles";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await signUp(formData);
      setIsSignedUp(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during sign-up.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedUp) {
      setTimeout(() => navigate("/signin"), 3000);
    }
  }, [isSignedUp, navigate]);

  if (isSignedUp) {
    return (
      <SignUpContainer>
        <FormWrapper>
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <CheckCircle size={48} className="success-icon" />
            <h3>Account Created!</h3>
            <p>
              You’ve successfully signed up for jk_Autos. Redirecting you to the
              sign-in page...
            </p>
          </SuccessMessage>
        </FormWrapper>
      </SignUpContainer>
    );
  }

  return (
    <SignUpContainer>
      <FormWrapper>
        <FormCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <Logo>
            jk_<span className="logo-accent">Autos</span>
          </Logo>
          <Title>Create Your Account</Title>
          <Subtitle>Join our luxury car community</Subtitle>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">
                <User size={18} />
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                <Mail size={18} />
                Email Address
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

            <FormGroup>
              <Label htmlFor="password">
                <Lock size={18} />
                Password
              </Label>
              <InputContainer>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </PasswordToggle>
              </InputContainer>
            </FormGroup>

            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </Form>

          <SignInLink>
            Already have an account? <a href="/signin">Sign in here</a>
          </SignInLink>
        </FormCard>
      </FormWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
