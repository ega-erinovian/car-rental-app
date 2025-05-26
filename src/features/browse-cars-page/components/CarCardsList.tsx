import CarCard from "@/features/home/components/browse-cars-section/components/CarCard";
import Car from "@/types/Car";
import { FC } from "react";

interface CarCardListInterface {
  cars: Car[];
}

const CarCardsList: FC<CarCardListInterface> = ({ cars }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cars.map((car, index) => (
        <div key={index}>
          <CarCard key={index} car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarCardsList;
