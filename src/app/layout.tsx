// Styles
import "@/styles/globals.css";

// Next
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

// Next intl
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// Vercel
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Font
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

// Font
const firaCode = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
});

// Metadata
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

// Layout
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale
  const locale = await getLocale();

  // Messages
  const messages = await getMessages();

  // Return
  return (
    <html
      lang={locale}
      className={`min-h-svh scroll-smooth bg-dark ${inter.variable} ${firaCode.variable}`}
    >
      <body className="min-h-svh">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
