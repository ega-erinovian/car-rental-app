import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Driving Your Dreams
            <br />
            <span className="text-blue-200">Since 2020</span>
          </h1>
          <p className="text-blue-100 leading-relaxed px-24">
            We&apos;re more than just a car rental company. We&apos;re your
            trusted partner in creating unforgettable journeys and experiences
            on the road.
          </p>
        </motion.div>
      </div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;
