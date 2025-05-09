import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/events/SearchBar";
import { fetcher } from "@/lib/fetch";

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ACTIVITIES_SECTION");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

const Events = async ({ searchParams }: any) => {
  const t = await getTranslations("ACTIVITIES_SECTION");
  const awaitedParams = await searchParams;
  const selectedCategory = awaitedParams.category || "All";
  const searchTerm = awaitedParams.search;

  let query = `/events?populate[0]=images&populate[1]=category`;

  if (selectedCategory !== "All") {
    query += `&filters[category][documentId][$eq]=${selectedCategory}`;
  }

  if (searchTerm) {
    query += `&filters[$or][0][title][$containsi]=${searchTerm}`;
    query += `&filters[$or][1][description][$containsi]=${searchTerm}`;
  }

  const [data, categoriesData = []]: any = await Promise.all([
    await fetcher(query),
    await fetcher("/categories?filters[pages][page][$eq]=events"),
  ]);

  const events = data?.data || [];
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
                  key={category.id}
                >
                  <Button
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    // onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category.documentId
                        ? "bg-ssu-blue hover:bg-ssu-blue/90 !font-tajawal text-white hover:text-white"
                        : "!font-tajawal"
                    }
                  >
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
          {events?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events?.map((event) => {
                const image = event.images?.[0]?.url || "/placeholder.jpg";
                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover-effect"
                  >
                    <div className="h-56 overflow-hidden">
                      <Image
                        src={image}
                        width={500}
                        height={500}
                        // layout="fill"
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                          {event?.category?.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>

                      {/* max 3 lines */}
                      <p className="text-gray-600 mb-4 line-clamp-3 text-ellipsis">
                        {event.description}
                      </p>
                      <div className="flex flex-col space-y-2 text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{formatDate("2025-04-29")}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{event.location} </span>
                        </div>
                      </div>
                      <Link
                        href={`/events/${event.documentId}`}
                        className="block w-full text-center bg-ssu-blue text-white py-2 rounded hover:bg-ssu-blue/90 transition-colors"
                      >
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
                {t("NO_EVENTS_FOUND")}
              </h3>
              <p className="text-gray-500 mt-2">
                {t("NO_EVENTS_FOUND_DESCRIPTION")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
