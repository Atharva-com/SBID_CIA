

import Image from "next/image";
import CompanyName from "./components/RevealCompannyName/CompanyName";
import FullscreenCarousel from "./components/heroCarousel";
import Hero from "./components/homePage/hero/HeroSection";
import ServicesSection from "./components/homePage/services/Services";
import ProjectsSection from "./components/homePage/projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1d1d1d]">
      {/* <CompanyName /> */}
      <FullscreenCarousel />

      {/* <Hero /> */}

      <ServicesSection />

      <ProjectsSection />
    </div>

  );
}
