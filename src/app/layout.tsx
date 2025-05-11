"/app/layout.tsx";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Using Montserrat as specified in tailwind.config
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "AIUX STUDIO - Lujo y Modernidad en Software e IA",
  description: "AIUX STUDIO: Desarrollo de software a medida e implementación de soluciones de Inteligencia Artificial para pymes y grandes cuentas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full`}>
      <body className="font-sans bg-aiux-black text-aiux-cream flex flex-col min-h-screen pt-20">
        {/* pt-20 (5rem) to offset fixed navbar height (py-6 is approx 1.5rem padding top/bottom, plus text height) */}
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

