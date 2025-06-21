import React from "react";
import Image from "next/image";
import Link from "next/link";
import MotionSection from "../MotionSection";
import { getTranslations } from "next-intl/server";

const DistrictsSection = async () => {
  const t = await getTranslations("HOME_PAGE.DISTRICTS");
  const districts: string[] = t.raw("DISTRICTS"); // Access array safely

  return (
    <MotionSection className="relative py-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://www.aviontourism.com/images/1920-900-fix/614d1206-2c22-4403-bb05-d74c77906f77"
          alt="İstanbul Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title mb-6 !text-white">{t("TITLE")}</h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-12 text-lg font-medium">
          {t("DESCRIPTION")}
        </p>

        <div className="flex justify-center items-center gap-4 max-w-5xl mx-auto">
          {districts.map((district) => (
            <Link
              target="_blank"
              key={district}
              href={`https://www.google.com.tr/maps/place/Cam+Pak+otopark+ve+y%C4%B1kama/@41.0655674,29.0040804,21z/...`}
              className="bg-white/10 text-xl cursor-pointer font-montserrat border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 font-medium text-white hover:bg-primary/80 hover:text-white transition shadow-sm">
              {district}
            </Link>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default DistrictsSection;
