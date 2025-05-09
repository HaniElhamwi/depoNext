import { fetcher } from "@/lib/fetch";
import TestimonialsCarousel from "./testimonials-carousel";
import { getTranslations } from "next-intl/server";
import { BlocksContent } from "@strapi/blocks-react-renderer";

interface Testimonial {
  id: number;
  name: string;
  department: string;
  year: string;
  quote: BlocksContent;
  avatar: string;
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetcher<any>(
      `/reviews?populate=*&publicationState=live`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    const data = res.data;

    return data?.map((item: any) => ({
      id: item.id,
      name: item.name,
      department: item.department,
      year: item.year,
      quote: item.review,
      avatar: item.avatar?.url || "/placeholder.jpg",
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  const t = await getTranslations("STUDENT_TESTIMONIALS");

  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-ssu-blue text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-title">{t("TITLE")}</h2>
          <p className="text-gray-200 max-w-2xl mx-auto font-semibold">
            {t("DESCRIPTION")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
