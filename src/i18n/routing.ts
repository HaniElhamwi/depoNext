import { defineRouting } from "next-intl/routing";

export const locales = ["tr"] as const;
export const routing = defineRouting({
  locales,
  defaultLocale: "tr",
  localePrefix: "never",
});
