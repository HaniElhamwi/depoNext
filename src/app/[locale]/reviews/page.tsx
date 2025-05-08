import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetcher } from "@/lib/fetch";
import { Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: { rating?: string };
}) {
  const currentRating = Number(searchParams.rating || 0);
  const allReviews =
    (
      await fetcher(
        `/reviews${
          currentRating > 0 ? `?filters[rating][$eq]=${currentRating}` : ""
        }`,
        {}
      )
    ).data || [];
  const t = await getTranslations("REVIEWS_PAGE");

  return (
    <>
      {/* Hero */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6 rtl:font-changa font-montserrat">
            {t("STUDENTS_REVIEWS")}
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            {t("REVIEWS_DESCRIPTION")}
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-medium text-gray-700">
              {t("FILTER_BY_RATING")}
            </span>
            {[0, 3, 4, 5].map((rating) => (
              <Link href={`/reviews?rating=${rating}`} key={rating}>
                <Button
                  variant={rating === currentRating ? "default" : "outline"}
                  size="sm"
                  className={
                    currentRating === rating
                      ? "bg-ssu-blue hover:bg-ssu-blue/90 !font-tajawal"
                      : "!font-tajawal"
                  }>
                  {rating === 0 ? (
                    t("ALL_REVIEWS")
                  ) : (
                    <div className="flex items-center">
                      {rating}+ <Star size={14} className="ml-1 fill-current" />
                    </div>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons (client side for interaction) */}
      {/* <ClientForm currentRating={rating} /> */}

      {/* Reviews */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review) => (
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
    </>
  );
}
