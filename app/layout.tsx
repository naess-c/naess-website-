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
  title: "NAESS Nepal | National Agricultural Engineering Students' Society",
  description:
    "Official website of the National Agricultural Engineering Students' Society (NAESS), Nepal. Explore events, publications, notices, resources, and opportunities for Agricultural Engineering students.",
  keywords: [
    "NAESS",
    "naess nepal",
    "Naess",
    "naes",
    "Naess Ioe",
    "naess purwanchal campus",
    "naess nepal purwanchal campus",
    "naess ioe",
    "Naess Nepal",
    "National Agricultural Engineering Students' Society",
    "Agricultural Engineering Students' Society",
    "Agricultural Engineering Students",
    "Agricultural Engineering",
    "Agricultural Engineering Nepal",
    "NAESS Nepal",
    "Agricultural Engineering Students",
    "Purwanchal Campus",
    "Agrineer",
    "Agricultural Engineering Society",
  ],
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
</body>
<html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
  <body className="bg-white text-gray-900">
    {children}
  </body>

  <GoogleAnalytics gaId="G-5G4FRGFYN8" />
</html>
    </html>
  );
}

