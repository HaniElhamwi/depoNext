import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("HOME_PAGE");

  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden ">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0">
        <source
          src="https://res.cloudinary.com/dgx53rnli/video/upload/v1747001357/%D8%AD%D9%8F%D9%84%D9%85_%D8%B5%D8%A7%D8%B1_%D9%88%D8%B7%D9%86_%D9%83%D8%A7%D9%86_%D9%84%D8%AD%D8%B8%D8%A9_%D8%AC%D9%85%D8%B9%D8%AA%D9%86%D8%A7_%D9%88%D9%88%D8%AD%D9%91%D8%AF%D8%AA%D9%86%D8%A7_%D9%88%D9%85%D8%AF%D9%91%D8%AA_%D8%A8%D9%8A%D9%86%D9%86%D8%A7_%D8%AC%D8%B3%D9%88%D8%B1_%D8%A7%D9%84%D9%85%D8%AD%D8%A8%D8%A9_%D9%88%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D9%85%D8%A7%D8%A1_2_cdvkkf.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      {/* hero-image.jpg */}
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Background"
        // className="absolute inset-0 w-full object-cover h-full z-0 opacity-50"
        className="object-cover"
        layout="fill"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ssu-blue/80 to-ssu-orange/80 z-1"></div>

      <div className="container mx-auto px-4 relative z-10 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight rtl:font-changa ltr:font-montserrat">
              {t("HERO_TITLE")}
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              {t("HERO_DESCRIPTION")}
            </p>
            <div className="flex-col sm:flex-row flex gap-4 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-200 text-ssu-blue">
                <Link href="/about" className="text-ssu-blue font-medium">
                  {t("TAKE_OFFER")}
                </Link>
              </Button>
              {/* <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-200 text-ssu-blue">
                <Link href="/events" className="text-ssu-blue font-medium">
                  {t("VIEW_ACTIVITIES")}
                </Link>
              </Button> */}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-5xl font-bold ">DepoNext</div>
                  <div className="text-xl mt-2">{t("LOGO_TEXT")}</div>
                  <div className="text-3xl font-bold mt-1 opacity-80 ">
                    7/24
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-ssu-orange"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-ssu-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
