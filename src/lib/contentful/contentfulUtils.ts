interface EntryFields {
  type?: string;
  slug?: string;
  company?: string;
  category?: string;
  price?: number;
  transmition?: string;
  location?: string;
  seatCapacity?: number;
  manufactureYear?: number;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface ResponseEntry {
  sys: { id: string };
  fields: EntryFields;
}

export const mapEntry = (entry: ResponseEntry, type: string) => {
  if (entry.fields) {
    if (type === "rentedCar") {
      return {
        entryId: entry.sys.id,
        type: entry.fields.type,
        slug: entry.fields.slug,
        company: entry.fields.company,
        category: entry.fields.category,
        price: entry.fields.price,
        transmition: entry.fields.transmition,
        location: entry.fields.location,
        seatCapacity: entry.fields.seatCapacity,
        manufactureYear: entry.fields.manufactureYear,
        image: "https:" + entry.fields.image?.fields.file.url,
      };
    }
  }

  return {};
};
