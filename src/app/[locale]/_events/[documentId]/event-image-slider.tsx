"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

interface EventImageSliderProps {
  images: string[];
}

export default function EventImageSlider({ images }: EventImageSliderProps) {
  return (
    <Swiper
      navigation
      modules={[]}
      className="rounded-xl shadow-md mb-6  w-full">
      {images?.map((img: string, index: number) => (
        <SwiperSlide key={index} className="relative !h-96 bg-red-700 w-full">
          <Image
            // width={500}
            // height={800}
            layout="fill"
            src={img || "/placeholder.svg"}
            alt={`Event image ${index + 1}`}
            className="object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
