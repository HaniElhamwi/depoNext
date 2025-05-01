
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetcher } from "@/lib/fetch";
import { Calendar, Search, User } from "lucide-react";
import Link from "next/link";
import PlogContent from "./content";

const categories = [
  "All",
  "Student Life",
  "Scholarships",
  "Language",
  "Housing",
  "Career",
  "Culture",
];

const Blog = async () => {
  const posts = (await fetcher("/posts?populate=image")) as any;
  console.log("posts?.data", posts?.data);

  const formatted = posts?.data?.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description?.[0]?.children?.[0]?.text || "",
    date: item.date,
    author: item.author,
    category: item.category,
    slug: item.slug,
    image: item.image?.url
      ? `http://localhost:1337${item.image?.url}`
      : "/placeholder.jpg",
  }));
  console.log("formatted", formatted);

  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched data from Strapi:", data);
  //       //     const formatted = data.data.map((item) => ({
  //       //       id: item.id,
  //       //       title: item.title || "Untitled",
  //       //       description: item.description?.[0]?.children?.[0]?.text || "", // في حال كانت rich text
  //       //       date: item.date || "", // تأكد من وجود هذا الحقل
  //       //       author: item.author || "Unknown", // نفس الشيء
  //       //       category: item.category || "Uncategorized",
  //       //       slug: item.slug || "", // أو استخدم id بدلًا من slug إن لم يكن موجود
  //       //       image: item.image?.data?.attributes?.url
  //       // ? `http://localhost:1337${item.image.data.attributes.url}`
  //       // : "/placeholder.jpg", // لأنه لا يوجد حقل صورة حاليًا
  //       //     }));

  //       setPosts(formatted);
  //     })
  //     .catch((err) => console.error("Error fetching posts:", err));
  // }, []);

  // const filteredPosts = posts.filter((post) => {
  //   const matchesSearch =
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.description.toLowerCase().includes(searchTerm.toLowerCase());

  //   const matchesCategory =
  //     selectedCategory === "All" || post.category === selectedCategory;

  //   return matchesSearch && matchesCategory;
  // });

  return (
 
    <PlogContent posts={formatted} />
  );
};

export default Blog;

