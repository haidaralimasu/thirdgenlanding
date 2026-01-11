import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { StructuredData } from "./structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://thirdgen.tech'),
  title: {
    default: "ThirdGen | Next-Generation Web3 Security Platform",
    template: "%s | ThirdGen"
  },
  description: "ThirdGen provides runtime enforcement for Web3 protocols. Move beyond traditional audits with AI-powered code review, mempool monitoring, and invariant firewalls. Join the waitlist for early access.",
  keywords: [
    "Web3 Security",
    "Smart Contract Security",
    "Blockchain Security",
    "DeFi Security",
    "Runtime Enforcement",
    "Smart Contract Audit",
    "Mempool Monitoring",
    "Invariant Firewall",
    "Web3 Protection",
    "Crypto Security",
    "Flash Loan Protection",
    "Smart Contract Protection",
    "Blockchain Audit",
    "Web3 Infrastructure"
  ],
  authors: [{ name: "ThirdGen Tech" }],
  creator: "ThirdGen Tech",
  publisher: "ThirdGen Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thirdgen.tech',
    title: 'ThirdGen | Next-Generation Web3 Security Platform',
    description: 'Runtime enforcement for Web3 protocols. Prevent hacks before block finalization with AI code review, mempool monitoring, and invariant firewalls.',
    siteName: 'ThirdGen',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'ThirdGen - Next-Generation Web3 Security',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThirdGen | Next-Generation Web3 Security Platform',
    description: 'Runtime enforcement for Web3 protocols. Prevent hacks before block finalization.',
    images: ['/og-image.png'],
    creator: '@thirdgentech',
    site: '@thirdgentech',
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
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://thirdgen.tech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`font-mono antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
