import React from "react";
import Image from "next/image";
import Link from "next/link";

const istanbulDistricts = [
  // "Kadıköy",
  "Beşiktaş",
  // "Üsküdar",
  // "Ataşehir",
  // "Bakırköy",
  // "Şişli",
  // "Fatih",
  // "Beylikdüzü",
  // "Sarıyer",
  // "Maltepe",
  // "Kartal",
  // "Avcılar",
  // "Bahçelievler",
  // "Büyükçekmece",
  // "Gaziosmanpaşa",
  // "Esenyurt",
  // "Pendik",
  // "Kağıthane",
];

const DistrictsSection = () => {
  return (
    <section className="relative py-24  text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={
            "https://www.aviontourism.com/images/1920-900-fix/614d1206-2c22-4403-bb05-d74c77906f77"
          }
          alt="İstanbul Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title mb-6 !text-white">
          Depolarımızın Bulunduğu İstanbul İlçeleri
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-12 text-lg font-medium">
          İstanbul’un dört bir yanındaki ilçelerde güvenli ve modern depolama
          hizmeti sunuyoruz.
        </p>

        <div className="flex  justify-center items-center  gap-4 max-w-5xl mx-auto">
          {istanbulDistricts.map((district) => (
            <Link
              target="_blank"
              href={`https://www.google.com.tr/maps/place/Cam+Pak+otopark+ve+y%C4%B1kama/@41.0655674,29.0040804,21z/data=!4m14!1m7!3m6!1s0x14cab7d4f7af3937:0xec6f288f2f21ebdb!2zTWFudMSxY8SxIHlha3Vw!8m2!3d41.065662!4d29.003818!16s%2Fg%2F11q9__7xkc!3m5!1s0x14cab7e0e90d1005:0x1bfb0e4fa8b47755!8m2!3d41.0656188!4d29.0039287!16s%2Fg%2F11y1dv3j2v?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D`}
              key={district}
              className="bg-white/10 text-xl cursor-pointer font-montserrat border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 font-medium text-white hover:bg-primary/80 hover:text-white transition shadow-sm">
              {district}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictsSection;
