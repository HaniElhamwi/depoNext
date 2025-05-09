"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface EventImageSliderProps {
  images: string[];
}

export default function EventImageSlider({ images }: EventImageSliderProps) {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      className="rounded-xl shadow-md mb-6 h-64 w-full"
    >
      {images?.map((img: string, index: number) => (
        <SwiperSlide key={index}>
          <img
            src={img || "/placeholder.svg"}
            alt={`Event image ${index + 1}`}
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
