import FaqContent from "../faq/FaqContent";
import { fetcher } from "@/lib/fetch";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import qs from "qs";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FAQ_PAGE");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

export default async function FAQPage({ searchParams }: any) {
  const awaitedParams = await searchParams;
  const selectedFAQ = awaitedParams.category || "All";
  const searchTerm = awaitedParams.search || "";

  const t = await getTranslations("FAQ_PAGE");

  const queryParams = {
    filters: {
      ...(selectedFAQ &&
        selectedFAQ !== "All" && {
          category: {
            documentId: {
              $eq: selectedFAQ,
            },
          },
        }),
      ...(searchTerm && {
        $or: [
          { answer: { $containsi: searchTerm } },
          { question: { $containsi: searchTerm } },
        ],
      }),
    },
    populate: ["category"],
  };
  const queryString = qs.stringify(queryParams, { encode: false });

  const [data = [], categoriesData = []]: any = await Promise.all([
    await fetcher(`/faqs?${queryString}`),
    await fetcher("/categories?filters[pages][page][$eq]=faq"),
  ]);
  const faqs = data?.data || [];
  const categories = categoriesData?.data || [];

  return (
    <>
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa ltr:font-montserrat">
            {t("FAQ_TITLE")}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            {t("FAQ_DESCRIPTION")}
          </p>
        </div>
      </section>

      <FaqContent faqs={faqs} categories={categories} />
    </>
  );
}
