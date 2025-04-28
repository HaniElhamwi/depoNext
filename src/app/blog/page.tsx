"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Tips for New Syrian Students at Karabük",
    excerpt:
      "Helpful advice for Syrian students starting their academic journey at Karabük University.",
    content:
      "Starting university in a new country can be challenging. This guide provides practical tips for Syrian students beginning their studies at Karabük University, covering accommodation, registration procedures, and campus resources...",
    date: "August 25, 2023",
    author: "Ahmed Khalil",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Student Life",
  },
  {
    id: 2,
    title: "Scholarship Opportunities for 2023-2024",
    excerpt:
      "A comprehensive guide to scholarships available for Syrian students in Turkey.",
    content:
      "This guide covers various scholarship opportunities available to Syrian students in Turkey for the 2023-2024 academic year, including application deadlines, eligibility requirements, and tips for successful applications...",
    date: "July 18, 2023",
    author: "Layla Nour",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Scholarships",
  },
  {
    id: 3,
    title: "Language Learning Resources for Syrian Students",
    excerpt:
      "Discover tools and strategies to improve your Turkish language skills.",
    content:
      "Mastering Turkish is essential for academic success in Turkey. This article shares effective language learning resources, apps, and practice opportunities available to Syrian students at Karabük University...",
    date: "June 5, 2023",
    author: "Omar Ibrahim",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Language",
  },
  {
    id: 4,
    title: "Navigating Student Housing in Karabük",
    excerpt:
      "A guide to finding affordable and comfortable accommodation near campus.",
    content:
      "Finding suitable housing is a major concern for international students. This comprehensive guide explores housing options in Karabük, including university dormitories, private rentals, and shared apartments...",
    date: "May 12, 2023",
    author: "Sara Al-Ali",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Housing",
  },
  {
    id: 5,
    title: "Summer Internship Opportunities for Engineering Students",
    excerpt:
      "Find valuable work experience through these summer internship programs.",
    content:
      "Gain practical experience in your field of study through summer internships. This article highlights internship opportunities specifically available to engineering students at Karabük University, including application processes and company profiles...",
    date: "April 20, 2023",
    author: "Yasir Mahmoud",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Career",
  },
  {
    id: 6,
    title: "Cultural Adjustment: From Syria to Turkey",
    excerpt:
      "Understanding cultural differences and adaptation strategies for Syrian students.",
    content:
      "Adapting to a new cultural environment presents both challenges and opportunities. This article discusses the cultural adjustment process for Syrian students in Turkey and offers strategies for navigating cultural differences while maintaining cultural identity...",
    date: "March 8, 2023",
    author: "Reem Hassan",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Culture",
  },
];

const categories = [
  "All",
  "Student Life",
  "Scholarships",
  "Language",
  "Housing",
  "Career",
  "Culture",
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6">Blog & News</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            Stay updated with the latest news, articles, and resources for
            Syrian students at Karabük University.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/3 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-ssu-blue hover:bg-ssu-blue/90"
                      : ""
                  }>
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="block w-full text-center bg-ssu-blue text-white py-2 rounded hover:bg-ssu-blue/90 transition-colors">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">
                No blog posts found.
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
