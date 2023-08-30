import React from "react";
import { SectionTitle } from "./SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faqs = () => {
  return (
    <section className="p-[5%]">
      <SectionTitle inPink="Questions" text="Frequently Asked" />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is gTahidi AI</AccordionTrigger>
          <AccordionContent>
            gTahidi AI is a tech startup from kenya providing educational AI
            products
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
