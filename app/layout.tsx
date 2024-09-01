import "./globals.css";

import Header from "./_components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hijama Massage in Dalarna | Leading Hijama & Cupping Therapy Services",
  description: "Discover the best Hijama massage and cupping therapy services in Dalarna. Our expert therapists offer traditional and modern techniques for holistic health and wellness. Visit us for rejuvenating massage and hijama treatments tailored to your needs.",
  keywords: "Hijama, Hijama massage, Cupping therapy, Massage Dalarna, Traditional massage, Wellness Dalarna, Massage therapy, Holistic health, Dalarna massage services, Hijama cupping Dalarna",
  authors: {
    name: "Mohamed Khalif",
    
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Hijama Massage in Dalarna | Leading Hijama & Cupping Therapy Services",
    description: "Expert Hijama massage and cupping therapy in Dalarna for holistic health and wellness. Experience traditional and modern techniques tailored to your needs.",
    url: "https://www.yourwebsite.com",
    type: "website",
    locale: "en_US",
    siteName: "Hijama Massage Dalarna",
    images: [
      {
        url: "https://www.yourwebsite.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hijama Massage Dalarna - Cupping Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "Hijama Massage in Dalarna | Leading Hijama & Cupping Therapy Services",
    description: "Expert Hijama massage and cupping therapy in Dalarna for holistic health and wellness. Experience traditional and modern techniques tailored to your needs.",
    images: "https://www.yourwebsite.com/images/twitter-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
