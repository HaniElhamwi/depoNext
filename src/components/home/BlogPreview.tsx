// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Tips for New Syrian Students at Karabük",
//     excerpt:
//       "Helpful advice for Syrian students starting their academic journey at Karabük University.",
//     date: "August 25, 2023",
//     author: "Ahmed Khalil",
//     image:
//       "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//     category: "Student Life",
//   },
//   {
//     id: 2,
//     title: "Scholarship Opportunities for 2023-2024",
//     excerpt:
//       "A comprehensive guide to scholarships available for Syrian students in Turkey.",
//     date: "July 18, 2023",
//     author: "Layla Nour",
//     image:
//       "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
//     category: "Scholarships",
//   },
// ];

// const BlogPreview = () => {

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="mb-12 text-center">
//           <h2 className="h2 text-ssu-blue mb-4">Latest from Our Blog</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Stay updated with the latest news, announcements, and helpful guides
//             for Syrian students.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-lg overflow-hidden shadow-md hover-effect">
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center mb-2">
//                   <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
//                     {post.category}
//                   </span>
//                   <span className="text-xs text-gray-500 ml-2">
//                     {post.date}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                 <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="text-sm text-gray-500">By {post.author}</div>
//                   <Link
//                     href={`/blog/${post.id}`}
//                     className="text-ssu-blue flex items-center hover:underline">
//                     Read more <ArrowRight size={16} className="ml-1" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Button
//             asChild
//             variant="outline"
//             className="border-ssu-blue text-ssu-blue hover:bg-ssu-blue hover:text-white">
//             <Link href="/blog">View All Posts</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogPreview;
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/fetch";
import { useTranslations } from "next-intl";

const BlogPreview = () => {
  const [posts, setPosts] = useState([]);
  const t = useTranslations("BLOG_SECTION");
  useEffect(() => {
    fetcher("/posts?populate=image")
      .then((data) => {
        const formatted = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description?.[0]?.children?.[0]?.text || "", // عرض أول وصف إن وجد
          date: item.data,
          author: item.author,
          image: item.image?.url
            ? `http://localhost:1337${item.image?.url}`
            : "/placeholder.jpg",

          category: item.category,
          slug: item.slug,
        }));
        setPosts(formatted);
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 text-ssu-blue mb-4 section-title">{t("TITLE")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
            {t("DESCRIPTION")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover-effect">
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 gap-2">
                  <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                {post.description && (
                  <p className="text-gray-600 mb-4">{post.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">By {post.author}</div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-ssu-blue flex items-center hover:underline">
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
            className="border-ssu-blue text-ssu-blue hover:bg-ssu-blue hover:text-white">
            <Link href="/blog"> {t("VIEW_ALL_POSTS")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
