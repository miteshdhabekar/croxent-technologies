import { useState } from 'react'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import ArticleCard from '../components/cards/ArticleCard'
import CTASection from '../components/common/CTASection'
import { articles, articleCategories } from '../data/articles'

export default function Insights() {
  useSeo({
    title: 'Insights',
    description:
      'Practical articles on software development, cloud, automation, and technology decisions for growing businesses.',
  })

  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? articles : articles.filter((a) => a.category === category)
  const hasSamples = articles.some((a) => a.isSample)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical Thinking on Technology."
        text="Articles on software, cloud, and automation to help businesses make clearer technology decisions."
      />
      <section className="section">
        <div className="container-page">
          {hasSamples && (
            <p className="mb-8 rounded-lg border border-line bg-soft p-4 text-sm text-slate" role="note">
              <strong>Sample content:</strong> these articles are placeholders for layout and are not yet published
              company insights.
            </p>
          )}

          <div role="group" aria-label="Filter articles by category" className="mb-8 flex flex-wrap gap-2">
            {articleCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  category === c
                    ? 'border-navy bg-navy text-white'
                    : 'border-line bg-white text-slate hover:border-accent hover:text-accent'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="text-muted">No articles in this category yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
              {visible.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </>
  )
}
