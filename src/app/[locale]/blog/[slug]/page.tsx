// import { fetcher } from "@/lib/fetch";
// import { notFound } from "next/navigation";
// import React from "react";

// async function page({ params }: any) {
//   const awaitedParams = await params;

//   console.log(awaitedParams);

//   const blogData = await fetcher(
//     `/posts?filters[slug][$eq]=${awaitedParams.slug}&populate=*&pagination[limit]=1`
//   );

//   const blog = blogData?.data[0];

//   if (!blog) {
//     return notFound();
//   }
//   console.log(blog);

//   return <div className="text-ssu-orange text-lg font-bold">{blog.title}</div>;
// }

// export default page;
// import { fetcher } from "@/lib/fetch";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import React from "react";

// async function BlogPage({
//   params,
// }: {
//   params: { locale: string; slug: string };
// }) {
//   try {
//     console.log("Locale:", params.locale);
//     console.log("Slug:", params.slug);

//     const blogData = await fetcher(
//       `/posts?filters[slug][$eq]=${params.slug}&populate=*&locale=${params.locale}`
//     );

//     console.log("Blog Data Response:", JSON.stringify(blogData, null, 2));

//     if (!blogData?.data?.length) {
//       console.warn("No blog found for slug:", params.slug);
//       return notFound();
//     }

//     const blog = blogData.data[0];
//     const {
//       title,
//       content,
//       publishedAt,
//       image,
//       team_member,
//     } = blog; // ✅ No ".attributes" needed
//  console.log("image", image)
//     return (
//       <div className="max-w-4xl mx-auto p-4">
//         {/* Author and Date */}
//         <div className="text-gray-500 text-sm mb-2 flex justify-between items-center">
//           <span>{team_member?.name}</span>
//           <span>{new Date(publishedAt).toLocaleDateString(params.locale)}</span>
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl font-bold mb-4 text-black">{title}</h1>

//         {/* Main Image */}
//         {image?.url && (
//           <div className="mb-6">
//             <Image
//               src={`http://localhost:1337${image.url}`}
//               alt={image.alternativeText || "blog image"}
//               width={800}
//               height={450}
//               className="rounded-lg w-full h-auto object-cover"
//             />
//           </div>
//         )}

//         {/* Content */}
//         <div className="prose prose-lg max-w-none text-gray-800">
//           {Array.isArray(content) ? (
//             content.map((block, i) =>
//               block.type === "paragraph" ? (
//                 <p key={i}>
//                   {block.children?.map((child, j) => (
//                     <span key={j}>{child.text}</span>
//                   ))}
//                 </p>
//               ) : null
//             )
//           ) : (
//             <p>{content}</p> // fallback in case it's plain text
//           )}
//         </div>
//       </div>
//     );
//   } catch (err) {
//     console.error("Error loading blog:", err);
//     return notFound();
//   }
// }

// export default BlogPage;


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
    const blogData = await fetcher(
      `/posts?filters[slug][$eq]=${params.slug}&populate=*&locale=${params.locale}`
    );

    if (!blogData?.data?.length) return notFound();

    const blog = blogData.data[0];
    const {
      title,
      content,
      publishedAt,
      image,
      team_member,
    } = blog;

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
        {/* <div className="prose prose-lg max-w-none text-gray-800">
          {Array.isArray(content) ? (
            content.map((block, i) =>
              block.type === "paragraph" ? (
                <p key={i}>
                  {block.children?.map((child, j) => (
                    <span key={j}>{child.text}</span>
                  ))}
                </p>
              ) : null
            )
          ) : (
            <p>{content}</p>
          )}
        </div> */}
        <div className="prose prose-lg max-w-none text-gray-800">
  <BlocksRenderer content={content} />
</div>

      </div>
    );
  } catch (err) {
    console.error("Error loading blog:", err);
    return notFound();
  }
}

export default BlogPage;

