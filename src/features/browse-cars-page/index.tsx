"use client";

import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";
import NoCarsFound from "@/components/NoCarsFound";
import PaginationSection from "@/components/PaginationSection";
import CarCardSkeleton from "@/components/skeleton/CarCardSkeleton";
import { useGetRentedCars } from "@/hooks/api/useGetRentedCars";
import { useDebounce } from "use-debounce";
import CarCardsList from "./components/CarCardsList";
import CompaniesCheckboxes from "./components/CompaniesCheckboxes";
import SortBySelectInput from "./components/SortBySelectInput";

const BrowseCarsPage = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [sortBy, setSortBy] = useQueryState("search", { defaultValue: "aToZ" });
  const [selectedCompany, setSelectedCompany] = useQueryState(
    "companies",
    parseAsArrayOf(parseAsString).withDefault([])
  );
  const [debouncedSortBy] = useDebounce(sortBy, 500);

  const {
    rentedCars: cars,
    loading,
    error,
    meta,
  } = useGetRentedCars({
    page,
    take: 9,
    companies: selectedCompany,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <Navbar linkColor="text-white" linkHoverColor="text-gray-600" />

      {/* Hero Section */}
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect Ride
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover premium vehicles designed to elevate your driving
            experience and transform your journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto w-full px-4 py-12">
          {(cars.length === 0 && !loading) || error ? (
            <NoCarsFound />
          ) : (
            <div className="container grid xl:grid-cols-5 gap-8">
              {/* Filters Sidebar */}
              <div className="xl:col-span-1 w-full">
                <div className="xl:sticky top-28 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Filters
                  </h2>
                  <div className="space-y-6">
                    <CompaniesCheckboxes
                      checkoxChange={handleCheckboxChange}
                      selectedCompany={selectedCompany}
                    />
                    <div className="border-t pt-6">
                      <SortBySelectInput
                        sortChangeHandle={handleSortChange}
                        sortBy={sortBy}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cars Grid */}
              <div className="xl:col-span-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Available Cars
                    </h2>
                    <div className="text-sm text-gray-600">
                      {!loading && `${meta?.total || 0} cars found`}
                    </div>
                  </div>

                  {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <CarCardSkeleton key={index} />
                      ))}
                    </div>
                  ) : (
                    <CarCardsList cars={cars} />
                  )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center">
                  <PaginationSection
                    onChangePage={handleChangePage}
                    page={page}
                    take={meta.take}
                    total={meta.total}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseCarsPage;
