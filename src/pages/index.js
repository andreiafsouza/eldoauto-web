import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import InfoSection from "../components/InfoSection";
import { insuranceInfo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/AboutSection";
import { aboutInfo } from "../components/AboutSection/Data";
import { navStyles } from "../components/Navbar/Data";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...navStyles} />
      <HeroSection />
      <ServicesSection />
      <InfoSection {...insuranceInfo} />
      <AboutSection {...aboutInfo} />
      <ContactSection />
      <GallerySection />
      <Footer />
    </>
  );
};

export default Home;
