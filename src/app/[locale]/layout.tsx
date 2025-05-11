import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Changa, Montserrat, Tajawal } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";

const changa = Changa({
  weight: "700",
  subsets: ["arabic"],
});
const tajwal = Tajawal({ weight: "300", subsets: ["arabic", "latin"] }); // Light for both Arabic & English

const montserrat = Montserrat({ weight: "700", subsets: ["latin"] }); // Bold for English

export default async function RootLayout({ children, params }: any) {
  const awaitedParams = await params;

  const locale = awaitedParams.locale;

  const isArabic = locale === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className={`font-tajawal ${tajwal.className} `}>
        <NextIntlClientProvider>
          <MainLayout params={awaitedParams}>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
