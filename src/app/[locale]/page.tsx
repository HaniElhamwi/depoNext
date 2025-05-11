import HeroSection from "@/components/home/HeroSection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import BlogPreview from "@/components/home/BlogPreview";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";
import CallToAction from "@/components/home/CallToAction";
import OfficeSwiper from "@/components/home/OfficeSwiper";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FRONTEND_URL } from "@/constants/env";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HOME_PAGE");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    keywords: t("KEYWORDS"),
    openGraph: {
      title: t("TITLE"),
      description: t("DESCRIPTION"),
      url: FRONTEND_URL,
      siteName: FRONTEND_URL,
      images: [
        {
          url: `${FRONTEND_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: t("TITLE"),
        },
      ],
    },
  };
}

const Index = async () => {
  return (
    <>
      <HeroSection />
      <ActivitiesPreview />
      <OfficeSwiper />
      {/* <TestimonialsSection /> */}
      <BlogPreview />
      <CallToAction />
      <FaqPreview />
    </>
  );
};

export default Index;
