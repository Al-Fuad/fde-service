const iconClass = 'h-6 w-6 shrink-0'

export function ServiceIcon({ name, className = iconClass }) {
  const icons = {
    layout: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    server: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="14" width="20" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="7" r="1" fill="currentColor" />
        <circle cx="6" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    layers: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cloud: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 18h11a4 4 0 000-8 5.5 5.5 0 00-10.9 1.2A3.5 3.5 0 007 18z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    compass: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 9.5L10 14l4.5-4.5z" fill="currentColor" />
        <path d="M9.5 14.5L14 10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    shield: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  }

  return icons[name] ?? icons.layers
}

export function QuoteIcon({ className = 'h-8 w-8 text-accent/40' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M10 8H6v12h6v-8H8c0-2.2 1.8-4 4-4V8zm14 0h-4v12h6v-8h-4c0-2.2 1.8-4 4-4V8z" />
    </svg>
  )
}
