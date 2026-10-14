import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function IndustryCard({ industry }) {
  const Icon = industry.icon
  return (
    <Link
      to={`/industries#${industry.slug}`}
      className="card card-hover group flex h-full flex-col p-6"
    >
      <Icon size={26} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-bold">{industry.title}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{industry.short}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Explore {industry.title}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}
