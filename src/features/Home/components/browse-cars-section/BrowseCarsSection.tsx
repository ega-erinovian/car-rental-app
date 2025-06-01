"use client";

import { useGetRentedCars } from "@/hooks/api/useGetRentedCars";
import BrowseCarCTA from "./components/BrowseCarCTA";
import CarCard from "./components/CarCard";
import NoCarsFound from "@/components/NoCarsFound";
import CarCardSkeleton from "@/components/skeleton/CarCardSkeleton";

export default function BrowseCarsSection() {
  const { rentedCars, loading, error } = useGetRentedCars({ take: 8 });

  if ((rentedCars.length === 0 && !loading) || error) {
    return <NoCarsFound />;
  }

  return (
    <section className="container mx-auto" id="cars">
      <div className="py-16 pt-8">
        <div className="mb-8">
          <p className="font-bold text-blue-600 text-xl">Newest</p>
          <h1 className="text-5xl xl:text-7xl max-w-64 md:max-w-full font-bold">
            Available Cars
          </h1>
        </div>
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
            {rentedCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        )}
        <BrowseCarCTA />
      </div>
    </section>
  );
}
