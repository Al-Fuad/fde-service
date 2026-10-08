import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/site'

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-border-subtle bg-surface-elevated/20 py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Trusted by product leaders"
          description="Long-term relationships matter more than one-off tickets — here's what clients say about working together."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
