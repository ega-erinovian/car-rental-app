import { client } from "@/lib/contentful/contentfulClient";
import { mapEntry, ResponseEntry } from "@/lib/contentful/contentfulUtils";
import Car from "@/type/Car";
import { useEffect, useState } from "react";

interface QueryOptions {
  content_type: string;
  "fields.company[in]"?: string; // Optional field if companies are provided
}

export const useGetRentedCars = (companies?: string[], sortBy?: string) => {
  const [rentedCars, setRentedCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentedCars = async () => {
      try {
        const queryOptions: QueryOptions = {
          content_type: "rentedCar",
        };

        // Add company filter if provided
        if (companies && companies.length > 0) {
          queryOptions["fields.company[in]"] = companies.join(",");
        }

        const response = await client.getEntries(queryOptions);

        const cars: Car[] = response.items.map((rentedCar: ResponseEntry) =>
          mapEntry(rentedCar, "rentedCar")
        );

        if (sortBy) {
          switch (sortBy) {
            case "priceLoHi": // Lowest to Highest Price
              cars.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
              break;
            case "priceHiLo": // Highest to Lowest Price
              cars.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
              break;
            case "aToZ": // A to Z
              cars.sort((a, b) =>
                (a.type ?? "")[0].localeCompare(b.type ?? "")
              );
              break;
            case "zToA": // Z to A
              cars.sort((a, b) => (b.type ?? "").localeCompare(a.type ?? ""));
              break;
            case "seatsLeMo": // Least to Most Seats
              cars.sort(
                (a, b) => (a.seatCapacity ?? 0) - (b.seatCapacity ?? 0)
              );
              break;
            case "seatsMole": // Most to Least Seats
              cars.sort(
                (a, b) => (b.seatCapacity ?? 0) - (a.seatCapacity ?? 0)
              );
              break;
            default:
              break;
          }
        }

        setRentedCars(cars);
      } catch (error) {
        console.error(error);
        setError("Failed to load rented cars");
      } finally {
        setLoading(false);
      }
    };

    fetchRentedCars();
  }, [companies, sortBy]); // Add companies to dependency array to re-fetch when it changes

  return { rentedCars, loading, error };
};
