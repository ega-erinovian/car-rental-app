"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Calendar, MapPin, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CanvasText } from "@/components/ui/canvas-text";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full py-6 mb-20 h-full">
      <div className="w-full md:grid md:grid-cols-9 md:items-center gap-8 overflow-hidden">
        {/* Left Content Column */}
        <div className="pb-4 md:col-span-4 flex flex-col justify-center gap-4 xl:gap-3">
          <h1 className="font-black text-4xl text-balance xl:text-7xl text-gray-900 capitalize">
            Find, book, and rent a car at{" "}
            <CanvasText
              text="Lightning Speed"
              backgroundClassName="bg-blue-600 dark:bg-blue-700"
              colors={[
                "rgba(0, 153, 255, 1)",
                "rgba(0, 153, 255, 0.9)",
                "rgba(0, 153, 255, 0.8)",
                "rgba(0, 153, 255, 0.7)",
                "rgba(0, 153, 255, 0.6)",
                "rgba(0, 153, 255, 0.5)",
                "rgba(0, 153, 255, 0.4)",
                "rgba(0, 153, 255, 0.3)",
                "rgba(0, 153, 255, 0.2)",
                "rgba(0, 153, 255, 0.1)",
              ]}
              lineGap={4}
              animationDuration={20}
            />
          </h1>
          <p className="text-sm lg:text-base text-gray-600 max-w-md">
            Get a car wherever and whenever you need it with your iOS and Android
            device.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group h-11 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              <Link
                href="/cars"
                className="flex items-center gap-2 rounded-lg">
                Browse Cars
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:col-span-5 relative w-full h-100 sm:h-80 md:h-[540px] overflow-hidden rounded-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full">
            <Image
              src={"/images/car-header.webp"}
              alt="Blue sports car available to rent"
              className="object-cover object-left md:object-center"
              fill
              priority
            />
          </motion.div>
        </div>
      </div>

      <form
        action="/cars"
        method="get"
        className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end rounded-2xl border border-gray-100 bg-white p-4 shadow-lg md:p-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">Location</Label>
          <div className="relative">
            <MapPin
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <Input
              id="location"
              name="location"
              placeholder="Search your location"
              className="h-11 pl-9"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="pickup">Pickup date</Label>
          <div className="relative">
            <Calendar
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <Input
              id="pickup"
              name="pickup"
              type="datetime-local"
              className="h-11 pl-9"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="return">Return date</Label>
          <div className="relative">
            <Calendar
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <Input
              id="return"
              name="return"
              type="datetime-local"
              className="h-11 pl-9"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-11 w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </Button>
      </form>
    </div>
  );
};

export default HeroSection;
