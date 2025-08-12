import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blogs, carouselImages } from "@/constants/blogs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function BlogPage({ params }) {
  const awaitedParams = await params;

  const post = blogs.find((p) => p.slug === awaitedParams.slug);

  if (!post) return redirect("/");

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative">
        <div className="container px-4">
          <div className="relative mt-8 overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[16/9] w-full">
              {/* <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                }
                alt={post.title}
                fill
                className="object-cover"
                priority
              /> */}
              <Carousel className="w-full relative">
                <CarouselPrevious className="absolute left-0 rtl:-right-0 rtl:rotate-180 top-1/2 -translate-y-1/2 z-10 bg-white sm:left-4 sm:rtl:-right-4" />

                <CarouselNext className="absolute ltr:right-0 rtl:-left-0  top-1/2 -translate-y-1/2 z-10 bg-white sm:ltr:right-4 " />

                <CarouselContent className="flex gap-3">
                  {carouselImages?.map((src: any) => (
                    <CarouselItem
                      key={src}
                      className="px-2 basis-full bg-white rounded-lg">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={"/images/images/" + src}
                          alt={post.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight drop-shadow-sm">
                  {post.sections[0].heading}
                </h1>
                <p className="mt-2 text-white/85 text-sm md:text-base max-w-2xl">
                  Depo Kiralama: Lokasyon ve Hizmet Detayları
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container px-4 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6 md:gap-8">
          {/* Article */}
          <article className="rounded-2xl bg-white shadow-sm border border-neutral-200 p-6 md:p-10">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span>{post.meta.date}</span>
              <span>•</span>
              <span>{post.meta.readTime}</span>
            </div>

            <h2 className="mt-6 text-xl md:text-2xl font-semibold tracking-tight">
              {post.sections[0].heading}
            </h2>

            <div className="prose prose-neutral prose-lg max-w-none mt-4">
              {post.sections[0].paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden md:block">
            <div className="rounded-2xl bg-white shadow-sm border border-neutral-200 p-6 sticky top-24">
              <h3 className="text-sm font-semibold text-neutral-900">
                Hızlı Bilgiler
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>Merkezi konum: Şişli</li>
                <li>7/24 Güvenlik</li>
                <li>Esnek kiralama süreleri</li>
                <li>Rekabetçi fiyatlandırma</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-200 bg-white">
        <div className="container px-4 py-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} MyBlog. Tüm hakları saklıdır.
        </div>
      </footer>
    </main>
  );
}
