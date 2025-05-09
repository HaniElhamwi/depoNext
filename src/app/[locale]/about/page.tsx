import { Metadata } from "next";
import TeamSection from "../../../components/Team/TeamSection"; // 👈 استيراد المكون الجديد
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ABOUT_SECTION");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

const About = async () => {
  const t = await getTranslations("ABOUT_SECTION");
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa ltr:font-montserrat">
            {t("TITLE")}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100 font-semibold">
            {t("DESCRIPTION")}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="h2 text-ssu-blue mb-6 rtl:font-changa ltr:font-montserrat">
                {t("MISSION_TITLE")}
              </h2>
              <p className="text-gray-600 mb-4 font-semibold">
                {t("MISSION_DESCRIPTION_1")}
              </p>
              <p className="text-gray-600 font-semibold">
                {t("MISSION_DESCRIPTION_2")}
              </p>
            </div>
            <div>
              <h2 className="h2 text-ssu-green mb-6 text-ssu-blue rtl:font-changa ltr:font-montserrat">
                {t("VISION_TITLE")}
              </h2>
              <p className="text-gray-600 mb-4 font-semibold">
                {t("VISION_DESCRIPTION_1")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
};

export default About;
