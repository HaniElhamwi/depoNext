import HeroSection from "@/components/home/HeroSection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import BlogPreview from "@/components/home/BlogPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqPreview from "@/components/home/FaqPreview";
import CallToAction from "@/components/home/CallToAction";
import OfficeSwiper from "@/components/home/OfficeSwiper";


const Index = async () => {
  
  return (
    <>
      <HeroSection />
      <ActivitiesPreview />
      <TestimonialsSection />
      <BlogPreview />
      <OfficeSwiper />
      <FaqPreview />
      <CallToAction />
     
    </>
  );
};

export default Index;
