import { fetcher } from "@/lib/fetch";
import { notFound } from "next/navigation";
import BlogImageSwiper from "@/components/BlogImageSwiper";
import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { LocateIcon, MapIcon, MapPin } from "lucide-react";

async function BlogPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  try {
    const blogData = await fetcher<any>(
      `/posts?filters[documentId][$eq]=${params.slug}&populate=*&locale=${params.locale}`
    );

    if (!blogData?.data) return notFound();

    const blog = blogData.data[0];
    const { title, content, publishedAt, image, team_member } = blog;

    // `image` is now an array
    const imageList = Array.isArray(image) ? image : [];

    console.log(image);

    return (
      <div className="max-w-4xl mx-auto p-4">
        {/* Author and Date */}
        <div className="text-gray-500 text-sm mb-2 flex  items-center">
          <span>{team_member?.name}</span>
          <div className="flex gap-1">
            <MapPin size={16} />
            <span className="font-medium text-gray-700">
              {new Date(publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-black">{title}</h1>

        {/* {imageList.length > 0 && ( */}
        <BlogImageSwiper images={[image?.url, image?.url]} />
        {/* )} */}

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-800">
          {content && <BlocksRenderer content={content} />}
        </div>
      </div>
    );
  } catch (err) {
    console.error("Error loading blog:", err);
    return notFound();
  }
}

export default BlogPage;
