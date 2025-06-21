import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ar", "tr"] as const;
export const routing = defineRouting({
  locales,
  defaultLocale: "tr",
});
