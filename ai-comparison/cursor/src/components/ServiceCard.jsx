import { ServiceIcon } from '../utils/icons'

export default function ServiceCard({ title, description, icon }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border-subtle bg-surface-elevated/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface-elevated hover:shadow-xl hover:shadow-sky-950/40 sm:p-7">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
        <ServiceIcon name={icon} />
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
    </article>
  )
}
