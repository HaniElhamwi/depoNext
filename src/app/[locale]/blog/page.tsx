import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetcher } from "@/lib/fetch";
import { Calendar, Search, User } from "lucide-react";
import Link from "next/link";
import PlogContent from "./content";

const Blog = async () => {
  const posts = (await fetcher("/posts?populate=image")) as any;

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

  return <PlogContent posts={formatted} />;
};

export default Blog;
