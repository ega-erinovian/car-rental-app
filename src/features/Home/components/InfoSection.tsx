"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, SearchIcon } from "lucide-react";
import type React from "react";
import {
  Chevrolet,
  Honda,
  Hyundai,
  Mazda,
  Mitsubishi,
  Suzuki,
  Toyota,
} from "./logos";

export default function InfoSection() {
  return (
    <section className="container mx-auto">
      <div className="py-16">
        <div className="grid items-center justify-between sm:grid-cols-2 md:gap-16">
          <div className="dark:bg-muted/50 relative mx-auto w-fit">
            <div className="bg-radial to-blue-600 absolute inset-0 z-10 from-blue-600 to-75%"></div>
            <div className="mx-auto mb-2 xl:mb-6 flex w-full justify-center gap-2 xl:gap-6">
              <IntegrationCard className="group">
                <Toyota className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#ff0909]" />
              </IntegrationCard>
              <IntegrationCard className="group">
                <Chevrolet className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#f9bc31]" />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 xl:my-6 flex w-full justify-center gap-2 xl:gap-6">
              <IntegrationCard className="group">
                <Mazda className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#0983c6]" />
              </IntegrationCard>
              <IntegrationCard
                borderClassName="shadow-orange-600/10 shadow-2xl border-black/25 dark:border-white/25"
                className="group dark:bg-white/10">
                <Suzuki className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#e2131e]" />
              </IntegrationCard>
              <IntegrationCard className="group">
                <Honda className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#ed2237]" />
              </IntegrationCard>
            </div>

            <div className="mx-auto flex w-full justify-center gap-2 xl:gap-6">
              <IntegrationCard className="group">
                <Mitsubishi className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#e60818]" />
              </IntegrationCard>
              <IntegrationCard className="group">
                <Hyundai className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 transition-all duration-300 group-hover:fill-[#234c86]" />
              </IntegrationCard>
            </div>
          </div>
          <div className="mt-6 space-y-6 text-center sm:mt-0 sm:text-left w-fit">
            <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black">
              Choose Your Favorite{" "}
              <LineShadowText className="italic" shadowColor="black">
                Car
              </LineShadowText>
            </h2>
            <p className="text-muted-foreground text-balance">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo id
              sed tempora repellendus excepturi earum reiciendis suscipit
              tempore magnam fuga!
            </p>
            <form
              action=""
              className="mt-10 mx-auto md:mx-0 max-w-xs lg:max-w-sm xl:max-w-xl lg:mt-12">
              <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-xl border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <SearchIcon className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
                <input
                  placeholder="Search Car"
                  className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                  type="email"
                />

                <div className="md:pr-1.5 lg:pr-0">
                  <Button
                    aria-label="submit"
                    className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                    <span className="hidden md:block">Search</span>
                    <ArrowRightIcon
                      className="relative mx-auto size-5 md:hidden"
                      strokeWidth={2}
                    />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-20 rounded-xl dark:bg-transparent h-fit w-fit p-6",
        className
      )}>
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit">{children}</div>
    </div>
  );
};
