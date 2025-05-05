import { client } from "../contentfulClient";
import { mapEntry, ResponseEntry } from "../contentfulUtils";

export const getRentedCars = async () => {
  try {
    const response = await client.getEntries({
      content_type: "rentedCar",
    });

    const rentedCars = response.items.map((rentedCar: ResponseEntry) =>
      mapEntry(rentedCar, "rentedCar")
    );

    return rentedCars;
  } catch (error) {
    console.log(error);
  }
};
