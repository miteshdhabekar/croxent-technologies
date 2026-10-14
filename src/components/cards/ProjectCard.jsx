import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">{project.category}</p>
      </div>
      {project.isSample && (
        <p className="mt-2 inline-block self-start rounded border border-line bg-soft px-2 py-0.5 text-xs font-semibold text-muted">
          Illustrative concept
        </p>
      )}
      <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-navy">Problem</h3>
      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{project.problem}</p>
      <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-navy">Solution overview</h3>
      <p className="mt-1 flex-1 text-[0.95rem] leading-relaxed text-muted">{project.solution}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>
      <Link
        to={project.link || '/contact'}
        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
      >
        {project.cta}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}
