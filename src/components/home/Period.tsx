"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    title: "Beklentiler dinlenir,",
    subTitle: "operasyon hakkında bilgilendirilir.",
    description:
      "Depolanacak eşya veya ürünlerin detayına göre operasyon hakkında bilgilendirilir. Eşya veya ürünlerin nasıl taşınacağı, depolama alanı gibi detaylar konuşulur",
  },
  {
    id: 2,
    title: "İhtiyaca uygun,",
    subTitle: "teklif verilir.",
    description:
      "Depolanacak eşyaların veya ürünlerin durumu göz önünde bulundurularak teklif verilir. Teklifte hem depo ücreti hem de taşıma ücreti belirtilir",
  },
  {
    id: 3,
    title: "Eşyalar taşınmaya ve,",
    subTitle: "depolanmaya hazır.",
    description:
      "Eşyalar belirtildiği gibi paketlenir ve depoya taşınır. Eşyaların depolanma sürecinde paketleme malzemeleri eşyaların üzerinde kalır.",
  },
  {
    id: 4,
    title: "Eşyalarınız size özel,",
    subTitle: "oda deponuzda güvende.",
    description:
      "Eşyalarınızı görebileceğiniz, size özel bir alana yerleştirildi ve güvende. İçiniz rahat olabilir. Konteyner çözümünde de size özel bir alanda eşyalarınız muhafaza edilmektedir.",
  },
];

const Period = () => {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
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
          {data.map((step, index) => (
            <SwiperSlide key={step.id}>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src="/images/period.jpg"
                    alt="Period Image"
                    width={500}
                    height={300}
                    className=""
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="bg-secondary py-1 px-2 text-sm font-montserrat mb-8 font-semibold text-white max-w-max rounded-full">
                    Aşama 0{index + 1}
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Period;
