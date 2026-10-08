export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'mx-auto text-center max-w-2xl' : 'max-w-2xl text-left'

  return (
    <header className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-normal tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem] md:leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">{description}</p>
      )}
    </header>
  )
}
