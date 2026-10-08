const variants = {
  primary:
    'bg-accent text-surface hover:bg-accent-hover shadow-lg shadow-sky-500/20 border border-sky-400/30',
  secondary:
    'bg-surface-muted text-text-primary border border-border hover:border-accent/50 hover:bg-surface-elevated',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm font-medium',
  lg: 'px-6 py-3 text-base font-medium',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
