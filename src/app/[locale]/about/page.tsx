// "use client";
import MainLayout from "@/components/layout/MainLayout";
import TeamSection from "./TeamSection"; // 👈 استيراد المكون الجديد
import { getTranslations } from "next-intl/server";

const About = async () => {
  const t = await getTranslations("ABOUT_SECTION");
  return (
    <MainLayout>
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
              <p className="text-gray-600 font-semibold">
                {t("VISION_DESCRIPTION_2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="h2 text-ssu-blue mb-6 text-center rtl:font-changa ltr:font-montserrat">
            {t("HISTORY_TITLE")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-600 font-semibold">
                {t("HISTORY_DESCRIPTION_1")}
              </p>
              <p className="text-gray-600 font-semibold">
                {t("HISTORY_DESCRIPTION_2")}
              </p>
              <p className="text-gray-600 font-semibold">
                {t("HISTORY_DESCRIPTION_3")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </MainLayout>
  );
};

export default About;

//       {/* Team */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="h2 text-ssu-blue mb-8 text-center">Meet Our Team</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="hover-effect">
//                 <CardContent className="p-0">
//                   <div className="aspect-square overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-1">{member.name}</h3>
//                     <p className="text-ssu-blue font-medium mb-3">
//                       {member.role}
//                     </p>
//                     <p className="text-gray-600">{member.bio}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </MainLayout>
//   );
// };

// export default About;
