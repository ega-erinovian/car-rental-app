import { getRentedCars } from "@/lib/contentful/api/getRentedCars";
import BrowseCarCTA from "./components/BrowseCarCTA";
import CarCard from "./components/CarCard";

export default async function BrowseCarsSection() {
  const rentedCars = await getRentedCars();

  if (!rentedCars) {
    return <h1>Not Found</h1>;
  }

  return (
    <section className="container mx-auto">
      <div className="py-16 pt-8">
        <div className="mb-8">
          <p className="font-bold text-blue-600 text-xl">Newest</p>
          <h1 className="text-5xl xl:text-7xl max-w-64 md:max-w-full font-bold">
            Available Cars
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8">
          {rentedCars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
        <BrowseCarCTA />
      </div>
    </section>
  );
}
