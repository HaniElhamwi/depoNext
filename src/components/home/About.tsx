import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import MotionSection from "../MotionSection";
import { getTranslations } from "next-intl/server";

async function About() {
  const t = await getTranslations("HOME_PAGE.ABOUT_SECTION");

  return (
    <MotionSection className="relative bg-gradient-to-tr from-white to-gray-100 py-24 md:py-36 overflow-hidden text-secondary fade-in">
      <div
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none fade-in"
        aria-hidden="true"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl animate-fadeIn">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h3 className="text-primary text-xl font-semibold mb-4 tracking-wide uppercase font-montserrat">
            {t("TITLE")}
          </h3>

          <h2 className="section-title font-extrabold font-montserrat text-4xl sm:text-5xl max-w-lg mx-auto md:mx-0 leading-tight text-gray-900">
            {t("HEADING_LINE1")}{" "}
            <span className="text-primary">{t("HEADING_HIGHLIGHT1")}</span>
            <br />
            {t("HEADING_LINE2")}{" "}
            <span className="text-secondary font-semibold">
              {t("HEADING_HIGHLIGHT2")}
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-md mx-auto md:mx-0 font-semibold leading-relaxed">
            {t("DESCRIPTION")}
          </p>

          {/* Call to action button */}
          <Link
            href={"https://wa.me/+905373234343"}
            target="_blank"
            rel="noopener noreferrer">
            <Button className="mt-10 inline-block max-w-max bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300">
              {t("BUTTON_TEXT")}
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-md md:max-w-lg h-[320px] md:h-[460px] relative mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/depo.jpg"
            alt="About DepoNext"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover rounded-3xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-3xl"></div>
        </div>
      </div>
    </MotionSection>
  );
}

export default About;
