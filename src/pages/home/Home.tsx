import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <About />
      <HowItWorks />
    </>
  );
};

export default Home;
