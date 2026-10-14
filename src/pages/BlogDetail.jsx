import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import NotFound from './NotFound'
import CTASection from '../components/common/CTASection'
import { articles, getArticleBySlug } from '../data/articles'
import { formatDate } from '../utils/formatDate'

function ArticleBody({ article }) {
  return article.body.map((block, i) => {
    if (block.type === 'h') {
      return <h2 key={i} className="mb-3 mt-10 text-2xl font-extrabold">{block.text}</h2>
    }
    if (block.type === 'ul') {
      return (
        <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-lg text-ink marker:text-accent">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )
    }
    return <p key={i} className="my-4 text-lg leading-relaxed text-ink">{block.text}</p>
  })
}

function Article({ article }) {
  useSeo({ title: article.title, description: article.excerpt })
  const date = formatDate(article.date)
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <article className="section">
        <div className="container-page max-w-3xl">
          <Link to="/insights" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            <ArrowLeft size={16} aria-hidden="true" /> All insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded bg-soft px-2 py-1 font-semibold text-slate">{article.category}</span>
            {article.isSample && (
              <span className="rounded border border-line px-2 py-1 font-semibold text-muted">Sample article</span>
            )}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{article.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted">
            {date && <time dateTime={article.date}>{date}</time>}
            <span className="inline-flex items-center gap-1">
              <Clock size={14} aria-hidden="true" /> {article.readingTime} min read
            </span>
          </div>
          <div className="mt-6 border-t border-line pt-2">
            <ArticleBody article={article} />
          </div>
          {article.isSample && (
            <p className="mt-10 rounded-lg border border-line bg-soft p-4 text-sm text-slate">
              This is sample content used to demonstrate the article layout. It is not an official Croxent
              Technologies publication.
            </p>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="section border-t border-line bg-soft" aria-labelledby="related">
          <div className="container-page">
            <h2 id="related" className="text-2xl font-extrabold">More insights</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((a) => (
                <li key={a.slug} className="card card-hover p-5">
                  <Link to={`/insights/${a.slug}`} className="font-bold text-navy hover:text-accent">{a.title}</Link>
                  <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CTASection />
    </>
  )
}

export default function BlogDetail() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  return article ? <Article article={article} /> : <NotFound />
}
