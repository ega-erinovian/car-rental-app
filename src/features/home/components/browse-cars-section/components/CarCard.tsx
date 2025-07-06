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
    <Card className="flex flex-col h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group">
      <CardHeader className="flex-grow p-6 pb-4">
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full h-[200px] rounded-xl flex items-center justify-center overflow-hidden">
            <Image
              src={car.image || "/placeholder.svg?height=200&width=300"}
              alt={`${car.company} ${car.type}`}
              fill
              loading="lazy"
              className="object-contain object-center"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-4">
        <div className="w-full space-y-4">
          <div className="space-y-1">
            <h3 className="font-bold text-xl text-gray-800 line-clamp-2 group-hover:text-blue-700 transition-colors">
              {car.company} {car.type}
            </h3>
            <p className="text-sm text-gray-500 font-medium">{car.category}</p>
          </div>
          <div className="py-2">
            <span className="font-bold text-lg">{formattedRupiah}</span>
            <span className="text-sm opacity-90 ml-1">/day</span>
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <GearIcon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">{car.transmition}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <PersonIcon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">
                {car.seatCapacity} seats
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <CalendarIcon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">{car.manufactureYear}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <DrawingPinIcon className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">{car.location}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-none p-6 pt-2">
        <Link
          className="w-full"
          href={`https://wa.me/6285155114016?text=Hello,%20I%20want%20to%20rent%20${car.company}%20${car.type},%20can%20you%20help%20me%20please.`}>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
            Rent This Car
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
