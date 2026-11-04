import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-sans selection:bg-secondary selection:text-on-secondary min-h-screen flex flex-col relative">
      {/* 2 very thin border lines: light green and light blue */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-[100] border border-[#93C90E]"
      />
      <div 
        aria-hidden="true" 
        className="fixed inset-[1px] pointer-events-none z-[100] border border-[#00A3E0]"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
