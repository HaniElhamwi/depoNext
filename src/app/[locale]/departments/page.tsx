import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchBar from "@/components/events/SearchBar";
import { fetcher } from "@/lib/fetch";

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Facebook, Instagram, Phone } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("DEPARTMENTS_SECTION");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

const Departments = async ({ searchParams }: any) => {
  const t = await getTranslations("DEPARTMENTS_SECTION");
  const awaitedParams = await searchParams;
  const selectedCategory = awaitedParams.category || "All";
  const searchTerm = awaitedParams.search;

  let query = `/departments?populate[0]=image&populate[1]=category&populate[2]=experts`;

  if (selectedCategory !== "All") {
    query += `&filters[category][documentId][$eq]=${selectedCategory}`;
  }

  if (searchTerm) {
    query += `&filters[$or][0][title][$containsi]=${searchTerm}`;
    query += `&filters[$or][1][description][$containsi]=${searchTerm}`;
  }

  const [data, categoriesData = []]: any = await Promise.all([
    await fetcher(query),
    await fetcher("/categories?filters[pages][page][$eq]=departments"),
  ]);

  const departments = data?.data || [];
  const categories = categoriesData?.data || [];

  categories.unshift({
    id: "all",
    name: t("ALL"),
    documentId: "All",
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa font-montserrat">
            {t("TITLE")}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100 font-semibold">
            {t("DESCRIPTION")}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <SearchBar />
            <div className="flex flex-wrap gap-2 justify-center">
              {categories?.map((category) => (
                <Link
                  href={{
                    query: {
                      category: category.documentId,
                    },
                  }}
                  key={category.id}>
                  <Button
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    className={
                      selectedCategory === category.documentId
                        ? "bg-ssu-blue hover:bg-ssu-blue/90 !font-tajawal text-white hover:text-white"
                        : "!font-tajawal"
                    }>
                    <span className="font-tajawal font-semibold">
                      {category?.name}
                    </span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {departments?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments?.map((department) => {
                const image = department.image?.url
                  ? department.image?.url
                  : "/placeholder.jpg";
                const expert = department.experts?.[0];

                return (
                  <div
                    key={department.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover-effect">
                    <div className="h-56 overflow-hidden">
                      <Image
                        src={image}
                        width={500}
                        height={300}
                        alt={department.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      {department?.category?.name && (
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                            {department?.category?.name}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2">
                        {department.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-ellipsis">
                        {department.description}
                      </p>

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">
                          {t("CONTACT_WITH_EXPERTS")} :{" "}
                          <span className="text-ssu-orange font-bold">
                            {expert.name}
                          </span>
                        </span>
                      </div>
                      <div className="flex gap-4 mb-6">
                        {expert?.instagram && (
                          <a
                            href={expert?.instagram}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Instagram size={20} className="text-gray-500" />
                          </a>
                        )}
                        {expert?.facebook && (
                          <a
                            href={expert?.facebook}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Facebook size={20} className="text-gray-500" />
                          </a>
                        )}
                        {expert?.phone && (
                          <a
                            href={`tel:${expert?.phone}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Phone size={20} className="text-gray-500" />
                          </a>
                        )}
                      </div>

                      <Link
                        href={`/departments/${department.documentId}`}
                        className="block w-full text-center bg-ssu-blue text-white py-2 rounded hover:bg-ssu-blue/90 transition-colors">
                        {t("VIEW_DETAILS")}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">
                {t("NO_DEPARTMENTS_FOUND")}
              </h3>
              <p className="text-gray-500 mt-2">
                {t("NO_DEPARTMENTS_FOUND_DESCRIPTION")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Departments;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
