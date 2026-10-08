import React from 'react';
import { trustMetrics, clientLogos } from '../data/metrics';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * TrustMetrics section highlighting production benchmarks and enterprise credibility
 */
export default function TrustMetrics() {
  return (
    <section className="relative py-12 border-y border-white/[0.06] bg-[#0c101c]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-slate-800/80">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {metric.helper}
              </span>
            </div>
          ))}
        </div>

        {/* Enterprise Client Trust Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Trusted By Tech Founders & Engineering Leaders:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
              >
                <span className="text-xs font-bold text-slate-300">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ({client.industry})
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
