import React from "react";
import Image from "next/image";

const istanbulDistricts = [
  "Kadıköy",
  "Beşiktaş",
  "Üsküdar",
  "Ataşehir",
  "Bakırköy",
  "Şişli",
  "Fatih",
  "Beylikdüzü",
  "Sarıyer",
  "Maltepe",
  "Kartal",
  "Avcılar",
  "Bahçelievler",
  "Büyükçekmece",
  "Gaziosmanpaşa",
  "Esenyurt",
  "Pendik",
  "Kağıthane",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {istanbulDistricts.map((district) => (
            <div
              key={district}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 font-medium text-white hover:bg-primary/80 hover:text-white transition shadow-sm">
              {district}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictsSection;
