"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import TimelineSection from "./components/TimelineSection";
import CTASection from "./components/CTASection";

const AboutUsComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar linkColor="text-white" linkHoverColor="text-gray-600" />
      <HeroSection />
      <OurStory />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <CTASection />
    </div>
  );
};

export default AboutUsComponent;
