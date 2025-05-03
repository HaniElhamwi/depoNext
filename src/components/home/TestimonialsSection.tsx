// "use client";

// import { useState } from "react";
// import { Separator } from "@/components/ui/separator";

// const testimonials = [
//   {
//     id: 1,
//     name: "Yasmin Al-Hassan",
//     role: "Computer Engineering Student",
//     year: "3rd Year",
//     quote:
//       "The Syrian Student Union has been like a second family for me at Karabük. They helped me navigate university life and connect with other students.",
//     avatar: "https://randomuser.me/api/portraits/women/32.jpg",
//   },
//   {
//     id: 2,
//     name: "Omar Mahmoud",
//     role: "Medicine Student",
//     year: "4th Year",
//     quote:
//       "Thanks to the workshops organized by SSU, I was able to find internship opportunities and develop my professional network.",
//     avatar: "https://randomuser.me/api/portraits/men/44.jpg",
//   },
//   {
//     id: 3,
//     name: "Sara Ibrahim",
//     role: "Business Administration Student",
//     year: "2nd Year",
//     quote:
//       "As a new student in Turkey, the orientation events by SSU helped me understand university procedures and adapt to campus life quickly.",
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
// ];

// const TestimonialsSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-16 bg-ssu-blue text-white">
//       <div className="container mx-auto px-4">
//         <div className="mb-12 text-center">
//           <h2 className="h2 mb-4">What Our Students Say</h2>
//           <p className="text-gray-200 max-w-2xl mx-auto">
//             Hear from Syrian students about their experiences with our union and
//             how it has supported their academic journey.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10">
//             <div className="flex flex-col md:flex-row gap-6 items-center">
//               <div className="flex-shrink-0">
//                 <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
//                   <img
//                     src={testimonials[activeIndex].avatar}
//                     alt={testimonials[activeIndex].name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <blockquote className="text-lg md:text-xl italic mb-4">
//                   {testimonials[activeIndex].quote}
//                 </blockquote>
//                 <Separator className="bg-white/30 my-4" />
//                 <div>
//                   <div className="font-bold">
//                     {testimonials[activeIndex].name}
//                   </div>
//                   <div className="text-sm text-gray-200">
//                     {testimonials[activeIndex].role},{" "}
//                     {testimonials[activeIndex].year}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`w-3 h-3 mx-2 rounded-full transition-colors ${
//                   index === activeIndex
//                     ? "bg-white"
//                     : "bg-white/30 hover:bg-white/50"
//                 }`}
//                 aria-label={`View testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
"use client";

import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/reviews?populate=*&publicationState=live");
        const data = await res.json();

        const extractTextFromRichText = (richText: any[]): string => {
          if (!Array.isArray(richText)) return "";
          return richText
            .map((block) =>
              block.children?.map((child: any) => child.text).join(" ")
            )
            .join("\n");
        };

        const formatted = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          department: item.department,
          year: item.year,
          quote: extractTextFromRichText(item.review),
          avatar: item.avatar?.url
            ? `http://localhost:1337${item.avatar.url}`
            : "/placeholder.jpg",
        }));

        setTestimonials(formatted);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-ssu-blue text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="h2 mb-4">What Our Students Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Hear from Syrian students about their experiences with our union and
            how it has supported their academic journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <blockquote className="text-lg md:text-xl italic mb-4">
                  {testimonials[activeIndex].quote}
                </blockquote>
                <Separator className="bg-white/30 my-4" />
                <div>
                  <div className="font-bold">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-gray-200">
                    {testimonials[activeIndex].department},{" "}
                    {testimonials[activeIndex].year}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
  
            />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;