"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useFormatRupiah from "@/hooks/useFomatRupiah";
import {
  CalendarIcon,
  DrawingPinIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
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
    location?: string;
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
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full h-[180px] rounded-xl flex items-center justify-center overflow-hidden">
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
        <div className="w-full grid gap-2">
          <div>
            <h1 className="font-bold text-xl line-clamp-2">
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
        <div className="flex mt-8 divide-x justify-center text-xs gap-4 md:gap-2">
          <div className="flex gap-1 items-center ps-0">
            <GearIcon />
            <p>{car.transmition}</p>
          </div>
          <div className="flex gap-1 items-center md:ps-4 ps-2">
            <PersonIcon />
            <p>{car.seatCapacity} person</p>
          </div>
          <div className="flex gap-1 items-center md:ps-4 ps-2">
            <CalendarIcon />
            <p>{car.manufactureYear}</p>
          </div>
          <div className="flex gap-1 items-center md:ps-4 ps-2 pe-0">
            <DrawingPinIcon />
            <p>{car.location}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-none">
        <Link
          className="w-full"
          href={`https://wa.me/6285155114016?text=Hello,%20I%20want%20to%20rent%20${car.company}%20${car.type},%20can%20you%20help%20me%20please.`}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Rent This Car
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
