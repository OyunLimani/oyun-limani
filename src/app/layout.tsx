import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ClientLayout from "@/components/layout/ClientLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OyunLimanı - Ücretsiz Online Oyunlar",
  description:
    "OyunLimanı - Ücretsiz online HTML5 oyunları oyna! Aksiyon, bulmaca, yarış ve daha fazlası. İndirme yok, kayıt yok!",
  keywords: "ücretsiz oyunlar, online oyunlar, html5 oyunlar, tarayıcı oyunları, oyun sitesi",
  other: {
    "google-adsense-account": "ca-pub-3290834929306937",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3290834929306937"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
