import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import BrowseCarsSection from "./components/browse-cars-section/BrowseCarsSection";
import FactsInNumberSection from "./components/FactsInNumberSection";
import InfoSection from "./components/InfoSection";
import Footer from "@/components/footer/Footer";
import FeaturesSection from "./components/features-section/FeaturesSection";

const HomePageComponent = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full px-4 mt-28">
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <BrowseCarsSection />
        <FactsInNumberSection />
        <InfoSection />
      </div>
      <Footer />
    </>
  );
};

export default HomePageComponent;
