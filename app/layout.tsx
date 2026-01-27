import "@/styles/globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "v0.app",
  category: "Portfolio",
  creator: "Carlos Martínez",
  title: "Carlos Martínez - Portfolio",
  referrer: "origin-when-cross-origin",
  description: "Carlos Martínez's Portfolio.",
  openGraph: {
    type: "website",
    title: "Carlos Martínez",
    siteName: "Carlos Martínez",
    images: "/opengraph-image.png",
    url: "https://carlosmartoz.com/",
    description: "Carlos Martínez's Portfolio.",
  },
  twitter: {
    creator: "@devilsncry",
    title: "Carlos Martínez",
    card: "summary_large_image",
    images: "/twitter-image.png",
    description: "Carlos Martínez's Portfolio.",
  },
  metadataBase: new URL("https://carlosmartoz.com/"),
  authors: [
    { name: "v0.app", url: "https://v0.app/" },
    { name: "Carlos", url: "https://carlosmartoz.com/" },
  ],
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  keywords: ["Carlos Martínez Portafolio", "Carlos Martínez's Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
