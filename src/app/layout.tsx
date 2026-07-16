import type { Metadata } from "next";
import "./globals.css";
import { ThreeBackground } from "./components/ThreeBackground";
import { FloatingWhatsapp } from "./components/FloatingWhatsapp";
import { TechCursor } from "./components/TechCursor";
import { ClientLayout } from "./components/ClientLayout";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tablerosindustriales.pe'),
  title: {
    default: "Los Mejores Tableros Industriales y Automatización | A.I. Tableros Industriales S.A.C.",
    template: "%s | A.I. Tableros Industriales S.A.C."
  },
  description: "Diseño, fabricación e instalación de los mejores tableros industriales de distribución, control y fuerza. Certificación IEC, componentes de marcas líderes y soporte especializado en Lima, Perú.",
  keywords: "mejores tableros industriales, tableros electricos industriales, fabricacion de tableros electricos, diseño de tableros electricos, armado de tableros electricos, instalacion de tableros electricos, mantenimiento de tableros electricos, tableros de distribucion, tableros de fuerza, tableros de control, tableros de automatizacion, tableros de arranque de motores, tableros de bombeo, presion constante, transferencias automaticas, ccm, centro de control de motores, bancos de condensadores, filtros de armonicos, tableros autosoportados, automatizacion industrial, programacion de plc, integracion hmi, sistemas scada, variadores de frecuencia, arrancadores suaves, interruptores termomagneticos, interruptores de caja moldeada, mccb, interruptores abiertos, acb, contactores, reles de sobrecarga, guardamotores, llaves termicas, celdas de media tension, supresores de transitorios, dps, schneider electric, siemens, abb, ls electric, chint electric, hager, mennekes, steck, indeco, ingenieria electrica peru, tableros electricos lima, cercado de lima, contratistas electricos peru, eplan",
  authors: [{ name: "A.I. Tableros Industriales S.A.C." }],
  openGraph: {
    title: "Los Mejores Tableros Industriales y Automatización | A.I. Tableros Industriales S.A.C.",
    description: "Diseño, fabricación y mantenimiento de tableros eléctricos industriales y de automatización con certificación IEC en Perú.",
    type: "website",
    locale: "es_PE",
    url: "https://tablerosindustriales.pe",
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
        
        {/* Marcado de Datos Estructurados JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "A.I. Tableros Industriales S.A.C.",
              "alternateName": "Automatización Industrial",
              "image": "https://tablerosindustriales.pe/icon.svg",
              "url": "https://tablerosindustriales.pe",
              "telephone": "+51973380801",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "JR. PACHITEA 290",
                "addressLocality": "Cercado de Lima",
                "addressRegion": "Lima",
                "postalCode": "15001",
                "addressCountry": "PE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -12.052674,
                "longitude": -77.034509
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://wa.me/51979798186"
              ],
              "description": "Fabricación y diseño de los mejores tableros industriales de distribución, control y automatización para el sector industrial y comercial peruano."
            })
          }}
        />

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


