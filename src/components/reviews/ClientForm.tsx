"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

export default function ClientForm({
  currentRating,
}: {
  currentRating: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showForm, setShowForm] = useState(false);

  const updateRating = (rating: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (rating === 0) {
      params.delete("rating");
    } else {
      params.set("rating", rating.toString());
    }
    router.push(`/reviews?${params.toString()}`);
  };

  return (
    <>
      {/* Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-medium text-gray-700">Filter by rating:</span>
            {[0, 3, 4, 5].map((rating) => (
              <Button
                key={rating}
                variant={currentRating === rating ? "default" : "outline"}
                size="sm"
                onClick={() => updateRating(rating)}
                className={
                  currentRating === rating
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

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h3 mb-6">Share Your Experience</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you a Syrian student at Karabük University? We'd love to hear
            about your experience with the Syrian Student Union. Share your
            feedback and help us improve!
          </p>
          <Button
            className="bg-ssu-blue hover:bg-ssu-blue/90"
            onClick={() => setShowForm(true)}>
            Submit a Review
          </Button>
        </div>
      </section>

      {/* Form coming soon (reuse from your original if needed) */}
      {/* {showForm && <YourFormComponent />} */}
    </>
  );
}
