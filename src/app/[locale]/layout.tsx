// app/layout.tsx (veya app/[locale]/layout.tsx)
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Changa, Montserrat, Poppins } from "next/font/google";
import MainLayout from "@/components/layout/MainLayout";
import FloatingButtons from "@/components/FloatingButtonts";
import Script from "next/script";

const changa = Changa({ weight: "700", subsets: ["arabic"] });
const tajwal = Poppins({ weight: "300", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

// .env dosyanızda: NEXT_PUBLIC_GA_ADS_ID=AW-17431112444
const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID || "AW-17431112444";

export default async function RootLayout({ children, params }: any) {
  const awaitedParams = await params;
  const locale = awaitedParams?.locale ?? "tr";
  const isArabic = locale === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <head>
        <Script
          id="ga-ads-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // İlk sayfa görüntüleme
            gtag('config', '${GA_ADS_ID}');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ECQS8XFETQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ECQS8XFETQ');
        `}
        </Script>
      </head>

      <body className={`font-tajawal ${tajwal.className}`}>
        <NextIntlClientProvider>
          <MainLayout params={awaitedParams}>{children}</MainLayout>
        </NextIntlClientProvider>
        <FloatingButtons />
      </body>
    </html>
  );
}
