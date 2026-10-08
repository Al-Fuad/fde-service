import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import TechBadge from '../components/TechBadge';
import { techStackCategories } from '../data/techStack';
import { Layers, Server, Database, Cloud } from 'lucide-react';

const categoryIcons = {
  'Frontend & UI': Layers,
  'Backend & APIs': Server,
  'Databases & Storage': Database,
  'Cloud & Infrastructure': Cloud,
};

/**
 * TechStackSection displaying full-stack technologies categorized by domain
 */
export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories =
    activeCategory === 'All'
      ? techStackCategories
      : techStackCategories.filter((cat) => cat.name === activeCategory);

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 bg-[#080b12] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Battle-Tested Stack"
          title={
            <span>
              Engineered with Modern, <br className="hidden sm:block" />
              <span className="text-gradient-brand">High-Performance Technologies</span>
            </span>
          }
          subtitle="Strictly typed, production-proven tools chosen for developer velocity, long-term stability, and low maintenance overhead."
          align="center"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {techStackCategories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Layers;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.name
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.name] || Layers;
            return (
              <div
                key={category.name}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <IconComponent className="w-5 h-5" />
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      tag={skill.tag}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Quality Philosophy banner */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            100% Strict Type Safety
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Zero-Downtime Deployments
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Automated CI/CD Test Pipelines
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            Comprehensive Architectural Docs
          </span>
        </div>

      </div>
    </section>
  );
}
