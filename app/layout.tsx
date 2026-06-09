import "@/styles/globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const siteUrl = "https://carlosmartoz.com";

const title = "Carlos Martínez - Frontend Engineer";
const description =
  "Frontend developer specialized in React, Next.js and TypeScript, building efficient and scalable web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  creator: "Carlos Martínez",
  authors: [{ name: "Carlos Martínez", url: siteUrl }],
  keywords: [
    "Carlos Martínez",
    "Portfolio",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Carlos Martínez",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Carlos Martínez",
  url: siteUrl,
  jobTitle: "Frontend Engineer",
  email: "mailto:carlosmrtzo@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/carlosmartoz/",
    "https://github.com/carlosmartoz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased min-h-svh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
