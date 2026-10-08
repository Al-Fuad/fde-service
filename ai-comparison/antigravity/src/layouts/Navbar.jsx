import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { navLinks } from '../data/navigation';
import { scrollToSection } from '../utils/helpers';

/**
 * Modern Glassmorphic Navbar with mobile responsive drawer and quick consultation trigger
 */
export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = navLinks.map((link) => link.href);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0d14]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center text-indigo-400 group-hover:text-white transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
                Nexus<span className="text-indigo-400">FDE</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                Full-Stack Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'text-white bg-indigo-500/20 text-indigo-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Availability pill & Consultation Button */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Live Availability Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Sprints</span>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenConsultation}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer border-b border-slate-800/40"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 px-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for next engineering sprint</span>
            </div>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
