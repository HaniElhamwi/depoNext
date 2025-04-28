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

const activities = [
  {
    id: 1,
    title: "Welcome Day 2023",
    description:
      "A special welcome event for new Syrian students joining Karabük University.",
    date: "September 15, 2023",
    location: "University Main Hall",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Career Workshop",
    description:
      "Learn about job opportunities and career planning for Syrian students in Turkey.",
    date: "October 10, 2023",
    location: "Engineering Faculty",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Cultural Exchange Day",
    description:
      "Share Syrian culture with the university community through food, music, and art.",
    date: "November 5, 2023",
    location: "University Square",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const ActivitiesPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 text-ssu-blue mb-4">Our Recent Activities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our recent events and activities organized to support,
            connect, and empower Syrian students at Karabük University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card key={activity.id} className="hover-effect">
              <div className="h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{activity.title}</CardTitle>
                <CardDescription>
                  {activity.date} • {activity.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{activity.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/activities/${activity.id}`}
                  className="text-ssu-blue flex items-center hover:underline">
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-ssu-blue text-ssu-blue hover:bg-ssu-blue hover:text-white">
            <Link href="/activities">View All Activities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;
