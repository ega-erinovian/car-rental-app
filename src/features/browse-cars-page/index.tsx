"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import { useGetRentedCars } from "@/hooks/api/useGetRentedCars";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import CarCardsList from "./components/CarCardsList";
import CompaniesCheckboxes from "./components/CompaniesCheckboxes";
import SortBySelectInput from "./components/SortBySelectInput";
import PaginationSection from "@/components/PaginationSection";

const BrowseCarsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [selectedCompany, setSelectedCompany] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("aToZ");
  const [debouncedCompany] = useDebounce(selectedCompany, 500);
  const [debouncedSortBy] = useDebounce(sortBy, 500);

  const {
    rentedCars: cars,
    loading,
    error,
    meta,
  } = useGetRentedCars({
    page,
    take: 15,
    companies: debouncedCompany,
    sortBy: debouncedSortBy,
  });

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

  // Update the sortBy state on selection
  const handleSortChange = (value: string) => setSortBy(value);

  const handleChangePage = (page: number) => setPage(page);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to load rented cars</h1>;
  }

  // TODO: Add pagination component to change page, use debounce, and use nuqs

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full px-4 pb-12 mt-28">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-1 z-50">
            <div className="sticky top-28 border border-gray-200 rounded-xl p-8 grid gap-6">
              <CompaniesCheckboxes
                checkoxChange={handleCheckboxChange}
                selectedCompany={selectedCompany}
              />
              <SortBySelectInput
                sortChangeHandle={handleSortChange}
                sortBy={sortBy}
              />
            </div>
          </div>
          <div className="col-span-4">
            <CarCardsList cars={cars} />
          </div>
          <PaginationSection
            onChangePage={handleChangePage}
            page={page}
            take={meta.take}
            total={meta.total}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseCarsPage;
