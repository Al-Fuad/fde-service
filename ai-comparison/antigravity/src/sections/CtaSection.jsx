import React from 'react';
import { ArrowRight, Sparkles, Calendar, Mail, CheckCircle, Shield } from 'lucide-react';
import Button from '../components/Button';

/**
 * CtaSection driving conversions for discovery consultations
 */
export default function CtaSection({ onOpenConsultation }) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#111728] to-[#0d121f] border border-indigo-500/30 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-black/80 text-center">
          
          {/* Subtle grid accent inside */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Your Roadmap Into Reality</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
            Ready to Engineer a Fast, Resilient, and{' '}
            <span className="text-gradient-brand">Scalable Product?</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing time to tech debt and delayed releases. Partner with a dedicated senior Full-Stack Engineer who ships clean, tested code that powers your business growth.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenConsultation}
              leftIcon={<Calendar className="w-4 h-4" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-base px-8 py-4 shadow-xl shadow-indigo-500/30"
            >
              Book 30-Min Discovery Call
            </Button>

            <a
              href="mailto:engineering@nexus-fde.dev?subject=Full-Stack%20Development%20Inquiry"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 text-base font-medium transition-all w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>engineering@nexus-fde.dev</span>
            </a>
          </div>

          {/* Trust Guarantees Checklist */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Free 30-min Technical Scope Review</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Full Proposal & Architecture within 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>No-obligation NDA Available</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
