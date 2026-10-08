import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/site'

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Everything you need to go from idea to production"
          description="Focused full-stack delivery — no bloated agency layers, just senior engineering aligned with your product goals."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
