import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/helpers';

/**
 * Reusable ProjectCard displaying architecture metrics, tech badges, and case study details
 */
export default function ProjectCard({
  project,
  onOpenDetails,
  className = '',
}) {
  return (
    <div
      className={cn(
        'glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden border border-slate-800/80',
        className
      )}
    >
      {/* Subtle background ambient gradient */}
      <div
        className={cn(
          'absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none',
          project.gradient
        )}
      />

      <div>
        {/* Category & Client Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            {project.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Client: <span className="text-slate-200">{project.client}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors flex items-center justify-between gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center px-1">
              <div className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills & Action */}
      <div className="space-y-4 pt-4 border-t border-slate-800/70">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 text-xs">
          <button
            onClick={() => onOpenDetails && onOpenDetails(project)}
            className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 group/btn cursor-pointer"
          >
            <span>Read Architecture Case Study</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
