"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    text: "Eşyalarımız zamanında alındı ve profesyonelce depoya yerleştirildi. Her şey mükemmeldi!",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    name: "Ayşe Yılmaz",
    title: "İstanbul",
  },
  {
    id: 2,
    rating: 5,
    text: "Depolama süreci boyunca her aşamada bilgilendirildim. Çok güven verici bir hizmet.",
    avatar: "https://pagedone.io/asset/uploads/1696229994.png",
    name: "Mehmet Kara",
    title: "Ankara",
  },
  {
    id: 3,
    rating: 5,
    text: "Taşınma stresini tamamen ortadan kaldırdılar. Ekibin ilgisi ve profesyonelliği harikaydı.",
    avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    name: "Elif Demir",
    title: "İzmir",
  },
  {
    id: 4,
    rating: 5,
    text: "Depolama alanları temiz ve güvenliydi. Eşyalarım sorunsuz şekilde saklandı.",
    avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    name: "Burak Şahin",
    title: "Bursa",
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
      fill="currentColor"
    />
  </svg>
);

const NavArrowLeft = () => (
  <svg
    className="h-6 w-6 text-primary group-hover:text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavArrowRight = () => (
  <svg
    className="h-6 w-6 text-primary group-hover:text-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }) => (
  <div
    key={testimonial.id}
    className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-primary">
    <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-primary">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
      {testimonial.text}
    </p>
    <div className="flex items-center gap-5">
      <img
        className="rounded-full object-cover"
        src={testimonial.avatar}
        alt="avatar"
      />
      <div className="grid gap-1">
        <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-primary">
          {testimonial.name}
        </h5>
        <span className="text-sm leading-6 text-gray-500">
          {testimonial.title}
        </span>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: "#slider-button-right",
        prevEl: "#slider-button-left",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        slideChange: function () {
          // Remove active classes from all slides
          document.querySelectorAll(".swiper-slide").forEach((slide) => {
            slide.classList.remove("swiper-slide-active");
            slide.classList.remove("slide-active:border-primary"); // Ensure this is handled by Tailwind's JIT or CSS
            slide
              .querySelectorAll(".swiper-slide-active\\:text-primary")
              .forEach((el) => {
                el.classList.remove("swiper-slide-active:text-primary"); // Remove the dynamic class
                el.classList.remove("text-primary"); // Manually remove the Tailwind class if needed
              });
          });

          // Add active classes to the current active slide
          const activeSlide = this.slides[this.activeIndex];
          if (activeSlide) {
            activeSlide.classList.add("swiper-slide-active");
            // For the Tailwind dynamic classes, you might need a more robust solution
            // This example assumes Tailwind's JIT handles group-hover/etc. correctly
            // For swiper-slide-active specific styles, see the global CSS section below.
          }
        },
      },
    });
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <h2 className="text-4xl section-title lg:text-left">
            Müşteri Yorumları
          </h2>
          <div className="flex items-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary">
              <NavArrowLeft />
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border border-solid border-primary  transition-all duration-500 rounded-full hover:bg-primary">
              <NavArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper">
          <div className="swiper-wrapper">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
