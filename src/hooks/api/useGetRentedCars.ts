import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/contentful/contentfulClient";
import { mapEntry, ResponseEntry } from "@/lib/contentful/contentfulUtils";
import Car from "@/types/Car";
import { PageableResponse, PaginationQueries } from "@/types/pagination";

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
  const { page = 1, take = 8, companies, sortBy } = queries;
  const companiesKey = companies?.join(",") ?? "";

  return useQuery<PageableResponse<Car>>({
    queryKey: ["rentedCars", page, take, sortBy, companiesKey],
    queryFn: async () => {
      const queryOptions: QueryOptions = {
        content_type: "rentedCar",
        skip: (page - 1) * take,
        limit: take,
      };

      if (companiesKey) {
        queryOptions["fields.company[in]"] = companiesKey;
      }

      const response = await client.getEntries(queryOptions);

      const cars: Car[] = response.items.map((rentedCar: ResponseEntry) =>
        mapEntry(rentedCar, "rentedCar")
      );

      // Apply sorting if requested
      if (sortBy) {
        switch (sortBy) {
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
            cars.sort((a, b) => (a.seatCapacity ?? 0) - (b.seatCapacity ?? 0));
            break;
          case "seatsMole":
            cars.sort((a, b) => (b.seatCapacity ?? 0) - (a.seatCapacity ?? 0));
            break;
          default:
            break;
        }
      }

      return {
        data: cars,
        meta: { page, take, total: response.total },
      };
    },
  });
};
