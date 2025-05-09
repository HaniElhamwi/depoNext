import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { fetcher } from "@/lib/fetch";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Instagram } from "lucide-react";
import TeamMemberModal from "./TeamModal";

const TeamSection = async () => {
  const t = await getTranslations();

  let teamMembers = [];

  try {
    const res: any = await fetcher("/team-members?populate=image");
    teamMembers =
      res?.data
        ?.map((item: any) => ({
          id: item.id,
          name: item.name,
          role: item.position,
          bio: item.bio,
          image: item.image?.url ? `${item.image.url}` : "/placeholder.jpg",
          priority: item.priority,
          instagram: item.instagram,
        }))
        .sort((a, b) => {
          if (a.priority && b.priority) {
            return a.priority - b.priority;
          } else if (a.priority) {
            return -1;
          } else if (b.priority) {
            return 1;
          }
          return 0;
        }) ?? [];
  } catch (error) {
    console.error("Error loading team members:", error);
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-ssu-blue mb-8 text-center section-title">
          {t("ABOUT_SECTION.MEET_OUR_TEAM")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="">
              <CardContent className="p-0 group ">
                <div className="h-[300px] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold rtl:font-changa font-montserrat text-ssu-blue">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-ssu-orange group-hover:text-ssu-blue transition-colors duration-300 ease-in-out">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3 items-center">
                    {/* {member.instagram && ( */}
                    {member.instagram && (
                      <Link
                        target="_blank"
                        href={
                          member.instagram
                            ? `https://www.instagram.com/${member.instagram}`
                            : "#"
                        }>
                        <Instagram
                          className="text-gray-500 cursor-pointer group-hover:scale-110 hover:text-ssu-orange transition-transform duration-300 ease-in-out"
                          size={18}
                        />
                      </Link>
                    )}
                    {/* )} */}
                    {/* <div className="text-ssu-orange cursor-pointer underline flex items-center hover:underline group-hover:text-ssu-blue transition-colors duration-300 ease-in-out">
                      {t("COMMON.READ_MORE")}
                    </div> */}
                    <TeamMemberModal
                      members={teamMembers}
                      memberId={member.id}
                    />
                  </div>
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
