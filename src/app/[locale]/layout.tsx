import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { StructuredData } from '@/components/StructuredData';
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://katameal.com'),
  title: {
    default: "Katameal - Nutritious Meals Delivered to Your Job Site",
    template: "%s | Katameal"
  },
  description: "Ready-to-eat, delicious meals delivered directly to construction and industrial job sites. Weekly and monthly meal subscription plans.",
  keywords: ["meal delivery", "construction meals", "job site catering", "worker meals", "meal subscription", "nutritious meals", "ready-to-eat meals"],
  authors: [{ name: "Katameal" }],
  creator: "Katameal",
  publisher: "Katameal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: "https://katameal.com",
    siteName: "Katameal",
    title: "Katameal - Nutritious Meals Delivered to Your Job Site",
    description: "Ready-to-eat, delicious meals delivered directly to construction and industrial job sites.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katameal - Meal Delivery Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katameal - Nutritious Meals Delivered to Your Job Site",
    description: "Ready-to-eat, delicious meals delivered directly to your workplace.",
    images: ["/og-image.jpg"],
    creator: "@katameal",
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
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <StructuredData />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

