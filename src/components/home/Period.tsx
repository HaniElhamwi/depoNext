"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MotionSection from "../MotionSection";

const Period = ({ data }) => {
  return (
    <MotionSection className="relative text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Static Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/period.jpg"
            alt="Period Image"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Swiper with only text */}
        <div className="flex-1 max-w-xl w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}>
            {data.map((step) => (
              <SwiperSlide key={step.id}>
                <div className="flex flex-col">
                  <p className="bg-secondary py-1 px-2 text-sm font-montserrat mb-8 font-semibold text-white max-w-max rounded-full">
                    {step.STEP}
                  </p>
                  <h3 className="text-primary font-extrabold text-4xl font-montserrat">
                    {step.title}
                  </h3>
                  <h3 className="text-secondary font-extrabold text-4xl font-montserrat">
                    {step.subTitle}
                  </h3>
                  <p className="text-primary text-lg font-semibold mt-10 max-w-xl">
                    {step.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MotionSection>
  );
};

export default Period;
