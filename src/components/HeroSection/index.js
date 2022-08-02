import React from "react";
import { HeroContainer } from "./HeroElements";

import Slider from "../Slider/Slider";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <Slider />
    </HeroContainer>
  );
};

export default HeroSection;
