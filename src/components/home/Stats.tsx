import React from "react";
import MotionSection from "../MotionSection";
import { getTranslations } from "next-intl/server";

async function Stats() {
  const t = await getTranslations("HOME_PAGE.STATS");

  return (
    <MotionSection className="relative text-secondary bg-gray-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-primary py-24 sm:py-32 rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="section-title !text-white">{t("TITLE")}</h2>
                <p className="text-lg leading-8 text-gray-200 font-medium">
                  {t("DESCRIPTION")}
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    {t("STATS.MOVE_SUCCESS")}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    {t("VALUES.MOVE_SUCCESS")}
                  </dd>
                </div>
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    {t("STATS.STORAGE_SPACE")}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    {t("VALUES.STORAGE_SPACE")}
                  </dd>
                </div>
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    {t("STATS.CUSTOMER_SATISFACTION")}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    {t("VALUES.CUSTOMER_SATISFACTION")}
                  </dd>
                </div>
                <div className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-500">
                    {t("STATS.CITIES_SERVICE")}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-secondary font-montserrat">
                    {t("VALUES.CITIES_SERVICE")}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

export default Stats;
