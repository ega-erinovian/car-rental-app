import Link from "next/link";
import CarCard from "./components/CarCard";
import { ArrowRightIcon } from "lucide-react";

export default function BrowseCarsSection() {
  return (
    <section className="container mx-auto">
      <div className="py-16 pt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl xl:text-7xl max-w-64 md:max-w-full font-bold">
            Available Cars
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
          {[...Array(8)].map((_, index) => (
            <CarCard key={index} />
          ))}
        </div>
        <div className="w-full py-6 flex items-center justify-center md:justify-start gap-2 text-sm md:text-lg font-semibold">
          Can`t found the car you want?
          <Link
            href="#"
            className="flex items-center w-fit gap-2 text-blue-600 hover:text-blue-800 hover:translate-x-1 transition-all duration-300">
            Browse more
            <ArrowRightIcon className="w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
