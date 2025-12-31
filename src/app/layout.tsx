import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pathanx.vercel.app/"),
  title: {
    default: "Pathan X Industry | AI, Automation & Security Systems",
    template: "%s | Pathan X Industry"
  },
  description: "Pathan X Industry builds intelligent automation, AI systems, smart hardware and secure digital infrastructures for modern businesses and smart living.",
  keywords: ["AI", "Automation", "Cyber Security", "Smart Home", "IoT", "Digital Infrastructure", "Pathan X"],
  openGraph: {
    title: "Pathan X Industry",
    description: "Building the Future of Smart Living with AI, Automation, and Security.",
    url: "https://pathanx.vercel.app/",
    siteName: "Pathan X Industry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathan X Industry",
    description: "Intelligent Systems for Modern Businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pathan X Industry",
  "url": "https://pathanx.vercel.app/",
  "logo": "https://pathanx.vercel.app/logo.png", // Assuming logo path or placeholder
  "sameAs": [
    "https://www.instagram.com/pathanx_industry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
