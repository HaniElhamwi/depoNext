import HeroSection from "@/components/home/HeroSection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import BlogPreview from "@/components/home/BlogPreview";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";
import CallToAction from "@/components/home/CallToAction";
import OfficeSwiper from "@/components/home/OfficeSwiper";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HOME_PAGE");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

const Index = async () => {
  return (
    <>
      <HeroSection />
      <ActivitiesPreview />
      {/* <TestimonialsSection /> */}
      <BlogPreview />
      <OfficeSwiper />
      <FaqPreview />
      <CallToAction />
    </>
  );
};

export default Index;
