import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { fetcher } from "@/lib/fetch";
import { getTranslations } from "next-intl/server";

const ActivitiesPreview = async () => {
  const data: any = await fetcher("/events?populate=images");

  const t = await getTranslations();
  const events = data.data || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 text-ssu-blue mb-4 rtl:font-changa ltr:font-montserrat section-title">
            {t("HOME_PAGE.ACTIVITY_TITLE")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-semibold ">
            {t("HOME_PAGE.ACTIVITY_DESCRIPTION")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const imageUrl = event.images?.[0]?.url
              ? `http://localhost:1337${event.images?.[0]?.url}`
              : "/placeholder.jpg"; // صورة بديلة في حال عدم وجود صورة

            return (
              <Card key={event.id} className="hover-effect">
                <div className="h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} • {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <p className="text-gray-600">{event.description}</p> */}
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/events/${event.id}`}
                    className="text-ssu-orange flex items-center hover:underline">
                    {t("COMMON.READ_MORE")}{" "}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-ssu-light-orange text-ssu-orange hover:bg-ssu-light-orange hover:text-white">
            <Link href="/events">{t("HOME_PAGE.VIEW_ALL_ACTIVITIES")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;
