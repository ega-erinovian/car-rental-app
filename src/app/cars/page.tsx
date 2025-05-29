import BrowseCarsPage from "@/features/browse-cars-page";
import { Suspense } from "react";

export default function Cars() {
  return (
    <Suspense>
      <BrowseCarsPage />
    </Suspense>
  );
}
