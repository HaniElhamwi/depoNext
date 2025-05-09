import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { fetcher } from "@/lib/fetch";
import Image from "next/image";

const BlogPreview = async () => {
  const t = await getTranslations("BLOG_SECTION");

  const posts =
    (
      await fetcher<any>(
        `/posts?pagination[pageSize]=6&sort[0]=createdAt:desc&populate=image`
      )
    ).data || [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 text-ssu-blue mb-4 section-title">{t("TITLE")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
            {t("DESCRIPTION")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="group shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="h-56 overflow-hidden">
                <Image
                  src={post.image?.url || "/placeholder.jpg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 gap-2">
                  {post.category && (
                    <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                      {post.category}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 ml-2">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                {post.description && (
                  <p className="text-gray-600 mb-4">{post.description}</p>
                )}
                <div className="flex items-center justify-between">
                  {post.author && (
                    <div className="text-sm text-gray-500">
                      {t("BY")} {post.author}
                    </div>
                  )}
                  <Link
                    href={`/blog/${post.documentId}`}
                    className="text-ssu-orange flex items-center hover:underline">
                    {t("READ_MORE")} <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-ssu-orange text-ssu-orange hover:bg-ssu-orange hover:text-white">
            <Link href="/blog">{t("VIEW_ALL_POSTS")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
