import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naessnepal.org"),

  title: {
    default: "NAESS Nepal | National Agricultural Engineering Students' Society",
    template: "%s | NAESS Nepal",
  },

  description:
    "Official website of the National Agricultural Engineering Students' Society (NAESS), Nepal. Explore events, publications, notices, resources, training programs, and opportunities for Agricultural Engineering students.",

  keywords: [
    "NAESS",
    "NAESS Nepal",
    "National Agricultural Engineering Students' Society",
    "Agricultural Engineering Nepal",
    "Agricultural Engineering Students",
    "Purwanchal Campus",
    "IOE Purwanchal Campus",
    "Agrineer",
    "Agricultural Engineering Society",
    "Agricultural Engineering Education Nepal",
    "Agricultural Mechanization Nepal",
    "Agricultural Technology Nepal",
  ],

  authors: [
    {
      name: "National Agricultural Engineering Students' Society",
    },
  ],

  creator: "NAESS Nepal",
  publisher: "NAESS Nepal",

  alternates: {
    canonical: "https://naessnepal.org",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "NAESS Nepal | National Agricultural Engineering Students' Society",
    description:
      "Official website of the National Agricultural Engineering Students' Society (NAESS), Nepal.",
    url: "https://naessnepal.org",
    siteName: "NAESS Nepal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NAESS Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NAESS Nepal | National Agricultural Engineering Students' Society",
    description:
      "Official website of the National Agricultural Engineering Students' Society (NAESS), Nepal.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-white text-gray-900">
        {children}
        <GoogleAnalytics gaId="G-5G4FRGFYN8" />
      </body>
    </html>
  );
}