import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section
      className="py-16 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-ssu-blue/90 before:to-ssu-orange/80"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="h2 mb-6 text-white">Join Our Community Today</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100">
          Become part of the Syrian Student Union at Karabük University and
          connect with fellow students, access resources, and participate in
          enriching activities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-ssu-blue hover:bg-gray-100">
            <Link href="/about">Learn About Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-ssu-blue hover:bg-gray-100">
            <Link href="/activities">Explore Activities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
