import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Home, Car, Image, Info, User, Phone } from "lucide-react";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  transition: transform 0.5s ease-in-out;
  // backdrop-filter: blur(10px);
  // transition: all 0.5s ease;

  // z-index: 999;
  @media (max-width: 768px) {
    padding: 0.8rem 0;
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
  }
`;

const NavWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  // padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-bottom 0.3s ease;
  gap: 0.5rem;
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  text-transform: uppercase;
  text-decoration: none;

  .logo-icon {
    color: #dc2626;
  }

  .logo-text {
    color: #dc2626;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(220, 38, 38, 0.2);
  margin: 0.2rem 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinksContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: #2b2b2b;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #dc2626;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.$isActive ? "100%" : "0")};
    height: 2px;
    background: #dc2626;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SignInButton = styled(Link)`
  background: transparent;
  color: #dc2626;
  padding: 0.5rem 1.5rem;
  border: 2px solid #dc2626;
  border-radius: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: #dc2626;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
  }
`;

// const LogoutButton = styled.button`
//   background: transparent;
//   color: #dc2626;
//   padding: 0.8rem 1.5rem;
//   border: 2px solid #dc2626;
//   border-radius: 16px;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     background: #dc2626;
//     color: white;
//     transform: translateY(-2px);
//     box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
//   }
// `;

const BottomNav = styled.nav<{ $hidden: boolean }>`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0.5rem 0;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.$hidden ? "translateX(100%)" : "translateY(0)"};
    z-index: 999;
  }
`;

const BottomNavItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  color: ${(props) => (props.$active ? "#dc2626" : "#666")};
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 600;
  transition: color 0.3s ease;
  padding: 0.2rem 0.5rem;

  svg {
    transition: color 0.3s ease;
  }

  &:hover {
    color: #dc2626;
  }
`;

// === NAVBAR COMPONENT === //
const Navbar: React.FC = () => {
  const [_, setIsScrolled] = useState(false);
  const [isBottomNavHidden, setIsBottomNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  // const navigate = useNavigate();

  const { token } = useAuth();
  const isSignedIn = !!token;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsBottomNavHidden(true);
      } else {
        setIsBottomNavHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // const handleLogout = () => {
  //   logout();
  //   navigate("/signin");
  // };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/cars", label: "Available Cars" },
    { path: "/gallery", label: "Gallery" },
    { path: "/sold-cars", label: "Sold Cars" },
    // { path: "/sell-your-car", label: "Sell My Car" },
    { path: "/features", label: "Features" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const mobileNavItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/cars", label: "Cars", icon: Car },
    // { path: "/sell-your-car", label: "Sell", icon: Tag },
    { path: "/about", label: "About", icon: Info },
    { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/contact", label: "Contact", icon: Phone },
    {
      path: isSignedIn ? "/profile" : "/signin",
      label: isSignedIn ? "Profile" : "Sign In",
      icon: User,
    },
  ];

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Logo to="/">
            <span className="logo-text">SK</span>_Leeno
          </Logo>
        </NavWrapper>
        <Divider />
        <NavContent>
          <NavLinksContainer>
            <NavLinks>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  $isActive={location.pathname === item.path}>
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
          </NavLinksContainer>

          <NavButtons>
            {isSignedIn ? (
              <SignInButton to="/profile">Profile</SignInButton>
            ) : (
              <SignInButton to="/signin">Sign In</SignInButton>
            )}
          </NavButtons>
        </NavContent>
      </NavContainer>
      {/* Mobile Bottom Navigation */}
      <BottomNav $hidden={isBottomNavHidden}>
        {mobileNavItems.map((item) => (
          <BottomNavItem
            key={item.path}
            to={item.path}
            $active={location.pathname === item.path}>
            <item.icon
              size={22}
              strokeWidth={location.pathname === item.path ? 2.5 : 2}
            />
            <span>{item.label}</span>
          </BottomNavItem>
        ))}
      </BottomNav>
    </>
  );
};

export default Navbar;
