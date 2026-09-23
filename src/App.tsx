import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { PageLoader } from './components/PageLoader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Installment } from './components/Installment';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { AnimatedSideContacts } from './components/AnimatedSideContacts';
import { Footer } from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420] selection:bg-[#F4A261] selection:text-white font-sans">
        {/* Page Loading Animation */}
        <PageLoader onFinish={() => setLoaded(true)} />

        {/* Main Content */}
        <Header />
        <main className="flex-grow">
          <Hero />
          <Products />
          <Installment />
          <About />
          <Contacts />
        </main>
        <Footer />

        {/* Animated Vertical Side Contacts (Instagram, WhatsApp, Phone) */}
        <AnimatedSideContacts />
      </div>
    </LanguageProvider>
  );
}
