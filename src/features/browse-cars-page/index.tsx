"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetRentedCars } from "@/hooks/api/useGetRentedCars";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import CarCard from "../home/components/browse-cars-section/components/CarCard";
import { company } from "./consts";

const BrowseCarsPage = () => {
  const [selectedCompany, setSelectedCompany] = useState<string[]>([]);
  const [debouncedCompany] = useDebounce(selectedCompany, 500);

  const {
    rentedCars: cars,
    loading,
    error,
  } = useGetRentedCars(
    debouncedCompany.length > 0 ? debouncedCompany : undefined
  );

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add company to selected list
      setSelectedCompany((prevSelected) => [...prevSelected, value]);
    } else {
      // Remove company from selected list
      setSelectedCompany((prevSelected) =>
        prevSelected.filter((company) => company !== value)
      );
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load rented cars</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full px-4 mt-28">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-1 z-50">
            <div className="sticky top-28 border border-gray-200 p-8 grid gap-6">
              <div>
                <p className="font-semibold mb-4">Company</p>
                {company.map((item, index) => (
                  <div className="flex gap-2 mb-2" key={index}>
                    <input
                      type="checkbox"
                      id="company"
                      name="company"
                      value={item}
                      onChange={handleCheckboxChange}
                      checked={selectedCompany.includes(item)}
                    />
                    <label>{item}</label>
                  </div>
                ))}
              </div>
              <div>
                {/* TODO: Add hooks for sorting */}
                <p className="font-semibold mb-4">Sort By</p>
                <Select defaultValue="1">
                  <SelectTrigger id="sortBy">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Price</SelectLabel>
                      <SelectItem value="1">Lowest to Highest</SelectItem>
                      <SelectItem value="3">Highest to Lowest</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Alphabetical</SelectLabel>
                      <SelectItem value="5">A to Z</SelectItem>
                      <SelectItem value="6">Z to A</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Seats</SelectLabel>
                      <SelectItem value="5">Least to Most</SelectItem>
                      <SelectItem value="6">Most to Least</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-3 gap-4">
              {cars.map((car, index) => (
                <div key={index}>
                  <CarCard key={index} car={car} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseCarsPage;
