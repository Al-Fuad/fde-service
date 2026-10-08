import Button from './Button'
import Container from './Container'

export default function CTASection({ title, description, buttonLabel, href, className = '' }) {
  return (
    <section className={`py-16 md:py-20 ${className}`} aria-labelledby="cta-heading">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-linear-to-br from-surface-muted via-surface-elevated to-surface px-6 py-12 text-center sm:px-10 sm:py-14 md:py-16">
          <div className="pointer-events-none absolute inset-0 hero-glow opacity-80" aria-hidden="true" />
          <div className="relative">
            <h2
              id="cta-heading"
              className="font-display text-3xl text-text-primary sm:text-4xl md:text-[2.5rem]"
            >
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {description}
            </p>
            <div className="mt-8">
              <Button href={href} size="lg">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
