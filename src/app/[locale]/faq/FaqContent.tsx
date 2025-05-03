"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function FaqContent({ faqs }: { faqs: FAQ[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("general");

  const grouped = {
    general: [] as FAQ[],
    academics: [] as FAQ[],
    events: [] as FAQ[],
    resources: [] as FAQ[],
  };

  faqs.forEach((item) => {
    const key = item.category.toLowerCase();
    if (grouped[key]) grouped[key].push(item);
  });

  const filterQuestions = (category: string) => {
    if (!searchTerm) return grouped[category as keyof typeof grouped] || [];

    return (grouped[category as keyof typeof grouped] || []).filter(
      (item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
 

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto mb-6 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {["general", "academics", "events", "resources"].map((category) => (
              <TabsContent key={category} value={category}>
                <Accordion type="multiple" className="w-full">
                  {filterQuestions(category).map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

