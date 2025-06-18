import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { fetcher } from "@/lib/fetch";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Instagram } from "lucide-react";
import TeamMemberModal from "./TeamModal";

const teamMembers = [
  {
    id: "1",
    name: "Hüseyin Eş",
    role: "Genel Müdür",
    image:
      "https://masterpiecer-images.s3.yandex.net/81780f45717911eea202badf81d486ab:upscaled", // Replace with actual image paths
    instagram: "ayse_dev",
    bio: "Ayşe is a seasoned developer with a passion for building scalable web applications. She specializes in front-end technologies and enjoys exploring new frameworks in her free time.",
  },
  {
    id: "2",
    name: "Burhan Eren",
    role: "Satış Danışmanı",
    image:
      "https://i.pinimg.com/564x/7b/6d/18/7b6d18cca0fbf52900aa0733073bf59a.jpg", // Replace with actual image paths
    instagram: "can_designs",
    bio: "Can is a creative UI/UX designer known for his intuitive and visually appealing designs. He thrives on user-centered design principles and enjoys bringing ideas to life.",
  },
  {
    id: "3",
    name: "Enes Eş",
    role: "Nakliye Uzmanı",
    image:
      "https://i.pinimg.com/564x/7c/24/3e/7c243e43ffa2ab0840025ea56122d9f0.jpg", // Replace with actual image paths
    instagram: null,
    bio: "Deniz is an experienced project manager who excels at leading cross-functional teams and ensuring projects are delivered on time and within budget. He is a master of organization.",
  },
];

const TeamSection = async () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-ssu-blue mb-8 text-center section-title">
          Ekibimizle Tanışın
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
                    {/* {member.instagram && (
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
                    )} */}
                    {/* )} */}
                    {/* <div className="text-ssu-orange cursor-pointer underline flex items-center hover:underline group-hover:text-ssu-blue transition-colors duration-300 ease-in-out">
                      {t("COMMON.READ_MORE")}
                    </div> */}
                    {/* <TeamMemberModal
                      members={teamMembers}
                      memberId={member.id}
                    /> */}
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
