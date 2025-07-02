import MotionSection from "@/components/MotionSection";
import { Button } from "@/components/ui/button";
import React from "react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FRONTEND_URL } from "@/constants/env";
import { Metadata } from "next";

const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"></path>
  </svg>
);

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("PRICING_PAGE.METADATA");

  const keywords = t.raw("KEYWORDS");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    keywords: keywords,
    openGraph: {
      title: t("TITLE"),
      description: t("DESCRIPTION"),
      url: FRONTEND_URL,
      siteName: FRONTEND_URL,
      images: [
        {
          url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPE8vNxbByEFR8uyqYounKxctmuepljohEQ&s`,
          width: 1200,
          height: 630,
          alt: t("TITLE"),
        },
      ],
    },
  };
}

const App = async () => {
  const t = await getTranslations("PRICING_PAGE");

  const plans = t.raw("PLANS");
  const features = t.raw("FEATURES");

  return (
    <>
      <MotionSection className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa font-montserrat">
            {t("PRICE_TITLE")}
          </h1>
        </div>
      </MotionSection>
      <MotionSection className="bg-white dark:bg-gray-900 font-sans">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 rounded-lg">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="section-title !font-extrabold">{t("TITLE")}</h2>
            <p className="mb-4 text-gray-600 text-lg font-medium">
              {t("DESCRIPTION")}
            </p>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 rounded-lg">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="section-title !text-gray-800 !text-2xl">
                  {plan.NAME}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {plan.DESCRIPTION}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <div className="flex flex-col">
                    <span className="mr-2 text-5xl font-extrabold text-primary">
                      {plan.PRICE}
                    </span>
                    <span className="text-sm text-secondary">
                      {t("STARTING_FROM")}
                    </span>
                  </div>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left rounded-lg">
                  {features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://wa.me/+905373234343"
                  target="_blank"
                  className="w-full block">
                  <Button className="w-full block">{t("BUTTON_TEXT")}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </>
  );
};

export default App;
