import { client } from "@/lib/contentful/contentfulClient";
import { mapEntry, ResponseEntry } from "@/lib/contentful/contentfulUtils";
import { useEffect, useState } from "react";

interface Car {
  entryId?: string;
  type?: string;
  slug?: string;
  company?: string;
  category?: string;
  price?: number;
  transmition?: string;
  location?: string;
  seatCapacity?: number;
  manufactureYear?: number;
  image?: string;
}

interface QueryOptions {
  content_type: string;
  "fields.company[in]"?: string; // Optional field if companies are provided
}

export const useGetRentedCars = (companies?: string[]) => {
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

        const cars = response.items.map((rentedCar: ResponseEntry) =>
          mapEntry(rentedCar, "rentedCar")
        );

        setRentedCars(cars);
      } catch (error) {
        console.error(error);
        setError("Failed to load rented cars");
      } finally {
        setLoading(false);
      }
    };

    fetchRentedCars();
  }, [companies]); // Add companies to dependency array to re-fetch when it changes

  return { rentedCars, loading, error };
};
