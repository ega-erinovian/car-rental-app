"use client";

import { HeaderInteractiveHoverButton } from "@/components/magicui/header-interactive-hover-button";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="container mx-auto h-full lg:h-[35vh] xl:h-[70vh] my-6 mb-12">
      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl md:grid md:grid-cols-9 overflow-hidden">
        <div className="p-8 pb-4 md:p-16 md:pe-0 md:col-span-4 flex flex-col justify-center gap-4 xl:gap-8">
          <h1 className="font-black text-3xl text-balance sm:text-4xl xl:text-7xl text-white">
            Experience
            <LineShadowTextHero text="The" /> <LineShadowTextHero text="Road" />{" "}
            Like Never Before
          </h1>
          <p className="text-xs lg:text-base text-white">
            Discover a curated selection of premium vehicles designed to elevate
            your driving experience and transform every journey into an
            unforgettable adventure. Rent your ideal car today and experience
            the road like never before.
          </p>
          <HeaderInteractiveHoverButton className="w-fit bg-black rounded-lg border-none text-white">
            Browse Cars
          </HeaderInteractiveHoverButton>
        </div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-60 ms-12 md:ms-12 md:h-full md:col-span-5">
          <Image
            src={"/images/car-header.webp"}
            alt="header-car"
            className="object-contain"
            fill
          />
        </motion.div>
      </div>
    </div>
  );
};

interface LineShadowTextHeroProps {
  text: string;
}

const LineShadowTextHero: FC<LineShadowTextHeroProps> = ({ text }) => {
  return (
    <LineShadowText className="italic" shadowColor="white">
      {text}
    </LineShadowText>
  );
};

export default HeroSection;
