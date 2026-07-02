import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Advantages } from './components/Advantages';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { B2BQuoteForm } from './components/B2BQuoteForm';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Page Content Layout */}
      <main className="flex-1">
        {/* Welcome Hero / Animated Logo */}
        <Hero />

        {/* Engineering Services */}
        <Services />

        {/* Components Catalog & Partner Brands */}
        <Products />

        {/* Value Proposition & Competitive Advantages */}
        <Advantages />

        {/* Client Slider */}
        <Clients />

        {/* Testimonials (Social Proof) */}
        <Testimonials />

        {/* Contact Info & Redirection Form */}
        <Contact />

        {/* B2B Formal Quotation Form */}
        <B2BQuoteForm />
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}

