"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

type ImageType = {
  url: string;
  alternativeText?: string;
};

export default function BlogImageSwiper({ images }: { images: ImageType[] }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
      {/* علبة الصورة */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            renderBullet: (_, className) =>
              `<span class="${className} mx-1 inline-block rounded-full w-2 h-2 transition-all duration-300"></span>`,
          }}
          className="h-full"
        >
          {images?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={img.url}
                  width={500}
                  height={500}
                  priority
                  alt={img.alternativeText || "blog image"}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* النقاط داخل الصورة في الأسفل */}
          <div className="custom-swiper-pagination absolute bottom-4 left-0 right-0 flex justify-center z-10"></div>
        </Swiper>
      </div>

      {/* مسافة بين الصورة والمحتوى تحتها */}
      <div className="mt-10"></div>

      {/* تنسيق النقاط */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background-color: #0a9baf !important; /* ssu-blue */
          transition: all 0.3s ease;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #ea7b15 !important; /* ssu-orange */
          width: 12px !important;
          height: 12px !important;
          transform: translateY(-4px); /* ترفع النقطة النشطة */
        }
      `}</style>
    </div>
  );
}
