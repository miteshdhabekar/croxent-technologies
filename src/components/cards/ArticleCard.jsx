import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { formatDate } from '../../utils/formatDate'

export default function ArticleCard({ article }) {
  const date = formatDate(article.date)
  return (
    <article className="card card-hover flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded bg-soft px-2 py-1 font-semibold text-slate">{article.category}</span>
        {article.isSample && (
          <span className="rounded border border-line px-2 py-1 font-semibold text-muted">Sample article</span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold leading-snug">
        <Link to={`/insights/${article.slug}`} className="hover:text-accent">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{article.excerpt}</p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        {date && <time dateTime={article.date}>{date}</time>}
        <span className="inline-flex items-center gap-1">
          <Clock size={14} aria-hidden="true" /> {article.readingTime} min read
        </span>
      </div>
      <Link
        to={`/insights/${article.slug}`}
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        aria-label={`Read article: ${article.title}`}
      >
        Read Article
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}
