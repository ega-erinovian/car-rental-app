import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface SortBySelectInputInterface {
  sortChangeHandle: (value: string) => void;
  sortBy: string;
}

const SortBySelectInput: FC<SortBySelectInputInterface> = ({
  sortChangeHandle,
  sortBy,
}) => {
  return (
    <div>
      <p className="font-semibold mb-4">Sort By</p>
      <Select value={sortBy} onValueChange={sortChangeHandle}>
        <SelectTrigger id="sortBy">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Price</SelectLabel>
            <SelectItem value="priceLoHi">Lowest to Highest</SelectItem>
            <SelectItem value="priceHiLo">Highest to Lowest</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Alphabetical</SelectLabel>
            <SelectItem value="aToZ">A to Z</SelectItem>
            <SelectItem value="zToA">Z to A</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Seats</SelectLabel>
            <SelectItem value="seatsLeMo">Least to Most</SelectItem>
            <SelectItem value="seatsMole">Most to Least</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortBySelectInput;
