import { fetcher } from "@/lib/fetch";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { cache } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";

export const getDepartment = cache(async (id: string) => {
  try {
    const query = `/departments?filters[documentId][$eq]=${id}&populate[0]=image&populate[1]=experts`;
    const res = await fetcher<any>(query);

    if (!res?.data || res.data.length === 0) {
      return null;
    }

    const e = res.data[0];

    const image = e.image.url;
    return {
      id: e.id,
      title: e.title,
      description: e.description,
      date: e.date,
      location: e.location,
      category: e.category,
      content: e.content,
      image,
      experts: e.experts?.map((expert: any) => ({
        id: expert.id,
        name: expert.name,
        phone: expert.phone,
        instagram: expert.instagram,
        facebook: expert.facebook,
      })),
    };
  } catch (err) {
    console.error("Error fetching department:", err);
    throw new Error("Failed to fetch department data");
  }
});

export async function generateMetadata({
  params,
}: {
  params: { documentId: string };
}): Promise<Metadata> {
  const t = await getTranslations("DEPARTMENTS_SECTION");
  const { documentId: id } = await params;
  const department = await getDepartment(id);

  return {
    title: department.title + " | " + t("TITLE"),
    description: department.description,
    openGraph: {
      title: department.title + " | " + t("TITLE"),
      description: department.description,
      images: [
        {
          url: department.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function DepartmentDetail({
  params,
}: {
  params: { documentId: string };
}) {
  const commonT = await getTranslations("COMMON");
  const t = await getTranslations("DEPARTMENTS_SECTION");

  const { documentId: id } = await params;

  const department = await getDepartment(id);

  if (!department)
    return <p className="text-center py-10">Department not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/departments">
        <Button variant="outline" className="flex items-center gap-2 mb-6">
          <span>←</span>
          {commonT("BACK")}
        </Button>
      </Link>

      <div className="flex flex-col md:flex-row items-start mt-6 gap-6">
        <div className="relative max-w-[300px] w-full justify-center flex md:w-[800px]  h-[400px]">
          <Image
            src={department.image}
            alt={department.title}
            // width={800}
            // height={400}
            layout="fill"
            className="rounded-lg w-full h-full  object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 section-title">
            {department?.title}
          </h1>
          {department?.content && (
            <BlocksRenderer content={department.content} />
          )}
        </div>
      </div>

      <div>
        {department.experts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
              {t("EXPERTS_SECTION.TITLE")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {department.experts.map((expert) => (
                <div
                  key={expert.id}
                  className="p-4 border rounded-lg flex flex-col items-center text-center">
                  {expert?.name && (
                    <h3 className="text-xl font-semibold section-subtitle">
                      {expert?.name}
                    </h3>
                  )}
                  <div className="flex gap-4 mt-2">
                    {expert?.instagram && (
                      <a
                        href={expert.instagram}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Instagram size={20} />
                      </a>
                    )}
                    {expert?.facebook && (
                      <a
                        href={expert.facebook}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Facebook size={20} />
                      </a>
                    )}
                    {/* {expert?.phone && (
                      <a
                        href={`tel:${expert.phone}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Phone size={20} />
                      </a>
                    )} */}
                    {expert?.phone && (
                      <a
                        href={`https://wa.me/${expert?.phone}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <BiLogoWhatsapp size={24} color="primary" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
