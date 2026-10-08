import { brand, footer } from '../data/site'
import Container from './Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-surface py-12 md:py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold text-text-primary">{brand.name}</p>
            <p className="mt-2 max-w-xs text-sm text-text-secondary">
              Full-stack development for teams who care about craft, clarity, and shipping.
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block text-sm text-accent transition-colors hover:text-accent-hover"
            >
              {brand.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            <nav aria-label="Footer">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Navigate</p>
              <ul className="mt-3 space-y-2">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Social">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Connect</p>
              <ul className="mt-3 space-y-2">
                {footer.social.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-10 border-t border-border-subtle pt-8 text-center text-xs text-text-muted md:text-left">
          © {year} {brand.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
