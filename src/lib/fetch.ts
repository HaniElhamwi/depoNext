import { getLocale } from "next-intl/server";
import qs from "qs";

export async function fetcher<T>(
  url: string, // Example: "/products?limit=10"
  options?: RequestInit
): Promise<T> {
  const locale = await getLocale();
  const baseUrl = "http://localhost:1337/api";

  // Separate path and query string
  const [path, queryString = ""] = url.split("?");

  const existingQuery = qs.parse(queryString);

  const fullQuery = {
    ...existingQuery,
    locale: locale == "tr" ? "tr-TR" : locale,
  };

  const fullUrl = `${baseUrl}${path}?${qs.stringify(fullQuery)}`;

  console.log(fullUrl, "fullUrl (qs)");

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
