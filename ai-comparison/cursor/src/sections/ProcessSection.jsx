import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/site'

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-border-subtle bg-surface-elevated/30 py-16 md:py-24"
      aria-labelledby="process-heading"
    >
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="Process"
          title="A clear path from kickoff to launch"
          description="Structured enough to reduce risk, flexible enough to adapt when you learn from users."
        />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-colors hover:border-accent/20"
            >
              <span className="text-xs font-bold tracking-widest text-accent">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
              {index < processSteps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
