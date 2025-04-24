import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wow-meow.fun'),
  alternates: {
    canonical: '/games',
  },
  title: "WoW Meow - Game Development",
  description: "A game development studio providing end-to-end game creation, outsourcing, and outstaffing solutions.",
  keywords: [
    'game development',
    'indie games',
    'game studio',
    'WoW Meow',
    'video games',
    'gaming',
    'outsourcing',
    'outstaffing',
    'unity',
    'unreal engine',
    '2D games',
    '3D games',
    'mobile games',
    'PC games',
    'game developers',
    'game art',
    'game programming',
    'custom game development',
    'game outsourcing services'
  ],
  openGraph: {
    title: "WoW Meow Games",
    description: "A game development studio providing end-to-end game creation, outsourcing, and outstaffing solutions.",
    images: [
      {
        url: '/openGraphImage.png',
        width: 1200,
        height: 630,
        alt: 'WoW Meow Games Studio',
      }
    ],
    locale: 'en_US',
    type: 'website',
    siteName: 'WoW Meow',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WoW Meow Games",
    description: "A game development studio providing end-to-end game creation, outsourcing, and outstaffing solutions.",
    images: ['/twitterImage.png'],
    creator: '@wowmeowgames',
    site: '@wowmeowgames',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/16x16logo.png',
    apple: '/180x180logo.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/32x32logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/16x16logo.png',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  creator: 'WoW Meow Games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.className} antialiased`}>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
