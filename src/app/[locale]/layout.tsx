"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css"; // Adjusted path for [locale] structure
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from 'next-intl';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// Metadata can remain here, or be moved to page.tsx if it needs to be dynamic per locale
// export const metadata: Metadata = {
//   title: "AIUX STUDIO - Lujo y Modernidad en Software e IA",
//   description: "AIUX STUDIO: Desarrollo de software a medida e implementación de soluciones de Inteligencia Artificial para pymes y grandes cuentas.",
// };

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} h-full`}>
      <body className="font-sans bg-aiux-black text-aiux-cream flex flex-col min-h-screen pt-20">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

