import { useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { brand } from '../data/site'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              align="left"
              eyebrow="Contact"
              title="Let's talk about your next build"
              description="Share a bit about your project and I'll follow up with questions, availability, and a straightforward proposal."
              className="mb-8 md:mb-10"
            />
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-accent" aria-hidden="true">
                  ✓
                </span>
                Free 30-minute discovery call for qualified projects
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-accent" aria-hidden="true">
                  ✓
                </span>
                Fixed-scope or monthly retainer engagement models
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-accent" aria-hidden="true">
                  ✓
                </span>
                Remote-friendly, overlapping hours with US & EU teams
              </li>
            </ul>
            <p className="mt-8 text-sm text-text-muted">
              Prefer email?{' '}
              <a
                href={`mailto:${brand.email}`}
                className="text-accent underline-offset-2 hover:underline"
              >
                {brand.email}
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface-elevated/50 p-6 sm:p-8">
            {submitted ? (
              <div
                className="flex min-h-[280px] flex-col items-center justify-center text-center"
                role="status"
              >
                <p className="text-lg font-semibold text-text-primary">Thanks for reaching out!</p>
                <p className="mt-2 max-w-sm text-sm text-text-secondary">
                  This demo form doesn't send email yet — wire it to your backend or a service like
                  Formspree. For now, email me directly at {brand.email}.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent/50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent/50 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1.5 w-full resize-y rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent/50 focus:outline-none"
                    placeholder="Timeline, scope, and what success looks like…"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
