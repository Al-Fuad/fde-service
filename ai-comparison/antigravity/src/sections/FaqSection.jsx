import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { faqsData } from '../data/faqs';
import { ChevronDown, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

/**
 * FaqSection accordion component
 */
export default function FaqSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Frequently Answered"
          title={
            <span>
              Everything You Need to Know About <br className="hidden sm:block" />
              <span className="text-gradient-brand">Working Together</span>
            </span>
          }
          subtitle="Answers to common technical, legal, and operational questions before starting an engineering engagement."
          align="center"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-card border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-indigo-400 border-indigo-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">
                Have a unique technical challenge not covered here?
              </p>
              <p className="text-xs text-slate-400">
                Let's discuss your architectural constraints directly on a discovery call.
              </p>
            </div>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenConsultation}
            className="shrink-0 w-full sm:w-auto"
          >
            Ask a Question
          </Button>
        </div>

      </div>
    </section>
  );
}
