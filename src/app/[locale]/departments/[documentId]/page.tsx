import { fetcher } from "@/lib/fetch";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Button } from "@/components/ui/button";

async function getEvent(id: string) {
  try {
    const query = `/departments?filters[documentId][$eq]=${id}&populate=image`;
    const res = await fetcher<any>(query);

    if (!res?.data || res.data.length === 0) {
      return null;
    }

    const e = res.data[0];
    const image = `${process.env.NEXT_PUBLIC_BACKEND_URL}${e.image.url}`;

    return {
      id: e.id,
      title: e.title,
      description: e.description,
      date: e.date,
      location: e.location,
      category: e.category,
      content: e.content,
      image,
    };
  } catch (err) {
    console.error("Error fetching event:", err);
    throw new Error("Failed to fetch event");
  }
}

export default async function DepartmentDetail({
  params,
}: {
  params: { documentId: string };
}) {
  const id = params.documentId;

  // This will automatically throw and show the closest error boundary if there's an error
  const event = await getEvent(id);

  if (!event) return <p className="text-center py-10">Event not found.</p>;

  console.log("event", event);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/events">
        <Button variant="outline">← Back to Events</Button>
      </Link>

      <h1 className="text-4xl font-bold text-blue-700 mb-2">{event.title}</h1>
      {event.content && <BlocksRenderer content={event.content} />}
    </div>
  );
}
