import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import MotionSection from "../MotionSection";
import { getTranslations } from "next-intl/server";

const Map = async () => {
  const t = await getTranslations("HOME_PAGE.MAP");

  return (
    <MotionSection className="text-gray-800 bg-gray-50 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-10">
        {/* Map & Contact Info */}
        <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.998308947094!2d29.003818015537917!3d41.06556737929538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7d4f7af3937%3A0xec6f288f2f21ebdb!2sCam%20Pak%20otopark%20ve%20y%C4%B1kama!5e0!3m2!1str!2str!4v1687364546074!5m2!1str!2str"
            style={{ minHeight: "100%" }}
          />
          <div className="relative z-10 bg-white p-6 rounded-xl m-6 shadow-md backdrop-blur-sm bg-opacity-90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-secondary font-montserrat">
                  {t("ADDRESS_TITLE")}
                </h3>
                <p className="text-sm text-secondary font-montserrat">
                  {t("ADDRESS_TEXT")}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-secondary font-montserrat uppercase">
                  {t("CONTACT_TITLE")}
                </h3>

                <Link
                  href={"mailto:info@deponext.com"}
                  className="flex items-center gap-2 text-sm text-secondary font-montserrat group hover:text-secondary transition-colors duration-200">
                  <Mail size={18} className="text-primary" />
                  <span className="underline group-hover:no-underline">
                    {t("EMAIL")}
                  </span>
                </Link>

                <Link
                  href="tel:+905373234343"
                  className="flex items-center gap-2 text-sm text-secondary font-montserrat group hover:text-secondary transition-colors duration-200">
                  <Phone size={18} className="text-primary" />
                  <span className="underline group-hover:no-underline">
                    {t("PHONE")}
                  </span>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.google.com.tr/maps/place/Cam+Pak..."
                  className="flex items-center gap-2 text-sm text-secondary font-montserrat group hover:text-secondary transition-colors duration-200">
                  <MapPin size={18} className="text-primary" />
                  <span className="underline group-hover:no-underline">
                    {t("VIEW_MAP")}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Location Description */}
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="section-title text-center font-bold mb-4">
            {t("HEADING")}
          </h2>
          <p className="text-secondary font-montserrat leading-relaxed mb-4">
            {t("PARAGRAPH_1")}
          </p>
          <p className="text-secondary font-montserrat leading-relaxed mb-4">
            {t("PARAGRAPH_2")}
          </p>
          <p className="text-secondary font-montserrat leading-relaxed mb-4">
            {t("PARAGRAPH_3")}
          </p>
          <p className="text-secondary font-montserrat font-semibold">
            {t("PARAGRAPH_4")}
          </p>
        </div>
      </div>
    </MotionSection>
  );
};

export default Map;
