// "use client";

// import MainLayout from "@/components/layout/MainLayout";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import { useState } from "react";

// const faqData = {
//   general: [
//     {
//       question: "What is the Syrian Student Union at Karabük University?",
//       answer:
//         "The Syrian Student Union (SSU) is a student-led organization that supports Syrian students at Karabük University. We provide resources, organize events, and build community to help students succeed academically and socially during their time at the university.",
//     },
//     {
//       question: "How can I join the Syrian Student Union?",
//       answer:
//         "Joining the SSU is easy! Just fill out the membership form on our website or visit our office at the Student Center. Membership is free for all Syrian students at Karabük University.",
//     },
//     {
//       question: "Where is the SSU office located?",
//       answer:
//         "Our office is located in the Student Center, Room 204. We are open Monday through Friday from 10:00 AM to 4:00 PM during the academic year.",
//     },
//     {
//       question: "How can I contact the Syrian Student Union?",
//       answer:
//         "You can contact us via email at contact@ssukarabuk.com, through our social media channels, or by visiting our office during operating hours.",
//     },
//   ],
//   academics: [
//     {
//       question: "How can the SSU help me with my studies?",
//       answer:
//         "We provide academic support through peer tutoring, study groups, workshops, and connecting students with academic resources. We also share information about scholarships and academic opportunities.",
//     },
//     {
//       question: "Does the SSU offer tutoring services?",
//       answer:
//         "Yes, we coordinate peer tutoring in various subjects. If you need academic help or would like to volunteer as a tutor, please contact our Academic Support Officer.",
//     },
//     {
//       question:
//         "Can the SSU help me communicate with professors if I have language barriers?",
//       answer:
//         "Yes, we can provide translation assistance or help facilitate communication between students and professors when language barriers arise.",
//     },
//     {
//       question: "Does the SSU provide information about scholarships?",
//       answer:
//         "Yes, we regularly share information about scholarship opportunities for Syrian students and can provide guidance on application processes.",
//     },
//   ],
//   events: [
//     {
//       question: "What kind of activities does the SSU organize?",
//       answer:
//         "We organize various activities including orientation events for new students, cultural events, academic workshops, career development sessions, social gatherings, and community service opportunities.",
//     },
//     {
//       question: "How can I find out about upcoming SSU events?",
//       answer:
//         "All our events are announced on our website, social media channels, and through email to our members. You can also check the Events Calendar on our website.",
//     },
//     {
//       question: "Can I propose or help organize an event?",
//       answer:
//         "Absolutely! We welcome ideas and volunteer help from our members. Contact our Events Coordinator with your proposal or to volunteer.",
//     },
//     {
//       question: "Are SSU events only for Syrian students?",
//       answer:
//         "While our primary focus is supporting Syrian students, many of our events are open to the entire university community to promote cultural exchange and integration.",
//     },
//   ],
//   resources: [
//     {
//       question: "What resources does the SSU provide for new students?",
//       answer:
//         "For new students, we offer orientation sessions, campus tours, assistance with registration procedures, housing information, and a buddy system to help with the transition to university life.",
//     },
//     {
//       question: "Does the SSU help with housing?",
//       answer:
//         "We provide information about on-campus and off-campus housing options and can connect new students with current students who are looking for roommates.",
//     },
//     {
//       question: "Can the SSU help with residency permit issues?",
//       answer:
//         "We can provide general guidance about residency permit procedures and recommend resources for more specific assistance.",
//     },
//     {
//       question: "Does the SSU offer language support?",
//       answer:
//         "Yes, we organize Turkish language practice groups and can direct students to language courses and resources at the university and in the community.",
//     },
//   ],
// };

// const FAQ = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("general");

//   const filterQuestions = (category: string) => {
//     if (!searchTerm) return faqData[category as keyof typeof faqData];

//     return faqData[category as keyof typeof faqData].filter(
//       (item) =>
//         item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.answer.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   const filteredQuestions = filterQuestions(activeTab);
//   const hasResults = filteredQuestions.length > 0;

//   return (
//     <MainLayout>
//       {/* Hero Section */}
//       <section className="bg-ssu-blue text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="h1 mb-6">Frequently Asked Questions</h1>
//           <p className="text-lg max-w-3xl mx-auto text-gray-100">
//             Find answers to common questions about the Syrian Student Union and
//             our services.
//           </p>
//         </div>
//       </section>

//       {/* Search */}
//       <section className="py-8 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-md mx-auto relative">
//             <Search
//               size={18}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//             />
//             <Input
//               type="text"
//               placeholder="Search questions..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10"
//             />
//           </div>
//         </div>
//       </section>

//       {/* FAQ Content */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <Tabs
//               defaultValue="general"
//               value={activeTab}
//               onValueChange={setActiveTab}>
//               <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
//                 <TabsTrigger value="general">General</TabsTrigger>
//                 <TabsTrigger value="academics">Academics</TabsTrigger>
//                 <TabsTrigger value="events">Events</TabsTrigger>
//                 <TabsTrigger value="resources">Resources</TabsTrigger>
//               </TabsList>

//               {Object.keys(faqData).map((category) => (
//                 <TabsContent key={category} value={category}>
//                   {hasResults ? (
//                     <Accordion
//                       type="single"
//                       collapsible
//                       className="bg-white rounded-lg shadow-md p-6">
//                       {filterQuestions(category).map((item, index) => (
//                         <AccordionItem key={index} value={`item-${index}`}>
//                           <AccordionTrigger className="text-left font-medium">
//                             {item.question}
//                           </AccordionTrigger>
//                           <AccordionContent className="text-gray-600">
//                             {item.answer}
//                           </AccordionContent>
//                         </AccordionItem>
//                       ))}
//                     </Accordion>
//                   ) : (
//                     <div className="text-center py-12 bg-white rounded-lg shadow-md">
//                       <h3 className="text-xl font-medium text-gray-600">
//                         No questions found.
//                       </h3>
//                       <p className="text-gray-500 mt-2">
//                         Try adjusting your search criteria.
//                       </p>
//                     </div>
//                   )}
//                 </TabsContent>
//               ))}
//             </Tabs>
//           </div>

//           <div className="max-w-2xl mx-auto mt-16 text-center">
//             <h2 className="h3 text-ssu-blue mb-4">Still Have Questions?</h2>
//             <p className="text-gray-600 mb-6">
//               Can&apos;t find the answer you&apos;re looking for? Feel free to
//               reach out to us directly and we&apos;ll be happy to help.
//             </p>
//             <div className="inline-flex items-center justify-center bg-ssu-blue text-white px-6 py-3 rounded-md hover:bg-ssu-blue/90 transition-colors">
//               Contact Us
//             </div>
//           </div>
//         </div>
//       </section>
//     </MainLayout>
//   );
// };

// export default FAQ;
import MainLayout from "@/components/layout/MainLayout";
import FaqContent from "../faq/FaqContent";

const getFAQs = async () => {
  const res = await fetch("http://localhost:1337/api/faqs?populate=*");
  const data = await res.json();
  return data.data.map((item: any) => ({
    question: item.question,
    answer: item.answer,
    category: item.category,
  }));
};


export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <MainLayout>
      <section className="bg-ssu-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="h1 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">
            Find answers to common questions about the Syrian Student Union and
            our services.
          </p>
        </div>
      </section>

      <FaqContent faqs={faqs} />
    </MainLayout>
  );
}
