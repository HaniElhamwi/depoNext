import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="relative text-secondary bg-gray-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">DepoNext Hakkında</h3>

          <h2 className="section-title max-w-md !font-montserrat !font-extrabold mx-auto md:mx-0">
            Sizler için her şeyi düşündük. Siz rahat bir nefes alabilirsiniz.
          </h2>

          <p className="text-lg text-gray-500 mt-6 font-semibold max-w-md mx-auto md:mx-0">
            Eşyaların demontesi, paketlenmesi, taşınması ve depolanması; anahtar
            teslim depolama çözümleri ile yanınızdayız.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-md md:max-w-lg h-[300px] md:h-[400px] mx-auto">
          <Image
            src="/images/about.png"
            alt="About DepoNext"
            width={500}
            height={400}
            className="rounded-lg h-full w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
