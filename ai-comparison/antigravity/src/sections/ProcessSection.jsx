import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProcessStepCard from '../components/ProcessStepCard';
import { processSteps } from '../data/process';
import Button from '../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * ProcessSection highlighting the 4-phase agile engineering methodology
 */
export default function ProcessSection({ onOpenConsultation }) {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#080b12] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Engineering Methodology"
          title={
            <span>
              Predictable, Transparent, and <br className="hidden sm:block" />
              <span className="text-gradient-brand">High-Velocity Delivery</span>
            </span>
          }
          subtitle="No ambiguity, no bloated agency overhead. A disciplined 4-phase engineering sprint lifecycle designed to de-risk delivery and ship on schedule."
          align="center"
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <ProcessStepCard
              key={step.step}
              item={step}
              isLast={idx === processSteps.length - 1}
            />
          ))}
        </div>

        {/* Sprint Guarantees Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Sprint Quality & Communication Guarantees
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Async Daily Standup Notes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Continuous Staging Deployments
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Direct Senior Engineer Access
              </span>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onOpenConsultation}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 w-full md:w-auto"
          >
            Schedule Discovery Call
          </Button>
        </div>

      </div>
    </section>
  );
}
