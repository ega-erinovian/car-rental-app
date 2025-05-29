"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import PaginationSection from "@/components/PaginationSection";
import { useGetRentedCars } from "@/hooks/api/useGetRentedCars";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import { useDebounce } from "use-debounce";
import CarCardsList from "./components/CarCardsList";
import CompaniesCheckboxes from "./components/CompaniesCheckboxes";
import SortBySelectInput from "./components/SortBySelectInput";
import CarCardSkeleton from "@/components/skeleton/CarCardSkeleton";
import NoCarsFound from "@/components/NoCarsFound";

const BrowseCarsPage = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [sortBy, setSortBy] = useQueryState("search", { defaultValue: "aToZ" });
  const [selectedCompany, setSelectedCompany] = useQueryState(
    "companies",
    parseAsArrayOf(parseAsString).withDefault([])
  );
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

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full px-4 pb-12 mt-28">
        {(cars.length === 0 && !loading) || error ? (
          <NoCarsFound />
        ) : (
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
              {loading ? (
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <CarCardSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <CarCardsList cars={cars} />
              )}
            </div>
            <PaginationSection
              onChangePage={handleChangePage}
              page={page}
              take={meta.take}
              total={meta.total}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BrowseCarsPage;
