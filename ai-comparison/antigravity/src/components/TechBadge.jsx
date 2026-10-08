import React from 'react';
import { cn } from '../utils/helpers';

/**
 * Reusable TechBadge component for showcasing tools and proficiencies
 */
export default function TechBadge({
  name,
  level,
  tag,
  className = '',
}) {
  const levelColors = {
    Expert: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10',
    Advanced: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
    Proficient: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  };

  return (
    <div
      className={cn(
        'group flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-800/50 transition-all duration-200',
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
        <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {tag && (
          <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/50">
            {tag}
          </span>
        )}
        <span
          className={cn(
            'text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider',
            levelColors[level] || 'text-slate-400 border-slate-700 bg-slate-800'
          )}
        >
          {level}
        </span>
      </div>
    </div>
  );
}
