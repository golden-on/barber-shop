import React from "react";
import Banner from "./Banner";
import HeroContent from "./HeroContent";
import Navbar from "./NavBar";

const Hero: React.FC = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default Hero;
