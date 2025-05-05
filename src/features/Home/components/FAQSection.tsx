import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import Image from "next/image";
import { FAQItems } from "../consts";

const FAQSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 py-16 md:pt-8 md:px-8 xl:gap-16 lg:px-0">
      <div className="relative w-full h-[320px] xl:h-[560px] rounded-xl flex items-center justify-center">
        <Image
          src={"/images/faq-section-img.webp"}
          alt="FAQ Image"
          fill
          className="object-cover object-center rounded-xl"
        />
      </div>
      <div className="space-y-4 flex flex-col justify-center">
        <h2 className="text-4xl xl:text-7xl font-bold">Before You Asked...</h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQItems.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="py-2 xl:py-4">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] xl:text-xl leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                  {item.title}
                  <PlusIcon
                    size={16}
                    className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-muted-foreground text-base pb-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
