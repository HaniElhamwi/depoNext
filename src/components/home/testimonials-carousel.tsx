"use client";

import { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { BlocksRenderer, BlocksContent } from "@strapi/blocks-react-renderer";

interface Testimonial {
  id: number;
  name: string;
  department: string;
  year: string;
  quote: BlocksContent;
  avatar: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
              <Image
                width={96}
                height={96}
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <BlocksRenderer content={testimonials[activeIndex].quote} />
            <Separator className="bg-white/30 my-4" />
            <div>
              <div className="font-bold">{testimonials[activeIndex].name}</div>
              <div className="text-sm text-gray-200">
                {testimonials[activeIndex].department},{" "}
                {testimonials[activeIndex].year}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {testimonials?.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 mx-2 rounded-full transition-colors ${
              index === activeIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
