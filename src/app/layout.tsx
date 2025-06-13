import "@/styles/globals.css";
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  generator: "Next.js",
  category: "Portfolio",
  title: "Carlos Martínez",
  creator: "Carlos Martínez",
  keywords: [
    "Portfolio",
    "Portafolio",
    "Carlos Martínez",
    "Carlos Martínez Portafolio",
    "Carlos Martínez's Portfolio",
  ],
  referrer: "origin-when-cross-origin",
  description: "Carlos Martínez's Portfolio.",
  openGraph: {
    type: "website",
    title: "Carlos Martínez",
    siteName: "Carlos Martínez",
    url: "https://carlosmartoz.com/",
    images: "/images/opengraph-image.png",
    description: "Carlos Martínez's Portfolio.",
  },
  twitter: {
    title: "Carlos Martínez",
    creator: "@carlosamartoz",
    card: "summary_large_image",
    images: "/images/twitter-image.png",
    description: "Carlos Martínez's Portfolio.",
  },
  metadataBase: new URL("https://carlosmartoz.com/"),
  authors: [{ name: "Carlos", url: "https://carlosmartoz.com/" }],
  icons: {
    shortcut: {
      sizes: "32x32",
      type: "image/x-icon",
      url: "/icons/favicon.ico",
    },
    apple: [
      {
        sizes: "16x16",
        type: "image/png",
        url: "/icons/apple-touch-icon-16.png",
      },
      {
        sizes: "32x32",
        type: "image/png",
        url: "/icons/apple-touch-icon-32.png",
      },
      {
        sizes: "48x48",
        type: "image/png",
        url: "/icons/apple-touch-icon-48.png",
      },
      {
        sizes: "64x64",
        type: "image/png",
        url: "/icons/apple-touch-icon-64.png",
      },
      {
        sizes: "128x128",
        type: "image/png",
        url: "/icons/apple-touch-icon-128.png",
      },
      {
        sizes: "512x512",
        type: "image/png",
        url: "/icons/apple-touch-icon-512.png",
      },
    ],
    icon: [
      {
        sizes: "128x128",
        type: "image/png",
        url: "/icons/android-icon-128.png",
      },
      {
        sizes: "512x512",
        type: "image/png",
        url: "/icons/android-icon-512.png",
      },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/icons/favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/android-icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/android-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/android-icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/android-icon-64.png", sizes: "64x64", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="bg-dark dark:bg-light min-h-svh scroll-smooth transition-all duration-[400ms] ease-in-out"
    >
      <body className={`min-h-svh ${inter.variable} ${firaCode.variable}`}>
        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
