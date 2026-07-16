import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';
import { B2BQuoteForm } from '../components/B2BQuoteForm';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: "Cotizar los Mejores Tableros Industriales | Contacto Directo",
  description: "Solicita una cotización rápida de los mejores tableros industriales y de automatización para tu obra en Lima y a todo el Perú. Asesoría técnica especializada.",
};

export default function ContactoPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-20">
        <Contact />
        <B2BQuoteForm />
      </main>
      <Footer />
    </div>
  );
}
