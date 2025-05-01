// "use client";
import MainLayout from "@/components/layout/MainLayout";
import TeamSection from "../about/TeamSection"; // 👈 استيراد المكون الجديد
// import { Card, CardContent } from "@/components/ui/card";
// import { useEffect, useState } from "react";
// import { fetcher } from "@/lib/fetch";

// // const teamMembers = [
// //   {
// //     name: "Ahmad Khaled",
// //     role: "President",
// //     bio: "Computer Engineering student passionate about supporting the Syrian student community.",
// //     image: "https://randomuser.me/api/portraits/men/32.jpg",
// //   },
// //   {
// //     name: "Layla Mahmoud",
// //     role: "Vice President",
// //     bio: "Medicine student dedicated to creating educational opportunities for fellow students.",
// //     image: "https://randomuser.me/api/portraits/women/44.jpg",
// //   },
// //   {
// //     name: "Omar Ibrahim",
// //     role: "Events Coordinator",
// //     bio: "Business Administration student with experience in organizing community events.",
// //     image: "https://randomuser.me/api/portraits/men/68.jpg",
// //   },
// //   {
// //     name: "Sara Nour",
// //     role: "Academic Support Officer",
// //     bio: "Education student focused on providing academic resources and support.",
// //     image: "https://randomuser.me/api/portraits/women/65.jpg",
// //   },
// //   {
// //     name: "Yasir Al-Ali",
// //     role: "Media Coordinator",
// //     bio: "Communications student managing the union's social media and outreach.",
// //     image: "https://randomuser.me/api/portraits/men/75.jpg",
// //   },
// //   {
// //     name: "Reem Hassan",
// //     role: "Treasurer",
// //     bio: "Finance student responsible for managing the union's budget and finances.",
// //     image: "https://randomuser.me/api/portraits/women/81.jpg",
// //   },
// // ];

// const About = async () => {
//   // const [teamMembers, setTeamMembers] = useState([]);
//   //  const teamMembers = (await fetcher("/team-members?populate=image")) as any;
//   //   console.log("posts?.data", teamMembers?.data);
  
//   //   const formatted = teamMembers?.data?.map((item) => ({
//   //     id: item.id,
//   //     name: item.name,
//   //     role: item.position,

//   //     // date: item.date,
//   //     // author: item.author,
//   //     // category: item.category,
//   //     // slug: item.slug,

//   //     image: item.image?.url
//   //       ? `http://localhost:1337${item.image?.url}`
//   //       : "/placeholder.jpg",
//   //   }));
//   //   console.log("formatted", formatted);
//   const [teamMembers, setTeamMembers] = useState([]);

// useEffect(() => {
//   const fetchTeamMembers = async () => {
//     try {
//       const res = await fetch("http://localhost:1337/api/team-members?populate=image");
//       const json = await res.json();

//       const extractText = (richText) => {
//         if (!Array.isArray(richText)) return "No bio";
//         return richText
//           .map((block) =>
//             block.children?.map((child) => child.text).join(" ")
//           )
//           .join("\n");
//       };

//       const members = json.data.map((item) => {
//         const attrs = item.attributes;

//         return {
//           id: item.id,
//           name: attrs.name,
//           role: attrs.position,
//           bio: extractText(attrs.bio),
//           image: attrs.image?.data?.attributes?.url
//             ? `http://localhost:1337${attrs.image.data.attributes.url}`
//             : "/placeholder.jpg", // صورة افتراضية
//         };
//       });

//       console.log("Fetched members:", members);
//       setTeamMembers(members);
//     } catch (err) {
//       console.error("Error fetching team members:", err);
//     }
//   };

//   fetchTeamMembers();
// }, []);
const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            Learn about the Syrian Student Union at Karabük University, our
            mission, vision, history, and the dedicated team supporting Syrian
            students.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="h2 text-ssu-blue mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                The Syrian Student Union at Karabük University is committed to
                supporting Syrian students throughout their academic journey. We
                strive to create a welcoming community that fosters academic
                excellence, personal growth, and cultural exchange.
              </p>
              <p className="text-gray-600">
                Our mission is to provide resources, organize activities, and
                facilitate connections to help Syrian students thrive in their
                studies and adapt to university life in Turkey.
              </p>
            </div>
            <div>
              <h2 className="h2 text-ssu-green mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We envision a community where every Syrian student at Karabük
                University has access to the support, resources, and
                opportunities they need to succeed academically, professionally,
                and personally.
              </p>
              <p className="text-gray-600">
                We aim to be a bridge between Syrian students and the wider
                university community, promoting cultural understanding and
                creating lasting connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="h2 text-ssu-blue mb-6 text-center">Our History</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-600">
                The Syrian Student Union at Karabük University was established
                in 2020 by a small group of dedicated Syrian students who
                recognized the need for a support system for their peers.
              </p>
              <p className="text-gray-600">
                What began as informal gatherings to help new students acclimate
                to university life quickly evolved into an organized union with
                a clear mission to support the growing Syrian student community
                at Karabük University.
              </p>
              <p className="text-gray-600">
                Over the years, we have expanded our activities to include
                orientation events, academic workshops, cultural celebrations,
                and career development opportunities. Today, we proudly serve
                hundreds of Syrian students, helping them navigate their
                educational journey in Turkey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </MainLayout>
  );
};

export default About;


//       {/* Team */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="h2 text-ssu-blue mb-8 text-center">Meet Our Team</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="hover-effect">
//                 <CardContent className="p-0">
//                   <div className="aspect-square overflow-hidden">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-1">{member.name}</h3>
//                     <p className="text-ssu-blue font-medium mb-3">
//                       {member.role}
//                     </p>
//                     <p className="text-gray-600">{member.bio}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </MainLayout>
//   );
// };

// export default About;
