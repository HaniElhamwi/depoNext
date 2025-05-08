import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { fetcher } from "@/lib/fetch";

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
        image: item.image?.url
          ? `http://localhost:1337${item.image.url}`
          : "/placeholder.jpg",
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
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-ssu-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
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
