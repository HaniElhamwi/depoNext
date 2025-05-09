import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { fetcher } from "@/lib/fetch";
import Image from "next/image";

const TeamSection = async () => {
  const t = await getTranslations("ABOUT_SECTION");

  let teamMembers = [];

  try {
    const res = await fetcher("/team-members?populate=image");
    teamMembers =
      res?.data?.map((item: any) => ({
        id: item.id,
        name: item.name,
        role: item.position,
        bio: item.bio?.[0]?.children?.[0]?.text || "",
        image: item.image?.url ? `${item.image.url}` : "/placeholder.jpg",
      })) ?? [];
  } catch (error) {
    console.error("Error loading team members:", error);
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-ssu-blue mb-8 text-center section-title">
          {t("MEET_OUR_TEAM")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover-effect">
              <CardContent className="p-0">
                <div className="h-[300px] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    // width={400}
                    // height={200}
                    layout="fill"
                    className="w-full h-full object-cover object-[center_30%] rounded-t-md"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 rtl:font-changa font-montserrat text-ssu-blue">
                    {member.name}
                  </h3>
                  <p className="font-bold  mb-3 text-ssu-orange">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-changa">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
