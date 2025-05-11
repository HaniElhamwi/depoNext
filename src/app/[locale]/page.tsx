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
  const t = await getTranslations("HOME_PAGE.METADATA");

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
          url: `https://res.cloudinary.com/dgx53rnli/image/upload/v1746999913/WhatsApp_Image_2025-05-12_at_00.26.19_d8b486d8_o8m7yq.jpg`,
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
