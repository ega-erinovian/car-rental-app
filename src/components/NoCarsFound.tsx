import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"; // You can choose another icon if you prefer

const NoCarsFound = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 h-[300px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl">
      <MagnifyingGlassIcon className="h-20 w-20 text-white mb-2 p-4 bg-gray-300 rounded-full animate-pulse" />
      <h4 className="text-center text-gray-500 my-2 font-bold text-2xl">
        No Cars Found
      </h4>
      <p className="text-sm text-gray-400">Please check again later</p>
    </div>
  );
};

export default NoCarsFound;
