import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digitup | Consultoría TI y Automatización de Procesos",
  description:
    "Consultoría TI en Antofagasta y todo Chile. Automatización de procesos, soporte TI, reportabilidad, soluciones cloud y desarrollo a medida para empresas.",
  keywords: [
    "consultoría TI Antofagasta",
    "soporte TI Antofagasta",
    "automatización de procesos Antofagasta",
    "consultoría TI Chile",
    "soluciones cloud Chile",
    "reportabilidad y analítica",
    "transformación digital empresas",
    "desarrollo de soluciones a medida",
  ],
  openGraph: {
    title: "Digitup | Consultoría TI y Automatización de Procesos",
    description:
      "Consultoría TI en Antofagasta y todo Chile. Automatización de procesos, soporte TI, reportabilidad, soluciones cloud y desarrollo a medida para empresas.",
    url: "https://digitup.cl",
    siteName: "Digitup",
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://digitup.cl",
  },
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
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}