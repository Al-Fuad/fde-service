import React from 'react';
import { Layers, Server, Cloud, Cpu, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/helpers';

const iconMap = {
  Layers: Layers,
  Server: Server,
  Cloud: Cloud,
  Cpu: Cpu,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
};

/**
 * ServiceCard displaying capabilities, icon badge, and value proposition
 */
export default function ServiceCard({
  service,
  onSelect,
  className = '',
}) {
  const IconComponent = iconMap[service.icon] || Layers;

  return (
    <div
      className={cn(
        'glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden',
        className
      )}
    >
      {/* Decorative top subtle glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top Header: Icon + Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
            {service.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Capabilities list */}
        <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Key Capabilities
          </p>
          <ul className="space-y-2">
            {service.capabilities.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Highlight */}
      <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <p className="text-xs font-mono text-indigo-300/90 italic">
          "{service.highlight}"
        </p>
      </div>
    </div>
  );
}
