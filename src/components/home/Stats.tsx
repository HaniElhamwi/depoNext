import React from "react";

function Stats() {
  return (
    <section className="relative text-secondary bg-gray-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-primary py-24 sm:py-32 rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="section-title !text-white">
                  Müşterilerimizin güvenini kazandık
                </h2>
                <p className="text-lg leading-8 text-gray-200 font-medium">
                  Türkiye genelinde binlerce kişi ve işletmeye güvenli depolama
                  ve taşıma hizmeti sağlıyoruz.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    Başarılı taşınma
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    5.000+
                  </dd>
                </div>
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    Aktif depo alanı (m²)
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    12.000
                  </dd>
                </div>
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    Müşteri memnuniyeti
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    %98
                  </dd>
                </div>
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    Şehirler içi hizmet
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    25+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
