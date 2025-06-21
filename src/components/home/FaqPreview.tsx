import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import MotionSection from "../MotionSection";

const FaqPreview = async () => {
  const t = await getTranslations("HOME_PAGE.FAQ_SECTION");
  const faqList = t.raw("QUESTIONS") as { question: string; answer: string }[];

  return (
    <MotionSection className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 text-ssu-blue mb-4 section-title">{t("TITLE")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
            {t("DESCRIPTION")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-md p-6">
            {faqList.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-bold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 font-semibold">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button
                asChild
                variant="outline"
                className="border-ssu-blue text-ssu-blue hover:bg-ssu-blue hover:text-white">
                {t("VIEW_ALL_FAQ")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default FaqPreview;
