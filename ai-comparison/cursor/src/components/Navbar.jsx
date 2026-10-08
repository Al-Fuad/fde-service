import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/site'
import Button from './Button'
import Container from './Container'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border-subtle bg-surface/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <Container as="nav" className="flex h-16 items-center justify-between md:h-[4.5rem]" aria-label="Main">
        <a
          href="#"
          className="group flex items-center gap-2 rounded-lg focus-visible:outline-offset-4"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent ring-1 ring-accent/30">
            F
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-text-primary">{brand.name}</span>
            <span className="text-xs text-text-muted">{brand.tagline}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
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

        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Hire me
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-primary md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 z-40 bg-surface/95 backdrop-blur-lg transition-opacity md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-4 w-full" onClick={closeMenu}>
            Hire me
          </Button>
        </Container>
      </div>
    </header>
  )
}
