import React from 'react';
import SectionHeading from '../components/SectionHeading';
import PricingCard from '../components/PricingCard';
import { pricingTiers } from '../data/pricing';
import { ShieldCheck, HelpCircle } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

/**
 * PricingSection displaying engagement models
 */
export default function PricingSection({ onOpenConsultation }) {
  const handleSelectTier = (tier) => {
    if (onOpenConsultation) {
      onOpenConsultation({ tierName: tier.name });
    }
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#080b12] border-t border-white/[0.05]">
      {/* Background glow behind popular card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Transparent Engagement Models"
          title={
            <span>
              Simple, Predictable <br className="hidden sm:block" />
              <span className="text-gradient-brand">Pricing & Sprint Options</span>
            </span>
          }
          subtitle="Clear deliverables with zero hidden surprise fees. Choose sprint-based velocity, a fixed turnkey product build, or ongoing fractional technical advisory."
          align="center"
        />

        {/* Pricing Cards Grid (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              onSelectTier={handleSelectTier}
            />
          ))}
        </div>

        {/* Trust FAQ Link */}
        <div className="mt-14 text-center text-xs sm:text-sm text-slate-400">
          <p className="flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span>Have specific enterprise procurement requirements or custom scopes?</span>
            <button
              onClick={() => onOpenConsultation && onOpenConsultation({ tierName: 'Enterprise Custom Scope' })}
              className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4 cursor-pointer"
            >
              Request Custom Proposal
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
