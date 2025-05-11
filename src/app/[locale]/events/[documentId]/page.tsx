import { fetcher } from "@/lib/fetch";
import EventImageSlider from "./event-image-slider";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { cache } from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { documentId: string };
}): Promise<Metadata> {
  const t = await getTranslations("DEPARTMENTS_SECTION");
  const { documentId: id } = await params;
  const department = await getEvent(id);

  return {
    title: department.title + " | " + t("TITLE"),
    description: department.description,
    openGraph: {
      title: department.title + " | " + t("TITLE"),
      description: department.description,
      images: [
        {
          url: department.images[0] || "/placeholder.svg",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const getEvent = cache(async (id: string) => {
  try {
    const query = `/events?filters[documentId][$eq]=${id}&populate=images`;
    const res = await fetcher<any>(query);

    if (!res?.data || res.data.length === 0) {
      return null;
    }

    const e = res.data[0];
    const images = e?.images?.map((image: any) => image.url) || [];

    return {
      id: e.id,
      title: e.title,
      description: e.description,
      date: e.date,
      location: e.location,
      category: e.category,
      content: e.content,
      images,
    };
  } catch (err) {
    console.error("Error fetching event:", err);
    throw new Error("Failed to fetch event");
  }
});

export default async function EventDetail({
  params,
}: {
  params: { documentId: string };
}) {
  const id = params?.documentId;

  const event = await getEvent(id);

  if (!event) {
    return <p className="text-center py-10">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {event.images.length > 0 && <EventImageSlider images={event.images} />}

      <h1 className="text-4xl font-bold  mb-2 section-title">{event.title}</h1>
      <div className="text-gray-600 mb-2 flex gap-1 items-center">
        <Calendar size={16} />
        {event.date}
      </div>
      {event.location && (
        <div className="text-gray-600 mb-4 flex gap-1 items-center">
          <MapPin size={16} />
          {event.location}
        </div>
      )}

      {event.content && <BlocksRenderer content={event.content} />}
    </div>
  );
}
