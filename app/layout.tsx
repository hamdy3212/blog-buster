import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ToastProvider } from "@/context/ToastContext";
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
  metadataBase: new URL('https://blogbuster.com'), // Update with your domain
  title: {
    default: "Programmatic SEO Pages at Scale | Generate Thousands of SEO-Optimized Pages",
    template: "%s | Blog Buster"
  },
  description: "Create one template, add your data, and generate thousands of SEO pages automatically. Capture long-tail traffic and inbound leads at scale with programmatic SEO.",
  keywords: ["programmatic SEO", "SEO pages", "long-tail traffic", "SEO automation", "lead generation", "content marketing", "SEO tool", "page generator"],
  authors: [{ name: "Blog Buster", url: "https://blogbuster.com" }],
  creator: "Blog Buster",
  publisher: "Blog Buster",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Attract Long-Tail Traffic with SEO Pages at Scale",
    description: "Generate thousands of SEO-optimized pages automatically to capture inbound leads.",
    url: "https://blogbuster.com",
    siteName: "Blog Buster",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog Buster - Programmatic SEO at Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programmatic SEO Pages at Scale",
    description: "Create one template, generate thousands of SEO pages automatically.",
    creator: "@blogbuster",
    images: ["/images/og-image.png"],
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
  alternates: {
    canonical: "https://blogbuster.com",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Blog Buster",
    "applicationCategory": "BusinessApplication",
    "description": "Create one template, add your data, and generate thousands of SEO pages automatically. Capture long-tail traffic and inbound leads at scale.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#5048E5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
