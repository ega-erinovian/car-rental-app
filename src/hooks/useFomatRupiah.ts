import { useState } from "react";

const useFormatRupiah = () => {
  const [formattedRupiah, setFormattedRupiah] = useState<string>("");

  const convertToRupiah = (amount: number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });
    setFormattedRupiah(formatter.format(amount));
  };

  return { formattedRupiah, convertToRupiah };
};

export default useFormatRupiah;
