import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Programmatic SEO Pages at Scale | Generate Thousands of SEO-Optimized Pages",
  description: "Create one template, add your data, and generate thousands of SEO pages automatically. Capture long-tail traffic and inbound leads at scale with programmatic SEO.",
  keywords: ["programmatic SEO", "SEO pages", "long-tail traffic", "SEO automation", "lead generation", "content marketing"],
  authors: [{ name: "Blog Buster" }],
  openGraph: {
    title: "Attract Long-Tail Traffic with SEO Pages at Scale",
    description: "Generate thousands of SEO-optimized pages automatically to capture inbound leads.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmatic SEO Pages at Scale",
    description: "Create one template, generate thousands of SEO pages automatically.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
