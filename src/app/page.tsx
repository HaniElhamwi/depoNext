
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ActivitiesPreview from '@/components/home/ActivitiesPreview';
import BlogPreview from '@/components/home/BlogPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqPreview from '@/components/home/FaqPreview';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ActivitiesPreview />
      <TestimonialsSection />
      <BlogPreview />
      <FaqPreview />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
