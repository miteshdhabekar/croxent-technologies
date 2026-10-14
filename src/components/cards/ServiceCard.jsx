import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card card-hover group flex h-full flex-col p-6"
      aria-label={`${service.title} - learn more`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-soft text-navy">
        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}
