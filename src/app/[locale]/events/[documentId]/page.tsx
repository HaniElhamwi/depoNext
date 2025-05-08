"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetcher } from "@/lib/fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const EventDetail = () => {
  const params = useParams();
  const id = params?.documentId;
  

  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const query = `/events?filters[documentId][$eq]=${id}&populate=images`;
        console.log("Query being sent:", query);
        const res = await fetcher(query);
        console.log("Response from Strapi:", res);

        if (!res?.data || res.data.length === 0) {
          throw new Error("Event not found.");
        }

        const e = res.data[0];
        const images =
        e?.images?.map((image: any) =>
          `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`
        ) || [];
      
      console.log("Image URLs:", images);
      
      console.log("Image URL:", images);  // طباعة الـ images للتأكد

        const formatted = {
          id: e.id,
          title: e.title,
          description: e.description,
          date: e.date,
          location: e.location,
          category: e.category,
          content: e.content,
          images,
        };
        console.log("Fetching event with documentId:", id);

        setEvent(formatted);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching event:", err);
        setError("An error occurred while fetching the event.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchEvent();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;
  if (!event) return <p className="text-center py-10">Event not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <a href="/events" className="text-blue-600 underline mb-4 block">
        ← Back to Events
      </a>

      {event.images.length > 0 && (
        <Swiper
          navigation
          modules={[Navigation]}
          className="rounded-xl shadow-md mb-6 h-64 w-full"
        >
          {event.images.map((img: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Event image ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

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

      {Array.isArray(event.content) && event.content.map((block: any, i: number) => {
        if (block.type === "heading") {
          const level = block.level || 3;
          const text = block.children?.map((c: any) => c.text).join(" ") || "";
          const Tag = `h${level}` as keyof JSX.IntrinsicElements;
          return (
            <Tag
              key={i}
              className={`text-blue-900 font-bold mb-2 ${
                level === 1 ? "text-4xl" : level === 2 ? "text-3xl" : "text-2xl"
              }`}
            >
              {text}
            </Tag>
          );
        }

        if (block.type === "paragraph") {
          const text = block.children?.map((c: any) => c.text).join(" ") || "";
          return (
            <p key={i} className="text-gray-700 mb-3 leading-relaxed">
              {text}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
};

export default EventDetail;

























