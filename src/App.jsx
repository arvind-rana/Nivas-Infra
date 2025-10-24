import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load pages and components
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Testimonails = lazy(() => import("./components/Testimonails"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ChooseUs = lazy(() => import("./components/ChooseUs"));

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Hero = lazy(() => import("./pages/Hero"));
const Team = lazy(() => import("./pages/Team"));
const Vision = lazy(() => import("./pages/Vision"));
const Aboutfooter = lazy(() => import("./pages/Aboutfooter"));

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Suspense
        fallback={
          <div className="text-center mt-20 text-lg font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Home page Route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Projects />
                <ChooseUs />
                <Testimonails />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* AboutUs page Route */}
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs />
                <Hero />
                <Team />
                <Vision />
                <Aboutfooter />
              </>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
