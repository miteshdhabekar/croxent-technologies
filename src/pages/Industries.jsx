import { Link } from 'react-router-dom'
import { Info } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import { industries } from '../data/industries'

function List({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-navy">{title}</h3>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[0.95rem] text-muted">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  )
}

export default function Industries() {
  useSeo({
    title: 'Industries',
    description:
      'See how technology can address business challenges in financial services, healthcare, retail, education, manufacturing and logistics, and growing businesses.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology for Different Business Needs."
        text="Every sector has its own challenges. These pages describe how technology can help, based on common needs rather than past client work."
      >
        <nav aria-label="Industries on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <li key={i.slug}>
                <a href={`#${i.slug}`} className="chip transition-colors hover:border-accent hover:text-accent">
                  {i.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="container-page divide-y divide-line">
        {industries.map((ind) => {
          const Icon = ind.icon
          return (
            <section key={ind.slug} id={ind.slug} className="scroll-mt-24 py-12 sm:py-16" aria-labelledby={`${ind.slug}-title`}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft text-navy">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h2 id={`${ind.slug}-title`} className="text-2xl font-extrabold sm:text-3xl">{ind.title}</h2>
              </div>
              <p className="mt-4 max-w-3xl text-lg text-muted">{ind.short}</p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <List title="Common challenges" items={ind.challenges} />
                <List title="Potential solutions" items={ind.solutions} />
                <List title="Application examples" items={ind.examples} />
                <List title="Possible benefits" items={ind.benefits} />
              </div>
              {ind.note && (
                <p className="mt-8 flex gap-3 rounded-lg border border-line bg-soft p-4 text-sm text-slate">
                  <Info size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {ind.note}
                </p>
              )}
            </section>
          )
        })}
      </div>

      <section className="border-t border-line bg-soft py-10">
        <div className="container-page text-sm text-muted">
          Benefits described here are possibilities, not guaranteed outcomes. Results depend on each organization&rsquo;s
          context.{' '}
          <Link to="/contact" className="font-semibold text-accent">Talk to us about your sector.</Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
