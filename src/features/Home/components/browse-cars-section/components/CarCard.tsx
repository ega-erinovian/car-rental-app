"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useFormatRupiah from "@/hooks/useFomatRupiah";
import { CalendarIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { FC, useEffect } from "react";

interface CarCardProps {
  car: {
    entryId?: string;
    type?: string;
    slug?: string;
    company?: string;
    category?: string;
    price?: number;
    transmition?: string;
    seatCapacity?: number;
    manufactureYear?: number;
    image?: string;
  };
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const { formattedRupiah, convertToRupiah } = useFormatRupiah();

  useEffect(() => {
    convertToRupiah(car.price || 0);
  }, [car, convertToRupiah]);

  return (
    <Card>
      <CardHeader>
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full h-[180px] rounded-xl flex items-center justify-center">
            <Image
              src={car.image || ""}
              alt="car-1"
              fill
              loading="lazy"
              className="object-contain object-center"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-between gap-2">
          <div>
            <h1 className="font-bold text-xl">
              {car.company + " " + car.type}
            </h1>
            <p className="text-sm">{car.category}</p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-600">
              {formattedRupiah}
            </h1>
          </div>
        </div>
        <div className="flex mt-8 divide-x justify-center text-xs md:text-base lg:text-xs">
          <div className="flex gap-1 items-center px-6 lg:px-4  ps-0">
            <GearIcon />
            <p>{car.transmition}</p>
          </div>
          <div className="flex gap-1 items-center px-6 lg:px-4 ">
            <PersonIcon />
            <p>{car.seatCapacity} person</p>
          </div>
          <div className="flex gap-1 items-center px-6 lg:px-4  pe-0">
            <CalendarIcon />
            <p>{car.manufactureYear}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Rent This Car
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
