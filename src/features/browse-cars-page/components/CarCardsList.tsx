import CarCard from "@/features/home/components/browse-cars-section/components/CarCard";
import Car from "@/types/Car";
import { FC } from "react";

interface CarCardListInterface {
  cars: Car[];
}

const CarCardsList: FC<CarCardListInterface> = ({ cars }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car, index) => (
        <div
          key={index}
          className="transform transition-all duration-300 hover:scale-105">
          <CarCard key={index} car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarCardsList;
