"use client";

import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/faq/SearchBar";

interface FAQ {
  question: string;
  answer: string;
  category: {
    documentId: string;
  };
}

export default function FaqContent({
  faqs,
  categories,
}: {
  faqs: FAQ[];
  categories: any[];
}) {
  const [activeTab, setActiveTab] = useState<string | undefined>();

  useEffect(() => {
    if (!activeTab && categories.length > 0) {
      setActiveTab(categories[0].documentId);
    }
    if (!categories.length) {
      setActiveTab(undefined); // No active tab if no categories
    }
  }, [activeTab, categories]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 relative">
          <SearchBar />
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          {categories.length > 0 ? (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap justify-center gap-2 mb-6 overflow-x-auto">
                {categories?.map((category) => (
                  <TabsTrigger
                    key={category.documentId}
                    value={category.documentId}
                    className="font-semibold whitespace-nowrap">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories?.map((category: any) => (
                <TabsContent
                  key={category.documentId}
                  value={category.documentId}>
                  <Accordion type="multiple" className="w-full">
                    {faqs
                      .filter(
                        (item: FAQ) =>
                          item.category?.documentId === category.documentId
                      )
                      .map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="font-semibold text-right">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="font-semibold text-gray-700 text-right">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <Accordion type="multiple" className="w-full max-w-[600px] mx-auto">
              {faqs.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="font-semibold text-right">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-semibold text-gray-700 text-right">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}
