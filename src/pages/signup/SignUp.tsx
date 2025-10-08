import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/api"; // <-- make sure you have a signup endpoint

const SignUpContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f7f4 0%, rgba(220, 38, 38, 0.05) 100%);
`;

const FormWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 2rem;
`;

const FormCard = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  .logo-accent {
    color: #dc2626;
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  text-align: left;
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

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
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

const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #dc2626;
  }
`;

const SignInLink = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #666;

  a {
    color: #dc2626;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(34, 197, 94, 0.05);
  border: 2px solid rgba(34, 197, 94, 0.2);
  border-radius: 20px;

  .success-icon {
    color: #22c55e;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

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
