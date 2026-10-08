import React from 'react';
import { Compass, GitPullRequest, ShieldCheck, Rocket, Check } from 'lucide-react';
import { cn } from '../utils/helpers';

const iconMap = {
  Compass: Compass,
  GitPullRequest: GitPullRequest,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
};

/**
 * Reusable ProcessStepCard for engineering sprint stages
 */
export default function ProcessStepCard({
  item,
  isLast = false,
  className = '',
}) {
  const IconComponent = iconMap[item.icon] || Compass;

  return (
    <div className={cn('relative flex flex-col', className)}>
      <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col h-full border border-slate-800/80 group">
        {/* Step number badge & duration */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-2xl font-black text-indigo-400 group-hover:text-indigo-300 transition-colors">
              {item.step}
            </span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <IconComponent className="w-4 h-4" />
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
            {item.duration}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Deliverables checklist */}
        <div className="mt-auto pt-4 border-t border-slate-800/70">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Sprint Deliverables
          </p>
          <ul className="space-y-1.5">
            {item.deliverables.map((deliv, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{deliv}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
