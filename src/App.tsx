import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

// Import pages
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import CarDetail from "./pages/cardDetails/CarDetail";
import BookInspection from "./pages/bookInspection/BookInspection";
import Checkout from "./pages/checkout/Checkout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SignIn from "./pages/signin/SignIn";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";
// import { AuthProvider } from "./contexts/AuthContext";
import { AuthProvider } from "./contexts/AuthContext";
import Payment from "./pages/payment/Payment";
import SoldCars from "./pages/sold/SoldCars";
import Features from "./pages/features/Features";
import SellYourCar from "./pages/sellRequest/SellYourCar";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/profile/Profile";
import Gallery from "./components/Gallery";

const AppContainer = styled.div`
  min-height: 100vh;
  // background-color: #f8f7f4;
`;

const MainContent = styled.main`
  min-height: calc(100vh - 120px);
`;

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContainer>
          <GlobalStyles />
          <Navbar />
          <MainContent>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/cars/:id" element={<CarDetail />} />
                <Route path="/sell-your-car" element={<SellYourCar />} />
                <Route path="/features" element={<Features />} />
                <Route path="/sold-cars" element={<SoldCars />} />
                <Route path="/book-inspection" element={<BookInspection />} />
                <Route path="/checkout/:id" element={<Checkout />} />
                <Route path="/payment/:id" element={<Payment />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="gallery" element={<Gallery />} />
              </Routes>
            </AnimatePresence>
          </MainContent>
          <Footer />
        </AppContainer>
      </AuthProvider>
    </Router>
  );
}

export default App;
