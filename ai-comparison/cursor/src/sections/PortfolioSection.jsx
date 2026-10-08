import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/site'

export default function PortfolioSection() {
  return (
    <section id="work" className="py-16 md:py-24" aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Recent projects & outcomes"
          description="Representative engagements — details anonymized where required. Happy to walk through full case studies on a call."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
