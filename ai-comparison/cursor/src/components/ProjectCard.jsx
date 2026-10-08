export default function ProjectCard({ title, description, tags, gradient }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-elevated/50 transition-all duration-300 hover:border-accent/25 hover:shadow-2xl hover:shadow-sky-950/30">
      <div
        className={`relative flex h-44 items-end bg-linear-to-br ${gradient} p-6 sm:h-48`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="relative flex gap-2">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface/80 px-2 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
