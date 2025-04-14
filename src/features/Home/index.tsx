import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import InfoSection from "./components/InfoSection";
import BrowseCarsSection from "./components/BrowseCarsSection";
import FAQSection from "./components/FAQSection";

const HomePageComponent = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full px-4 mt-28">
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        {/* <InfoSection /> */}
        <BrowseCarsSection />
        {/* Facts In Number Section */}
        {/* Search Car Section */}
      </div>
      {/* Footer Section */}
    </>
  );
};

export default HomePageComponent;
