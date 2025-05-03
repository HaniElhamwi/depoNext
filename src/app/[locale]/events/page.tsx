import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/events/SearchBar";
import { fetcher } from "@/lib/fetch";
import Image from "next/image";

// const activities = [
//   {
//     id: 1,
//     title: "Welcome Day 2023",
//     description:
//       "A special welcome event for new Syrian students joining Karabük University.",
//     date: "September 15, 2023",
//     location: "University Main Hall",
//     image:
//       "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Orientation",
//   },
//   {
//     id: 2,
//     title: "Career Workshop",
//     description:
//       "Learn about job opportunities and career planning for Syrian students in Turkey.",
//     date: "October 10, 2023",
//     location: "Engineering Faculty",
//     image:
//       "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Career",
//   },
//   {
//     id: 3,
//     title: "Cultural Exchange Day",
//     description:
//       "Share Syrian culture with the university community through food, music, and art.",
//     date: "November 5, 2023",
//     location: "University Square",
//     image:
//       "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Cultural",
//   },
//   {
//     id: 4,
//     title: "Academic Success Workshop",
//     description:
//       "Tips and strategies for academic excellence and managing university coursework.",
//     date: "November 20, 2023",
//     location: "Library Conference Room",
//     image:
//       "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Academic",
//   },
//   {
//     id: 5,
//     title: "Turkish Language Practice Group",
//     description:
//       "Weekly conversation practice to improve Turkish language skills.",
//     date: "Every Thursday",
//     location: "Student Center, Room 103",
//     image:
//       "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Language",
//   },
//   {
//     id: 6,
//     title: "End of Year Celebration",
//     description:
//       "Celebrate the achievements of Syrian students at Karabük University.",
//     date: "December 15, 2023",
//     location: "University Cultural Center",
//     image:
//       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//     category: "Social",
//   },
// ];
import { slugify } from "@/lib/slugify";

const categories = [
  "All",
  "Orientation",
  "Career",
  "Cultural",
  "Academic",
  "Language",
  "Social",
];

const Events = async ({ searchParams }: any) => {
  const awaitedParams = await searchParams;
  const selectedCategory = awaitedParams.category || "All";
  const searchTerm = awaitedParams.search;

  console.log(searchTerm);

  let query = `/events?populate=images`;

  if (selectedCategory !== "All") {
    query += `&filters[category][$eq]=${selectedCategory.toLowerCase()}`;
  }

  if (searchTerm) {
    query += `&filters[$or][0][title][$containsi]=${searchTerm}`;
    query += `&filters[$or][1][description][$containsi]=${searchTerm}`;
  }

  const data: any = await fetcher(query);

  const events = data.data || [];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6">Activities & Events</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            Discover our past and upcoming activities designed to support,
            connect, and enrich the experience of Syrian students at Karabük
            University.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <SearchBar />
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Link
                  href={{
                    query: {
                      category,
                    },
                  }}
                  key={category}
                >
                  <Button
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    // onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-ssu-blue hover:bg-ssu-blue/90"
                        : ""
                    }
                  >
                    {category}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {events?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events?.map((event) => {
                const image = event.images?.[0]?.url
                  ? `http://localhost:1337${event.images?.[0]?.url}`
                  : "/placeholder.jpg";

                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover-effect"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={image}
                        // layout="fill"
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-semibold bg-ssu-blue/10 text-ssu-blue px-2 py-1 rounded">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-col space-y-2 text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{formatDate("2025-04-29")}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Link
                        href={
                          // `/activities/${event.id}`
                          // `/events/${slugify(event.title)}`
                          `/events/${event.documentId}`
                        }
                        className="block w-full text-center bg-ssu-blue text-white py-2 rounded hover:bg-ssu-blue/90 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">
                No activities found.
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

export default Events;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
