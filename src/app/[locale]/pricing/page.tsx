import { Button } from "@/components/ui/button";
import React from "react";

// Checkmark SVG icon component
const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"></path>
  </svg>
);

const App = () => {
  const pricingPlans = [
    {
      name: "Küçük Ölçekli Depolar",
      description:
        "Bireysel kullanımlar ve küçük projeleriniz için en iyi seçenek.",
      price: "₺29",
      duration: "/ay",
      features: [
        "Bireysel yapılandırma",
        "Kurulum veya gizli ücret yok",
        <span>
          Kullanıcı sayısı: <span className="font-semibold">1 kullanıcı</span>
        </span>,
        <span>
          Depolama alanı: <span className="font-semibold">100 GB</span>
        </span>,
        <span>
          Premium destek: <span className="font-semibold">6 ay</span>
        </span>,
        <span>
          Ücretsiz güncellemeler: <span className="font-semibold">6 ay</span>
        </span>,
      ],
      buttonText: "Başlayın",
    },
    {
      name: "Orta Ölçekli Depolar",
      description: "Birden fazla kullanıcı ve genişletilmiş destek için ideal.",
      price: "₺99",
      duration: "/ay",
      features: [
        "Gelişmiş yapılandırma",
        "Kesinlikle gizli ücret yok",
        <span>
          Kullanıcı sayısı: <span className="font-semibold">5 kullanıcı</span>
        </span>,
        <span>
          Depolama alanı: <span className="font-semibold">1 TB</span>
        </span>,
        <span>
          Premium destek: <span className="font-semibold">12 ay</span>
        </span>,
        <span>
          Ücretsiz güncellemeler: <span className="font-semibold">12 ay</span>
        </span>,
      ],
      buttonText: "Başlayın",
    },
    {
      name: "Büyük Ölçekli Depolar",
      description:
        "Büyük ölçekli işletmeler ve kapsamlı depolama ihtiyaçları için.",
      price: "₺499",
      duration: "/ay",
      features: [
        "Tamamen özelleştirilebilir yapılandırma",
        "Sıfır kurulum veya gizli ücret",
        <span>
          Kullanıcı sayısı:{" "}
          <span className="font-semibold">Sınırsız kullanıcı</span>
        </span>,
        <span>
          Depolama alanı: <span className="font-semibold">10 TB</span>
        </span>,
        <span>
          7/24 Özel destek: <span className="font-semibold">24 ay</span>
        </span>,
        <span>
          Ücretsiz güncellemeler: <span className="font-semibold">24 ay</span>
        </span>,
      ],
      buttonText: "Başlayın",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 font-sans">
      {" "}
      {/* Added font-sans for Inter */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 rounded-lg">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="section-title !font-extrabold">
            İhtiyaçlarınıza Özel Kişisel Depolama Çözümleri
          </h2>
          <p className="mb-4 text-gray-600 text-lg  font-medium">
            Kişisel veya iş odaklı tüm depolama ihtiyaçlarınız için esnek ve
            güvenli çözümler sunuyoruz.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 rounded-lg">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="section-title !text-gray-800 !text-2xl">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold rounded-lg text-primary">
                  {plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400 rounded-lg">
                  {plan.duration}
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left rounded-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckIcon />
                    <span className="rounded-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button>{plan.buttonText}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
