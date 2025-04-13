import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import InfoSection from "./components/InfoSection";

const HomePageComponent = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full px-4 mt-28">
        <HeroSection />
        <FeaturesSection />
        <InfoSection />
        {/* Available Car Section */}
        {/* Facts In Number Section */}
        {/* Search Car Section */}
      </div>
      {/* Footer Section */}
    </>
  );
};

export default HomePageComponent;
