
import CompanyName from "./components/RevealCompannyName/CompanyName";
import FullscreenCarousel from "./components/heroCarousel";
import ServicesSection from "./components/homePage/services/Services";
import ProjectsSection from "./components/homePage/projects/Projects";
import AboutPage from "./components/homePage/about/About";
import ContactSection from "./components/homePage/contact/ContactSection";
import TrackRecord from "./components/homePage/records/TrackRecord";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 font-inter overflow-x-hidden">

      <CompanyName />

      <FullscreenCarousel />

      <ServicesSection />

      <TrackRecord />

      <ProjectsSection />

      <div className="lg:block hidden">
        <AboutPage />
      </div>

      <ContactSection />

    </div>

  );
}
