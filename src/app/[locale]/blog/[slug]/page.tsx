import { fetcher } from "@/lib/fetch";
import { notFound } from "next/navigation";
import BlogImageSwiper from "@/components/BlogImageSwiper";
import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

async function BlogPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  try {
    const blogData = await fetcher<any>(
      `/posts?filters[slug][$eq]=${params.slug}&populate=*&locale=${params.locale}`
    );

    if (!blogData?.data?.length) return notFound();

    const blog = blogData.data[0];
    const { title, content, publishedAt, image, team_member } = blog;

    // `image` is now an array
    const imageList = Array.isArray(image) ? image : [];

    return (
      <div className="max-w-4xl mx-auto p-4">
        {/* Author and Date */}
        <div className="text-gray-500 text-sm mb-2 flex justify-between items-center">
          <span>{team_member?.name}</span>
          <span>{new Date(publishedAt).toLocaleDateString(params.locale)}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-black">{title}</h1>

        {/* Image Swiper */}
        {imageList.length > 0 && <BlogImageSwiper images={imageList} />}

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
