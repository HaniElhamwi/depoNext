import { fetcher } from "@/lib/fetch";
import EventImageSlider from "./event-image-slider";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "@/components/ui/button";

async function getEvent(id: string) {
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
}

export default async function EventDetail({
  params,
}: {
  params: { documentId: string };
}) {
  const id = params?.documentId;

  // This will automatically throw and show the closest error boundary if there's an error
  const event = await getEvent(id);

  if (!event) {
    return <p className="text-center py-10">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/events">
        <Button variant="outline">← Back to Events</Button>
      </Link>

      {event.images.length > 0 && <EventImageSlider images={event.images} />}

      <h1 className="text-4xl font-bold text-blue-700 mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-1">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Location:</strong> {event.location}
      </p>

      <div className="bg-white p-4 rounded-lg shadow text-gray-800 mb-6">
        {event.description}
      </div>

      {event.content && <BlocksRenderer content={event.content} />}
    </div>
  );
}
