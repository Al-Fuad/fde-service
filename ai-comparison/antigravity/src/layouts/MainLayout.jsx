import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Main layout wrapper containing Navbar, main page content, and Footer
 */
export default function MainLayout({ children, onOpenConsultation }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0d14] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenConsultation={onOpenConsultation} />
      <main className="flex-1">
        {children}
      </main>
      <Footer onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
