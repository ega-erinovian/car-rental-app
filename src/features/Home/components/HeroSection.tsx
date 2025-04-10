"use client";

import { HeaderInteractiveHoverButton } from "@/components/magicui/header-interactive-hover-button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto h-full lg:h-[35vh] xl:h-[70vh]">
      <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800 my-6 rounded-3xl md:grid md:grid-cols-9 overflow-hidden">
        <div className="p-8 pb-4 md:p-16 md:pe-0 md:col-span-4 flex flex-col justify-center gap-4 xl:gap-8">
          <h1 className="font-black text-3xl sm:text-4xl xl:text-7xl text-white">
            Experience The Road Like Never Before
          </h1>
          <p className="text-xs lg:text-base text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            quibusdam! Veritatis eos ab reprehenderit odio, autem non fuga
            excepturi possimus.
          </p>
          <HeaderInteractiveHoverButton className="w-fit bg-orange-400 rounded-lg border-none text-white">
            View All Cars
          </HeaderInteractiveHoverButton>
        </div>
        <div className="relative w-full h-60 ms-12 md:ms-12 md:h-full md:col-span-5">
          <Image
            src={"/images/car-header.webp"}
            alt="header-car"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
