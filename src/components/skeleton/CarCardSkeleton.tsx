import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const CarCardSkeleton = () => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="w-full flex justify-center items-center">
        <div className="relative w-full h-[180px] rounded-xl flex items-center justify-center overflow-hidden">
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
      </CardHeader>
      <CardContent className="w-full grid gap-2 p-4">
        <div>
          <Skeleton className="h-6 w-[200px] rounded-md" />
          <Skeleton className="h-4 w-[150px] mt-2" />
        </div>
        <div>
          <Skeleton className="h-6 w-[120px] rounded-md" />
        </div>
        <div className="flex mt-8 divide-x justify-center text-xs gap-4 md:gap-2">
          <div className="flex gap-1 items-center ps-0">
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex gap-1 items-center md:ps-4 ps-2">
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex gap-1 items-center md:ps-4 ps-2">
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex gap-1 items-center md:ps-4 ps-2 pe-0">
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-none p-4">
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
};

export default CarCardSkeleton;
