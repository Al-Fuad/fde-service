import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '../utils/helpers';

/**
 * Reusable TestimonialCard component with ratings, verified client badge, and quotes
 */
export default function TestimonialCard({
  testimonial,
  className = '',
}) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 relative group',
        className
      )}
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-mono text-slate-400 ml-2">5.0 Verified Client</span>
        </div>

        {/* Quote text */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author details */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-800/80">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-11 h-11 rounded-full object-cover border border-indigo-500/30"
          loading="lazy"
        />
        <div>
          <h4 className="text-sm font-bold text-white leading-tight">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {testimonial.role} &bull; <span className="text-indigo-400 font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
