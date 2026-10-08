import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonialsData } from '../data/testimonials';
import { Star } from 'lucide-react';

/**
 * TestimonialsSection presenting verified client feedback
 */
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Client Endorsements"
          title={
            <span>
              Endorsed by Technical Founders <br className="hidden sm:block" />
              <span className="text-gradient-brand">& Engineering Executives</span>
            </span>
          }
          subtitle="Real outcomes delivered for venture-backed startups and scaling technology platforms."
          align="center"
        />

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}
        </div>

        {/* Aggregate Review Badge */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-semibold text-white">5.0 / 5.0 Rating</span>
          <span className="text-slate-500">&bull;</span>
          <span className="text-slate-400">100% on-time and within-scope sprint completion</span>
        </div>

      </div>
    </section>
  );
}
