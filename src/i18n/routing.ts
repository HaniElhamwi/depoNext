import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "tr"] as const;
export const routing = defineRouting({
  locales,
  defaultLocale: "ar",
});
