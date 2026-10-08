import { QuoteIcon } from '../utils/icons'

export default function TestimonialCard({ quote, name, role }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-elevated/40 p-6 sm:p-8">
      <QuoteIcon />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-border-subtle pt-6">
        <p className="font-semibold text-text-primary">{name}</p>
        <p className="mt-0.5 text-sm text-text-muted">{role}</p>
      </figcaption>
    </figure>
  )
}
