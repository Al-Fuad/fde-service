import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';
import { cn } from '../utils/helpers';

/**
 * Reusable PricingCard component
 */
export default function PricingCard({
  tier,
  onSelectTier,
  className = '',
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300',
        tier.isPopular
          ? 'glass-card border-2 border-indigo-500/60 shadow-xl shadow-indigo-500/10 lg:-translate-y-2'
          : 'glass-card border border-slate-800/80 hover:border-slate-700/80',
        className
      )}
    >
      {/* Popular badge */}
      {tier.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-indigo-500/30">
          Most Popular
        </div>
      )}

      <div>
        {/* Tier Name & Badge */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">
            {tier.name}
          </h3>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
            {tier.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          {tier.description}
        </p>

        {/* Price Tag */}
        <div className="mb-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
              {tier.price}
            </span>
          </div>
          <span className="text-xs font-mono text-indigo-400">
            {tier.frequency}
          </span>
        </div>

        {/* Features list */}
        <div className="space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            What's Included:
          </p>
          <ul className="space-y-2.5">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant={tier.isPopular ? 'primary' : 'secondary'}
        size="md"
        className="w-full"
        onClick={() => onSelectTier && onSelectTier(tier)}
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        {tier.ctaText}
      </Button>
    </div>
  );
}
