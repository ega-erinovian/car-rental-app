"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Toyota,
  Suzuki,
  Hyundai,
  Mazda,
  Mitsubishi,
  Honda,
  Chevrolet,
} from "./logos";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function BrowseCarsSection() {
  return (
    <section className="container mx-auto">
      <div className="py-16 pt-8">
        <div className="flex justify-between items-end">
          <h1 className="text-5xl xl:text-7xl max-w-64 md:max-w-full font-black">
            Browse All Cars
          </h1>
          <Link href="#">
            <Button className="bg-blue-600 hover:bg-blue-700 hover:text-white my-6">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
