import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectCategories, projectsData } from '../data/projects';
import Button from '../components/Button';
import { ArrowRight, FolderGit2 } from 'lucide-react';

/**
 * ProjectsSection showcasing client case studies with interactive category filter
 */
export default function ProjectsSection({ onOpenConsultation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handleOpenDetails = (project) => {
    if (onOpenConsultation) {
      onOpenConsultation({
        tierName: `Case Study Inquiry: ${project.title}`,
      });
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Engineering Case Studies"
          title={
            <span>
              Real Production Systems, <br className="hidden sm:block" />
              <span className="text-gradient-brand">Measurable Business Impact</span>
            </span>
          }
          subtitle="Explore recent production applications engineered from inception to launch, demonstrating speed, strict architecture, and scale."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Bottom CTA to Discuss Architecture */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Have a custom architecture or technical specification in mind?
          </p>
          <Button
            variant="outline"
            size="md"
            onClick={onOpenConsultation}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Review Your Project Architecture
          </Button>
        </div>

      </div>
    </section>
  );
}
