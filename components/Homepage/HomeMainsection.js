import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import Ninja from "./Ninja";
import CalculatorTabs from "./Claculator/CalculatorTabs";
import AwardCard from "./AwardCard";
import Feedback from "./Feedback";
import Media from "./Media";
import Subscribe from "./Subscribe";
import OurBlog from "./OurBlog";

function HomeMainsection() {
  return (
    <>
      <Hero />
      <Feature />
      <Ninja />
      <CalculatorTabs />
      <Feedback />
      <AwardCard />
      <OurBlog />
      <Media/>
      <Subscribe />
    </>
  );
}

export default HomeMainsection;
