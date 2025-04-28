"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Yasmin Al-Hassan",
    program: "Computer Engineering",
    year: "3rd Year",
    rating: 5,
    comment:
      "The Syrian Student Union has been like a second family for me at Karabük. They helped me navigate university life and connect with other students.",
    date: "October 15, 2023",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Omar Mahmoud",
    program: "Medicine",
    year: "4th Year",
    rating: 4,
    comment:
      "Thanks to the workshops organized by SSU, I was able to find internship opportunities and develop my professional network. The team is very helpful and supportive.",
    date: "September 28, 2023",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Sara Ibrahim",
    program: "Business Administration",
    year: "2nd Year",
    rating: 5,
    comment:
      "As a new student in Turkey, the orientation events by SSU helped me understand university procedures and adapt to campus life quickly. I'm grateful for their support!",
    date: "September 10, 2023",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Ahmed Kareem",
    program: "Civil Engineering",
    year: "3rd Year",
    rating: 4,
    comment:
      "The SSU has been instrumental in helping me connect with alumni and industry professionals. Their career fairs are well-organized and informative.",
    date: "August 22, 2023",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Layla Al-Ali",
    program: "Architecture",
    year: "1st Year",
    rating: 5,
    comment:
      "I was nervous about starting university in a new country, but the SSU welcome events made me feel at home right away. The mentorship program has been incredibly helpful.",
    date: "August 15, 2023",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    id: 6,
    name: "Mohammed Nour",
    program: "Economics",
    year: "4th Year",
    rating: 4,
    comment:
      "Throughout my years at Karabük, the SSU has consistently provided valuable resources and support. Their scholarship information sessions helped me secure financial aid.",
    date: "July 30, 2023",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const Reviews = () => {
  const [filterRating, setFilterRating] = useState(0);

  const filteredReviews =
    filterRating > 0
      ? reviews.filter((review) => review.rating >= filterRating)
      : reviews;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6">Student Reviews</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            Hear what Syrian students at Karabük University have to say about
            their experiences with the Syrian Student Union.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-medium text-gray-700">Filter by rating:</span>
            {[0, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                variant={filterRating === rating ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterRating(rating)}
                className={
                  filterRating === rating
                    ? "bg-ssu-blue hover:bg-ssu-blue/90"
                    : ""
                }>
                {rating === 0 ? (
                  "All Reviews"
                ) : (
                  <div className="flex items-center">
                    {rating}+ <Star size={14} className="ml-1 fill-current" />
                  </div>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover-effect">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-sm text-gray-500">
                        {review.program}, {review.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-3">{review.comment}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h3 mb-6">Share Your Experience</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you a Syrian student at Karabük University? We&apos;d love to
            hear about your experience with the Syrian Student Union. Share your
            feedback and help us improve!
          </p>
          <Button className="bg-ssu-blue hover:bg-ssu-blue/90">
            Submit a Review
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Reviews;
