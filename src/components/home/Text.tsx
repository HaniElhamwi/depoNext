// // Text.tsx or Text.ts
// async function getStrapiData(path: string) {
//     const baseUrl = "process.env.NEXT_PUBLIC_BACKEND_URL";
//     try {
//       const response = await fetch(baseUrl + path);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const Text = async () => {
//     const strapiData = await getStrapiData("/api/events/:id"); // Replace ':id' with an actual ID
//     const { title } = strapiData.data.attributes;

//     return (
//       <>
//         <h1>{title}</h1>
//       </>
//     ); ما
//   };

//   export default Text;

async function getStrapiData(path: string) {
  const baseUrl = "process.env.NEXT_PUBLIC_BACKEND_URL";
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
    return null;
  }
}

export default async function Text() {
  const strapiData = await getStrapiData("/api/events/7");

  const title = strapiData?.data?.attributes?.title;

  return (
    <main>
      <h1>{title ?? "الحدث غير موجود أو لا يوجد عنوان"}</h1>
    </main>
  );
}
