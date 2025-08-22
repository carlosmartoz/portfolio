import "@/styles/globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Importing the Fira Code font with variable support
const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Carlos Martínez",
  creator: "carlosmartoz",
  keywords: [
    "React",
    "Next.js",
    "Portfolio",
    "Portafolio",
    "Diseño web",
    "carlosmartoz",
    "Carlos Martínez",
    "carlosmartoz.com",
    "carlosmartoz portfolio",
    "Desarrollador Front-End",
    "carlosmartoz portafolio",
    "Carlos Martínez Portafolio",
    "Carlos Martínez's Portfolio",
  ],
  referrer: "origin-when-cross-origin",
  description:
    "Portfolio de Carlos Martínez, desarrollador front-end especializado en React, Next.js. Conoce sus proyectos y experiencia profesional.",
  openGraph: {
    type: "website",
    title: "carlosmartoz",
    siteName: "carlosmartoz",
    url: "https://carlosmartoz.com/",
    images: "/images/carlosmartoz-op.png",
    description:
      "Portfolio de Carlos Martínez, desarrollador front-end especializado en React, Next.js. Conoce sus proyectos y experiencia profesional.",
  },
  twitter: {
    title: "carlosmartoz",
    creator: "@carlosmartoz",
    card: "summary_large_image",
    images: "/images/carlosmartoz-tw.png",
    description:
      "Portfolio de Carlos Martínez, desarrollador front-end especializado en React, Next.js. Conoce sus proyectos y experiencia profesional.",
  },
  metadataBase: new URL("https://carlosmartoz.com/"),
  authors: [{ name: "carlosmartoz", url: "https://carlosmartoz.com/" }],
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

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-dark scroll-smooth">
      <body className={`${firaCode.variable}`}>
        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
