import SearchBar from "@/components/blogs/SearchBar";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetch";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("BLOG_SECTION");

  return {
    title: t("TITLE"),
    description: t("DESCRIPTION"),
  };
}

const Blog = async ({ searchParams }: any) => {
  const t = await getTranslations("BLOG_SECTION");
  const awaitedParams = await searchParams;
  const selectedCategory = awaitedParams.category || "All";
  const searchTerm = awaitedParams.search;

  const queryParams = {
    filters: {
      ...(selectedCategory &&
        selectedCategory !== "All" && {
          category: {
            documentId: {
              $eq: selectedCategory,
            },
          },
        }),
      ...(searchTerm && {
        $or: [
          { title: { $containsi: searchTerm } },
          { description: { $containsi: searchTerm } },
        ],
      }),
    },
  };
  const queryString = qs.stringify(queryParams, { encode: false });

  const [data = [], categoriesData = []]: any = await Promise.all([
    await fetcher(
      `/posts?${queryString}&populate[0]=image&populate[1]=category`
    ),
    await fetcher("/categories?filters[pages][page][$eq]=posts"),
  ]);
  const posts = data?.data || [];
  const categories = categoriesData?.data || [];

  categories.unshift({
    id: "all",
    name: t("ALL"),
    documentId: "All",
  });

  return (
    <>
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa ltr:font-montserrat">
            {t("BLOGS_AND_NEWS")}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100 font-medium">
            {t("BLOG_DESCRIPTION")}
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <SearchBar />
            <div className="flex flex-wrap gap-2 justify-center">
              {categories?.map((category: any) => (
                <Link
                  href={{
                    query: {
                      category: category.documentId,
                    },
                  }}
                  key={category.id}>
                  <Button
                    variant={
                      selectedCategory === category.documentId
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    className={
                      selectedCategory === category.documentId
                        ? "bg-ssu-blue hover:bg-ssu-blue/90 !font-tajawal"
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
          {posts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((event) => {
                const firstImageUrl = event.image?.url || "/placeholder.jpg";

                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg group flex flex-col justify-between overflow-hidden shadow-md ">
                    <div className="h-56 overflow-hidden">
                      <Image
                        width={500}
                        height={300}
                        priority
                        unoptimized
                        src={firstImageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex justify-between flex-col h-max">
                      <div>
                        <div className="flex items-center mb-2">
                          {event?.category?.name && (
                            <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                              {event?.category?.name}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 rtl:font-changa font-montserrat text-ssu-blue">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                      </div>

                      <Link
                        href={`/blog/${event.documentId}`}
                        // blnk

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
                {t("NO_BLOGS_FOUND")}
              </h3>
              <p className="text-gray-500 mt-2">
                {t("NO_BLOGS_FOUND_DESCRIPTION")}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
