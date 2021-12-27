import React from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Proposal from "../../components/proposal/Proposal";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <About />
      <HowItWorks />
      <Proposal/>
    </>
  );
};

export default Home;
