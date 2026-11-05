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
import { ContentProvider } from './context/ContentContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { AdminBar } from './components/admin/AdminBar';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminDashboard } from './components/admin/AdminDashboard';

export const AppContent: React.FC = () => {
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

      {/* Floating Admin Bar when logged in */}
      <AdminBar />

      {/* Admin Login Modal (opened via #admin URL or discreet footer link or Ctrl+Shift+A) */}
      <AdminLoginModal />

      {/* Admin Customizer Dashboard Panel */}
      <AdminDashboard />

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

export const App: React.FC = () => {
  return (
    <ContentProvider>
      <AdminAuthProvider>
        <AppContent />
      </AdminAuthProvider>
    </ContentProvider>
  );
};

export default App;
