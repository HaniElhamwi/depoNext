import HeroSection from "@/components/home/HeroSection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import BlogPreview from "@/components/home/BlogPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";
import CallToAction from "@/components/home/CallToAction";

const Index = async () => {
  return (
    <>
      <HeroSection />
      <ActivitiesPreview />
      <TestimonialsSection />
      <BlogPreview />
      <FaqPreview />
      <CallToAction />
    </>
  );
};

export default Index;
