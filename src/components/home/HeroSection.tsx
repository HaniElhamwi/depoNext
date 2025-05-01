import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative text-white py-20 md:py-32 before:absolute before:inset-0 before:bg-gradient-to-r before:from-ssu-blue/90 before:to-ssu-orange/80"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight rtl:font-changa ltr:font-montserrat">
              Welcome to Karabük University Syrian Student Union
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Supporting Syrian students through community, resources, and
              opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-gray-200 text-ssu-blue"
              >
                <Link href="/about" className="text-ssu-blue font-medium">
                  Learn More
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/30"
              >
                <Link href="/activities" className="text-white font-medium">
                  View Activities
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-5xl font-bold">SSU</div>
                  <div className="text-xl mt-2">Karabük University</div>
                  <div className="text-sm mt-1 opacity-80">Est. 2020</div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-ssu-orange"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-ssu-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
