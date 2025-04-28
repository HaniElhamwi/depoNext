import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqItems = [
  {
    question: "How can I join the Syrian Student Union?",
    answer:
      "Joining the SSU is easy! Just fill out the membership form on our website or visit our office at the Student Center. Membership is free for all Syrian students at Karabük University.",
  },
  {
    question: "What kind of activities does the SSU organize?",
    answer:
      "We organize various activities including orientation events for new students, cultural events, academic workshops, career development sessions, social gatherings, and community service opportunities.",
  },
  {
    question: "How can the SSU help me with my studies?",
    answer:
      "We provide academic support through peer tutoring, study groups, workshops, and connecting students with academic resources. We also share information about scholarships and academic opportunities.",
  },
];

const FaqPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 text-ssu-blue mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the Syrian Student Union and
            our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-md p-6">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-ssu-blue text-ssu-blue hover:bg-ssu-blue hover:text-white">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPreview;
