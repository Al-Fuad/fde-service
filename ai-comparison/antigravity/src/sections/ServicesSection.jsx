import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import Button from '../components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * ServicesSection presenting Full-Stack Development offerings
 */
export default function ServicesSection({ onOpenConsultation }) {
  const handleSelectService = (service) => {
    if (onOpenConsultation) {
      onOpenConsultation({ serviceTitle: service.title });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Specialized Engineering"
          title={
            <span>
              Comprehensive Full-Stack <br className="hidden sm:block" />
              <span className="text-gradient-brand">Capabilities & Services</span>
            </span>
          }
          subtitle="From zero-to-one architectural design to high-load performance optimization and cloud DevOps automation. Every deliverable is engineered for production longevity."
          align="center"
        />

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={handleSelectService}
            />
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-card border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-500/5">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Need a custom architecture or technical audit?</span>
            </h4>
            <p className="text-sm text-slate-400">
              Get an actionable technical review of your existing code, database, and infrastructure.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => onOpenConsultation && onOpenConsultation({ serviceTitle: 'Custom Architecture & Audit' })}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 w-full sm:w-auto"
          >
            Request Technical Audit
          </Button>
        </div>

      </div>
    </section>
  );
}
