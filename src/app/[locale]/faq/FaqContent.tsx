// "use client";

// import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { useTranslations } from "next-intl";
// import SearchBar from "@/components/faq/SearchBar";

// interface FAQ {
//   question: string;
//   answer: string;
//   category: string;
// }

// export default function FaqContent({
//   faqs,
//   categories,
// }: {
//   faqs: FAQ[];
//   categories: any[];
// }) {
//   const [activeTab, setActiveTab] = useState();

//   const t = useTranslations("FAQ_PAGE");

//   useEffect(() => {
//     if (!activeTab) {
//       setActiveTab(categories[0].documentId);
//     }
//   }, []);

//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-md mx-auto mb-6 relative">
//           <SearchBar />
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <Tabs value={activeTab} onValueChange={setActiveTab}>
//             <TabsList className={`grid grid-cols-${categories.length} mb-6`}>
//               {categories.map((category) => (
//                 <TabsTrigger
//                   key={category.documentId}
//                   value={category.documentId}
//                   className="font-semibold">
//                   {category.name}
//                 </TabsTrigger>
//               ))}
//             </TabsList>

//             {categories.map((category: any) => (
//               <TabsContent
//                 key={category.documentId}
//                 value={category.documentId}>
//                 <Accordion type="multiple" className="w-full">
//                   {faqs
//                     .filter(
//                       (item: any) =>
//                         item.category?.documentId === category.documentId
//                     )
//                     .map((item, idx) => (
//                       <AccordionItem key={idx} value={`item-${idx}`}>
//                         <AccordionTrigger className="font-semibold">
//                           {item.question}
//                         </AccordionTrigger>
//                         <AccordionContent className="font-semibold">
//                           {item.answer}
//                         </AccordionContent>
//                       </AccordionItem>
//                     ))}
//                 </Accordion>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";

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
import { useTranslations } from "next-intl";
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

  const t = useTranslations("FAQ_PAGE");

  useEffect(() => {
    if (!activeTab && categories.length > 0) {
      setActiveTab(categories[0].documentId);
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
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center gap-2 mb-6 overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.documentId}
                  value={category.documentId}
                  className="font-semibold whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category: any) => (
              <TabsContent key={category.documentId} value={category.documentId}>
                <Accordion type="multiple" className="w-full">
                  {faqs
                    .filter((item: FAQ) => item.category?.documentId === category.documentId)
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
        </div>
      </div>
    </section>
  );
}
