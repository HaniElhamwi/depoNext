import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    year: "",
    review: "",
    rating: 0,
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const fetchReviews = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/reviews?populate=*&publicationState=live"
      );
      const data = await res.json();
      const extractTextFromRichText = (richText: any[]): string => {
        if (!Array.isArray(richText)) return "";
        return richText
          .map((block) =>
            block.children?.map((child: any) => child.text).join(" ")
          )
          .join("\n");
      };

      const formatted = data?.data?.map((item: any) => ({
        id: item.id,
        name: item.name,
        program: item.department,
        year: item.year,
        rating: item.rating,
        comment: extractTextFromRichText(item.review),
        date: item.date,
        avatar: item.avatar?.url
          ? `http://localhost:1337${item.avatar.url}`
          : "/placeholder.jpg",
      }));

      setReviews(formatted);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let avatarId = null;

      // Upload avatar first
      if (avatarFile) {
        const formDataImg = new FormData();
        formDataImg.append("files", avatarFile);

        const uploadRes = await fetch("http://localhost:1337/api/upload", {
          method: "POST",
          body: formDataImg,
        });

        const uploadData = await uploadRes.json();
        avatarId = uploadData?.[0]?.id;
      }

      const payload = {
        data: {
          ...formData,
          review: [
            {
              type: "paragraph",
              children: [{ type: "text", text: formData.review }],
            },
          ],
          date: new Date().toISOString().split("T")[0],
          avatar: avatarId,
        },
      };

      const res = await fetch("http://localhost:1337/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit review");

      setFormData({
        name: "",
        department: "",
        year: "",
        review: "",
        rating: 0,
      });
      setAvatarFile(null);
      setShowForm(false);
      //   fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const filteredReviews =
    filterRating > 0
      ? reviews.filter((review) => review.rating >= filterRating)
      : reviews;

  return (
    <MainLayout>
      {/* Hero */}
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

      {/* Reviews */}
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

      {/* Form */}
      {showForm && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Department"
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Academic Year"
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                placeholder="Your Review"
                value={formData.review}
                onChange={(e) =>
                  setFormData({ ...formData, review: e.target.value })
                }
                className="w-full border p-2 rounded"
                rows={4}
                required
              />
              <input
                type="number"
                placeholder="Rating (1-5)"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: Number(e.target.value) })
                }
                className="w-full border p-2 rounded"
                min={1}
                max={5}
                required
              />
              <input
                type="file"
                accept="image/*"
                className="w-full border p-2 rounded"
                onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
              />
              <Button
                type="submit"
                className="bg-ssu-blue hover:bg-ssu-blue/90">
                Submit
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* Call to Action */}
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
    </MainLayout>
  );
};

export default Reviews;
