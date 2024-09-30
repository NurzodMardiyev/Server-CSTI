import React from "react";
import HeroSection from "../components/hero/Hero_section";
import About from "../components/about/About";
import Tariffs from "../components/tariffs/Tariffs";
import Afzalliklar from "../components/avfzalliklari/Afzalliklar";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <About />
      <Tariffs />
      <Afzalliklar />
    </div>
  );
}
