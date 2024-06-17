// Styles
import "@/styles/globals.css";

// Next
import type { Metadata } from "next";

// Context
import ThemeProvider from "@/context/context";

// Fonts
import { Fira_Code, Inter } from "next/font/google";

// Analytics
import { Analytics } from "@vercel/analytics/react";

// Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next";

// Inter
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

// FiraCode
const firaCode = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
});

// Metadata
export const metadata: Metadata = {
  generator: "Next.js",
  category: "portfolio",
  title: "Carlos Martínez",
  creator: "Carlos Martínez",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      "max-snippet": -1,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://carlosmartoz.com/"),
  keywords: ["Portafolio", "Portfolio", "Carlos Martínez"],
  authors: [{ name: "Carlos", url: "https://carlosmartoz.com/" }],
  icons: {
    shortcut: {
      sizes: "32x32",
      type: "image/x-icon",
      url: "/icons/favicon.ico",
    },
    icon: [
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
    ],
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
  },
  description:
    "Front-End Developer passionate about creating web pages with unique style.",
  openGraph: {
    type: "website",
    title: "Carlos Martínez",
    siteName: "Carlos Martínez",
    url: "https://carlosmartoz.com/",
    images: "/images/opengraph-image.png",
    description:
      "Front-End Developer passionate about creating web pages with unique style.",
  },
  twitter: {
    title: "Carlos Martínez",
    creator: "@carlosamartoz",
    card: "summary_large_image",
    images: "/images/twitter-image.png",
    description:
      "Front-End Developer passionate about creating web pages with unique style.",
  },
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html className={`html ${inter.variable} ${firaCode.variable}`}>
        <body className="body">
          <ThemeProvider>{children}</ThemeProvider>

          <Analytics />

          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
