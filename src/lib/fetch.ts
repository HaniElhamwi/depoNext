export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`http://localhost:1337/api${url}`, {
    ...options,
    // Revalidate the cache every 60 seconds (optional for SSG caching)
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.statusText}`);
  }

  const data = await res.json();
  return data as T;
}

//from muhammed
// export async function fetchEvents() {
//     const res = await fetch('http://localhost:1337/api/events?populate=*');
//     if (!res.ok) throw new Error('Failed to fetch events');
//     const data = await res.json();
//     return data.data;
//   }
