import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/Navigationbar/NavigationBar";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Offer from "../Offer/Offer";

import Suggestion from "../Suggestion/Suggestion";

import Testimonial from "../Testimonial/Testmonial";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%", width: "98%" }} className="mx-auto">
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>
      <Services></Services>
      <Offer></Offer>
      <Testimonial></Testimonial>
      <Suggestion></Suggestion>
      <Footer></Footer>
    </div>
  );
};

export default Home;
