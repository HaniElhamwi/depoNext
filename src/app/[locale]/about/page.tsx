import { Metadata } from "next";
import TeamSection from "../../../components/Team/TeamSection"; // 👈 استيراد المكون الجديد
import { getTranslations } from "next-intl/server";
import { FRONTEND_URL } from "@/constants/env";
import MotionSection from "@/components/MotionSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ABOUT_SECTION.METADATA");

  const keywords = t.raw("KEYWORDS");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
    keywords: keywords,
    openGraph: {
      title: t("TITLE"),
      description: t("DESCRIPTION"),
      url: FRONTEND_URL,
      siteName: FRONTEND_URL,
      images: [
        {
          url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPE8vNxbByEFR8uyqYounKxctmuepljohEQ&s`,
          width: 1200,
          height: 630,
          alt: t("TITLE"),
        },
      ],
    },
  };
}

const About = async () => {
  return (
    <>
      {/* Hero Section */}
      <MotionSection className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa ltr:font-montserrat">
            Hakkımızda
          </h1>
          <p className="text-[16px] max-w-3xl mx-auto text-gray-200 font-semibold">
            Kişiye özel depo kiralama alanında, eşyalarınıza değer veren çözüm
            ortağınızız. Alan sıkıntısı mı yaşıyorsunuz? Taşınıyor musunuz? Ya
            da sadece ekstra depolama alanına mı ihtiyacınız var? İşte biz tam
            da bunun için buradayız! Size ihtiyaçlarınıza özel, güvenli ve esnek
            depolama alanları sunuyoruz. Eşyalarınız modern güvenlik
            sistemlerimizle 7/24 güvende. Üstelik dilediğiniz zaman eşyalarınıza
            kolayca erişebilirsiniz. Amacımız, size sadece bir depo değil; daha
            fazla alan, daha az stres ve daha fazla özgürlük sunmak.
            Eşyalarınızı güvenle bize emanet edin, gerisini düşünmeyin!
          </p>
        </div>
      </MotionSection>

      <MotionSection className="bg-gray-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 rounded-lg">
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-12 lg:space-y-0 rounded-lg">
            {/* Misyon Bölümü */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="section-title !text-2xl mb-2">Misyonumuz</h3>
              <p className="text-sm font-light  font-montserrat text-gray-600">
                Müşterilerimizin değişen depolama ihtiyaçlarını anlayarak,
                onlara kişiye özel, esnek ve güvenli depolama çözümleri sunmak.
                Teknolojiyi ve müşteri odaklı hizmet anlayışımızı birleştirerek,
                depolama sürecini kolay, şeffaf ve sorunsuz hale getirmek. Her
                bir müşterimiz için maksimum memnuniyet sağlamak, eşyalarına
                kendi eşyamız gibi özen göstermek ve bu süreçte onlara güvenilir
                bir ortak olmaktır
              </p>
            </div>

            {/* Vizyon Bölümü */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="section-title !text-2xl mb-2">Vizyonumuz</h3>
              <p className="text-sm font-light  font-montserrat text-gray-600">
                İnsanların eşyalarını sadece bir depoya değil, güvende ve
                erişilebilir bir çözüme emanet ettikleri bir gelecek inşa etmek.
                Kişiye özel depolama alanlarımızla, her bireyin benzersiz
                ihtiyaçlarına kusursuzca uyum sağlayan, esnek ve güvenilir
                depolama deneyimleri sunarak sektörde lider ve ilham veren bir
                marka olmayı hedefliyoruz. Eşyaların ötesinde, müşterilerimizin
                hayatında yer açan ve onlara huzur veren bir çözüm ortağı olmak
                için çalışıyoruz.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* <TeamSection /> */}
    </>
  );
};

export default About;
