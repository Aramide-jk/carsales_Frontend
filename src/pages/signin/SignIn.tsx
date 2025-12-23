import React, { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/api";

import {
  SignInContainer,
  FormWrapper,
  FormCard,
  Logo,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  InputContainer,
  PasswordToggle,
  ForgotPassword,
  SuccessMessage,
  SignUpLink,
} from "./signin.styles";

const SignIn: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

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
      const response = await signIn(formData);
      login(response.token);
      setIsSignedIn(true);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("An unexpected error occurred during sign-in.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      setTimeout(() => navigate("/"), 1000);
    }
  }, [isSignedIn, navigate]);

  if (isSignedIn) {
    return (
      <SignInContainer>
        <FormWrapper>
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <CheckCircle size={48} className="success-icon" />
            <h3>Welcome Back!</h3>
            <p>
              You have successfully signed in to your JK_AUTOS account.
              Redirecting you to your dashboard...
            </p>
          </SuccessMessage>
        </FormWrapper>
      </SignInContainer>
    );
  }

  return (
    <SignInContainer>
      <FormWrapper>
        <FormCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <Logo>
            JK_<span className="logo-accent">Autos</span>
          </Logo>
          <Title>Welcome Back</Title>
          <Subtitle>Sign in to your luxury car account</Subtitle>

          <Form onSubmit={handleSubmit}>
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

            <ForgotPassword href="#">Forgot your password?</ForgotPassword>

            <Button
              type="submit"
              variant="primary"
              size="large"
              fullWidth
              disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </Form>

          <SignUpLink>
            New to JK_AUTOS? <Link to="/signup">Sign up here</Link>
          </SignUpLink>
        </FormCard>
      </FormWrapper>
    </SignInContainer>
  );
};

export default SignIn;
