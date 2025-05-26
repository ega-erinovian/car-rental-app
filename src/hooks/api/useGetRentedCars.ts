import { client } from "@/lib/contentful/contentfulClient";
import { mapEntry, ResponseEntry } from "@/lib/contentful/contentfulUtils";
import Car from "@/types/Car";
import { PageableResponse, PaginationQueries } from "@/types/pagination"; // Import your existing types
import { useEffect, useState } from "react";

interface QueryOptions {
  content_type: string;
  "fields.company[in]"?: string;
  limit?: number;
  skip?: number;
}

interface GetRentedCarsQuery extends PaginationQueries {
  companies?: string[];
  sortBy?: string;
}

export const useGetRentedCars = (queries: GetRentedCarsQuery) => {
  const [rentedCarsResponse, setRentedCarsResponse] = useState<
    PageableResponse<Car>
  >({
    data: [],
    meta: {
      page: queries.page || 1,
      take: queries.take || 3,
      total: 0,
    },
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentedCars = async () => {
      try {
        const take = queries.take || 8;
        const page = queries.page || 1;

        const queryOptions: QueryOptions = {
          content_type: "rentedCar",
          skip: (page - 1) * take,
          limit: take,
        };

        // Add company filter if provided
        if (queries.companies && queries.companies.length > 0) {
          queryOptions["fields.company[in]"] = queries.companies.join(",");
        }

        const response = await client.getEntries(queryOptions);

        // Map entries to Car objects
        const cars: Car[] = response.items.map((rentedCar: ResponseEntry) =>
          mapEntry(rentedCar, "rentedCar")
        );

        // Apply sorting if requested
        if (queries.sortBy) {
          switch (queries.sortBy) {
            case "priceLoHi":
              cars.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
              break;
            case "priceHiLo":
              cars.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
              break;
            case "aToZ":
              cars.sort((a, b) => (a.type ?? "").localeCompare(b.type ?? ""));
              break;
            case "zToA":
              cars.sort((a, b) => (b.type ?? "").localeCompare(a.type ?? ""));
              break;
            case "seatsLeMo":
              cars.sort(
                (a, b) => (a.seatCapacity ?? 0) - (b.seatCapacity ?? 0)
              );
              break;
            case "seatsMole":
              cars.sort(
                (a, b) => (b.seatCapacity ?? 0) - (a.seatCapacity ?? 0)
              );
              break;
            default:
              break;
          }
        }

        // Create the pageable response using your existing interface
        const paginatedResponse: PageableResponse<Car> = {
          data: cars,
          meta: {
            page: page,
            take: take,
            total: response.total,
          },
        };

        setRentedCarsResponse(paginatedResponse);
      } catch (error) {
        console.error(error);
        setError("Failed to load rented cars");
      } finally {
        setLoading(false);
      }
    };

    fetchRentedCars();
  }, [queries]);

  return {
    rentedCars: rentedCarsResponse.data,
    meta: rentedCarsResponse.meta,
    loading,
    error,
  };
};
