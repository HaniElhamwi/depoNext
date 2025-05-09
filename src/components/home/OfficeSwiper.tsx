// "use client";

// import { useTranslations } from "next-intl";
// import React from "react";

// function OfficeSwiper() {
//   const t = useTranslations("HOME_PAGE");

//   const office = t.raw("OFFICES");

//   console.log(office);

//   //   const t .raws

//   return <div>
//   <p> hiii</p>
//   </div>;
// }

// export default OfficeSwiper;

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";
// import { useTranslations } from "next-intl";
// import React from "react";

// function OfficeSwiper() {
//   const t = useTranslations("HOME_PAGE");
//   const offices = t.raw("OFFICES");

//   const cardColors = [
//     "from-orange-500 to-orange-600",
//     "from-blue-500 to-blue-600",
//     "from-teal-500 to-teal-600",
//     "from-purple-500 to-purple-600",
//     "from-green-500 to-green-600",
//     "from-pink-500 to-pink-600",
//   ];

//   return (
//     <div dir="rtl" className="max-w-6xl mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         الكروت الخاصة بمكاتب اتحاد الطلبة
//       </h2>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 500,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {offices.map((office: any, index: number) => (
//           <SwiperSlide key={office.id}>
//             <div
//               className={`bg-gradient-to-b ${cardColors[index % cardColors.length]} text-white rounded-2xl p-6 shadow-xl h-full transition-all duration-500 hover:scale-105`}
//             >
//               <h3 className="text-xl font-semibold mb-3">{office.name}</h3>
//               <p className="text-sm leading-relaxed">{office.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default OfficeSwiper;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import React from "react";

function OfficeSwiper() {
  const t = useTranslations("HOME_PAGE");
  const offices = t.raw("OFFICES");

  const cardColors = [
    "from-orange-500 to-orange-600",
    "from-blue-500 to-blue-600",
    "from-teal-500 to-teal-600",
    "from-purple-500 to-purple-600",
    "from-green-500 to-green-600",
    "from-pink-500 to-pink-600",
  ];

  return (
   <div  className="bg-gray-50  w-full py-10">
     <div dir="rtl" className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {t("CART_TITLE")} </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true} // ✅ التمرير بشكل دائري
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {offices.map((office: any, index: number) => (
          <SwiperSlide key={office.id}>
            <div
              className={`bg-gradient-to-b ${cardColors[index % cardColors.length]} text-white rounded-2xl p-6 shadow-xl h-full transition-all duration-500 hover:scale-105 flex flex-col justify-between min-h-[280px]`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{office.name}</h3>
                <p className="text-sm leading-relaxed">{office.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </div>
  );
}

export default OfficeSwiper;
