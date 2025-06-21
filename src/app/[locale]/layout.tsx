import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Changa, Montserrat, Poppins } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import FloatingButtons from "@/components/FloatingButtonts";

const changa = Changa({
  weight: "700",
  subsets: ["arabic"],
});
const tajwal = Poppins({ weight: "300", subsets: ["latin"] }); // Light for both Arabic & English

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
