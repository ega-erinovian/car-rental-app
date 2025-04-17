import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const CarCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full h-[180px] rounded-xl flex items-center justify-center">
            <Image
              src={
                "https://www.toyota.astra.co.id//sites/default/files/2020-10/1_innova-super-white-2_0.png"
              }
              alt="car-1"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-between">
          <div>
            <h1 className="font-bold text-xl">Toyota Innova</h1>
            <p className="text-sm">SUV</p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-600">Rp200.000</h1>
          </div>
        </div>
        <div className="flex mt-8 divide-x justify-center text-xs md:text-base lg:text-xs">
          <div className="flex gap-1 items-center px-6 lg:px-4  ps-0">
            <GearIcon />
            <p>Manual</p>
          </div>
          <div className="flex gap-1 items-center px-6 lg:px-4 ">
            <PersonIcon />
            <p>8 person</p>
          </div>
          <div className="flex gap-1 items-center px-6 lg:px-4  pe-0">
            <CalendarIcon />
            <p>2019</p>
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
