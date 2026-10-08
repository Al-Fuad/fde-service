import Button from '../components/Button'
import Container from '../components/Container'
import { hero } from '../data/site'

function renderTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) {
    return title
  }

  const [before, after] = title.split(highlight)
  return (
    <>
      {before}
      <span className="text-gradient italic">{highlight}</span>
      {after}
    </>
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-pattern mask-[linear-gradient(to_bottom,black,transparent)] opacity-40" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up mb-4 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up animation-delay-100 font-display text-4xl leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            {renderTitle(hero.title, hero.highlight)}
          </h1>

          <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {hero.description}
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-6 border-y border-border-subtle py-10 sm:grid-cols-3 sm:gap-8">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="font-display text-3xl text-text-primary md:text-4xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
