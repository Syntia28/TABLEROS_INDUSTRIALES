import type { Metadata } from "next";
import "./globals.css";
import { ThreeBackground } from "./components/ThreeBackground";
import { FloatingWhatsapp } from "./components/FloatingWhatsapp";
import { TechCursor } from "./components/TechCursor";
import { ClientLayout } from "./components/ClientLayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AUTOMATIZACION INDUSTRIAL | Tableros Eléctricos y Protecciones",
  description: "Diseño, fabricación y comercialización de tableros eléctricos a medida (distribución, control y automatización) y venta de interruptores técnicos en Lima, Perú.",
  keywords: "tableros electricos, automatizacion industrial, interruptores termicos, reles de sobrecarga, ingenieria electrica, lima peru, cercado de lima, schneider electric, siemens, abb",
  authors: [{ name: "Tableros Industriales S.A.C." }],
  openGraph: {
    title: "AUTOMATIZACION INDUSTRIAL | Soluciones Eléctricas",
    description: "Montaje, cableado y mantenimiento de tableros eléctricos industriales y de automatización.",
    type: "website",
    locale: "es_PE",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100">
        <ThreeBackground />
        <ClientLayout>
          {children}
        </ClientLayout>
        <FloatingWhatsapp />
        <TechCursor />
        
        {/* Widget de Accesibilidad UserWay */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="au1j2fECe0"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}


