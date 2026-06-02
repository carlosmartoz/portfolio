import "@/styles/globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const siteUrl = "https://carlosmartoz.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carlos Martínez - Portfolio",
  description: "Frontend developer portfolio of Carlos Martínez.",
  creator: "Carlos Martínez",
  authors: [{ name: "Carlos Martínez", url: siteUrl }],
  keywords: ["Carlos Martínez", "Portfolio", "Frontend Developer"],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Carlos Martínez",
    title: "Carlos Martínez - Portfolio",
    description: "Frontend developer portfolio of Carlos Martínez.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body className="font-sans antialiased min-h-svh">
        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
