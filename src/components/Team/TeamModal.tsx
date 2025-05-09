"use client";

import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: any;
  image: string;
  instagram?: string;
};

export default function TeamMemberModal({
  memberId,
  members,
}: {
  members: TeamMember[];
  memberId: number;
}) {
  const [openId, setOpenId] = useState<number | null>(null);
  const t = useTranslations();

  const selectedMember = useMemo(() => {
    const member = members.find((m) => m.id === openId);
    return member ? { ...member } : null;
  }, [openId, members]);

  return (
    <>
      <div
        className="text-sm font-medium text-ssu-orange underline hover:text-ssu-blue cursor-pointer transition-colors"
        onClick={() => setOpenId(memberId)}>
        {t("COMMON.READ_MORE")}
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setOpenId(null)}>
        <DialogContent className="max-w-4xl  rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-90 p-7">
          {selectedMember && (
            <div className="grid md:grid-cols-2 h-max">
              {/* Left: Image */}
              <div className="relative w-full min-h-[300px] md:h-auto">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover w-full h-full rounded"
                  priority
                />
              </div>

              {/* Right: Content */}
              <div className="p-6 flex flex-col text-start gap-4">
                {/* <DialogHeader>   */}
                <div>
                  <div className="flex items-center mb-2 gap-5">
                    <DialogTitle className="text-2xl font-bold text-ssu-blue  rtl:font-changa ltr:font-montserrat">
                      {selectedMember.name}
                    </DialogTitle>
                    {selectedMember.instagram && (
                      <Link
                        target="_blank"
                        href={
                          selectedMember.instagram
                            ? `https://www.instagram.com/${selectedMember.instagram}`
                            : "#"
                        }>
                        <Instagram
                          className="text-gray-500 cursor-pointer group-hover:scale-110 hover:text-ssu-orange transition-transform duration-300 ease-in-out"
                          size={18}
                        />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-ssu-orange font-semibold">
                    {selectedMember.role}
                  </p>
                </div>

                {selectedMember.bio && (
                  <div className="overflow-y-auto max-h-[300px] pr-1 text-gray-700 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <BlocksRenderer content={selectedMember.bio} />
                  </div>
                )}
                {/* 
                {selectedMember.instagram && (
                  <div className="flex justify-end mt-auto">
                    <Link
                      href={`https://instagram.com/${selectedMember.instagram}`}
                      target="_blank"
                      className="flex items-center text-sm text-gray-500 hover:text-ssu-orange gap-1">
                      <Instagram size={16} />@{selectedMember.instagram}
                    </Link>
                  </div>
                )} */}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
