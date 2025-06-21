import Map from "@/components/home/Map";
import MotionSection from "@/components/MotionSection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ACTIVITIES_SECTION");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

const ContactUs = async () => {
  const t = await getTranslations("ACTIVITIES_SECTION");

  return (
    <>
      {/* Hero Section */}
      <MotionSection className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa font-montserrat">
            {t("CONTACT_US")}
          </h1>
        </div>
      </MotionSection>

      <Map />
    </>
  );
};

export default ContactUs;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
