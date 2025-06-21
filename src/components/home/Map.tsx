"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="text-gray-800 bg-gray-50 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-10">
        {/* Map & Contact Info */}
        <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.998308947094!2d29.003818015537917!3d41.06556737929538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7d4f7af3937%3A0xec6f288f2f21ebdb!2sCam%20Pak%20otopark%20ve%20y%C4%B1kama!5e0!3m2!1str!2str!4v1687364546074!5m2!1str!2str"
            style={{ minHeight: "100%" }}
          />
          <div className="relative z-10 bg-white p-6 rounded-xl m-6 shadow-md backdrop-blur-sm bg-opacity-90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-secondary font-montserrat">
                  ADRES
                </h3>
                <p className=" text-sm group-hover:no-underline text-secondary font-montserrat">
                  Gayrettepe, Vefabey Sokağı 25/1, 34349 Beşiktaş/İstanbul
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-secondary font-montserrat tracking-wide uppercase">
                  İLETİŞİM
                </h3>

                <p className="text-gray-800 font-tajawal text-lg"></p>

                <Link
                  href={"mailto:info@deponext.com"}
                  className="text-gray-800 font-tajawal text-lg flex items-center gap-2 group cursor-pointer hover:text-secondary transition-colors duration-200">
                  <Mail size={18} className="text-primary" />
                  <span className="underline text-sm group-hover:no-underline text-secondary font-montserrat">
                    info@deponext.com
                  </span>
                </Link>
                <Link
                  href={`tel:+905373234343`}
                  className="text-gray-800 font-tajawal text-lg flex items-center gap-2 group cursor-pointer hover:text-secondary transition-colors duration-200">
                  <Phone size={18} className="text-primary" />
                  <span className="underline text-sm group-hover:no-underline text-secondary font-montserrat">
                    +90 537 323 43 43
                  </span>
                </Link>
                <Link
                  target="_blank"
                  className="text-gray-800 font-tajawal text-lg flex items-center gap-2 group cursor-pointer hover:text-secondary transition-colors duration-200"
                  href={`https://www.google.com.tr/maps/place/Cam+Pak+otopark+ve+y%C4%B1kama/@41.0655674,29.0040804,21z/data=!4m14!1m7!3m6!1s0x14cab7d4f7af3937:0xec6f288f2f21ebdb!2zTWFudMSxY8SxIHlha3Vw!8m2!3d41.065662!4d29.003818!16s%2Fg%2F11q9__7xkc!3m5!1s0x14cab7e0e90d1005:0x1bfb0e4fa8b47755!8m2!3d41.0656188!4d29.0039287!16s%2Fg%2F11y1dv3j2v?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D`}>
                  <MapPin size={18} className="text-primary" />
                  <span className="underline text-sm group-hover:no-underline text-secondary font-montserrat">
                    Harita&apos;dan gör
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Location Description */}
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="section-title text-center font-bold mb-4 ">
            Merkezî Konumda, Kolay Erişim!
          </h2>
          <p className="text-secondary font-montserrat leading-relaxed mb-4">
            Depomuz, İstanbul’un kalbinde yer alan Gayrettepe Mahallesi, Vefabey
            Sokak, Say Apartmanı B Blok No:25 İç Kapı No:1, Beşiktaş
            adresindedir.
          </p>
          <p className="text-secondary font-montserrat leading-relaxed mb-4">
            Zorlu Center, Kanyon AVM, Levent, Şişli ve Mecidiyeköy gibi
            İstanbul’un önemli merkezlerine oldukça yakın konumda bulunuyoruz.
          </p>
          <p className="text-secondary font-montserrat leading-relaxed mb-4">
            Toplu taşıma araçlarıyla kolayca ulaşılabilen lokasyonumuz
            sayesinde, eşyalarınıza her zaman hızlı ve zahmetsiz bir şekilde
            erişebilirsiniz.
          </p>
          <p className="text-secondary font-montserrat font-semibold">
            Depo kiralama sürecinde hem güvenli hem de ulaşımı kolay bir
            lokasyon arıyorsanız, doğru yerdesiniz!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
