import { BACKEND_URL } from "@/constants/env";
import { getLocale } from "next-intl/server";
import qs from "qs";

export async function fetcher<T>(
  url: string, // Example: "/products?limit=10"
  options?: RequestInit
): Promise<T> {
  const locale = await getLocale();
  const baseUrl = BACKEND_URL; // Replace with your base URL

  const [path, queryString = ""] = url.split("?");

  const existingQuery = qs.parse(queryString);

  const fullQuery = {
    ...existingQuery,
    locale: locale == "tr" ? "tr-TR" : locale,
  };

  const fullUrl = `${baseUrl}${path}?${qs.stringify(fullQuery)}`;
  console.log("Full URL:", fullUrl); // Debugging line

  const res = await fetch(fullUrl, {
    ...options,
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.statusText}`);
  }

  return res.json();
}
