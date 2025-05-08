// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// type ImageType = {
//   url: string;
//   alternativeText?: string;
// };

// export default function BlogImageSwiper({ images }: { images: ImageType[] }) {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       spaceBetween={20}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       className="rounded-lg mb-6"
//     >
//       {images.map((img, index) => (
//         <SwiperSlide key={index}>
//           <Image
//             src={`process.env.NEXT_PUBLIC_BACKEND_URL${img.url}`}
//             alt={img.alternativeText || 'blog image'}
//             width={800}
//             height={450}
//             className="rounded-lg w-full h-auto object-cover"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/pagination';

// type ImageType = {
//   url: string;
//   alternativeText?: string;
// };

// export default function BlogImageSwiper({ images }: { images: ImageType[] }) {
//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: (_, className) =>
//             `<span class="${className} inline-block mx-1 w-1.5 h-1.5 bg-ssu-blue rounded-full transition-all duration-300"></span>`,
//         }}
//         className="rounded-lg mb-6"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={`process.env.NEXT_PUBLIC_BACKEND_URL${img.url}`}
//               alt={img.alternativeText || 'blog image'}
//               width={800}
//               height={450}
//               className="rounded-lg w-full h-auto object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* فقط نعدل الدائرة النشطة هنا */}
//       <style jsx global>{`
//         .swiper-pagination-bullet-active {
//           width:  0.75rem !important;   /* w-4 */
//           height: 0.75rem !important;  /* h-4 */
//           background-color: #ea7b15 !important; /* أو أي لون تريده */
//         }
//       `}</style>
//     </div>
//   );
// }

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/pagination';

// type ImageType = {
//   url: string;
//   alternativeText?: string;
// };

// export default function BlogImageSwiper({ images }: { images: ImageType[] }) {
//   return (
//     <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
//       <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             el: '.custom-swiper-pagination',
//             renderBullet: (_, className) =>
//               `<span class="${className} mx-1 inline-block rounded-full w-2 h-2 bg-ssu-blue opacity-70 transition-all duration-300"></span>`,
//           }}
//           className="h-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full h-full">
//                 <Image
//                   src={`process.env.NEXT_PUBLIC_BACKEND_URL${img.url}`}
//                   alt={img.alternativeText || 'blog image'}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}

//           {/* النقاط داخل الصورة من الأسفل */}
//           <div className="custom-swiper-pagination absolute bottom-4 left-0 right-0 flex justify-center z-10"></div>
//         </Swiper>
//       </div>

//       {/* تنسيق النقاط */}
//       <style jsx global>{`
//         .custom-swiper-pagination .swiper-pagination-bullet-active {
//           width: 12px !important;
//           height: 12px !important;
//           background-color: #ea7b15 !important; /* ssu-orange */
//           opacity: 1 !important;
//         }

//         .custom-swiper-pagination .swiper-pagination-bullet {
//           background-color: #0a9baf !important; /* ssu-blue */
//         }
//       `}</style>
//     </div>
//   );
// }

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
          className="h-full">
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={`process.env.NEXT_PUBLIC_BACKEND_URL${img.url}`}
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
