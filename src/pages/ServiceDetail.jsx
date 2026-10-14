import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, AlertTriangle } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Accordion from '../components/common/Accordion'
import CTASection from '../components/common/CTASection'
import NotFound from './NotFound'
import { getServiceBySlug, services } from '../data/services'

function ServiceContent({ service }) {
  useSeo({
    title: service.title,
    description: service.short,
  })
  const Icon = service.icon
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero eyebrow="Services" title={service.title} text={service.short}>
        <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          <ArrowLeft size={16} aria-hidden="true" /> All services
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft text-navy">
              <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{service.overview}</p>

            <h2 className="mt-12 text-2xl font-extrabold sm:text-3xl">Business challenges we address</h2>
            <ul className="mt-5 space-y-3">
              {service.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-muted">
                  <AlertTriangle size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-extrabold sm:text-3xl">Key capabilities</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li key={c} className="card flex gap-3 p-4 text-[0.95rem] text-slate">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 self-start lg:sticky lg:top-24" aria-label="Service summary">
            <div className="card p-6">
              <h2 className="text-lg font-bold">Typical use cases</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] text-muted">
                {service.useCases.map((u) => <li key={u}>{u}</li>)}
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="text-lg font-bold">Technology options</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {service.technologies.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-page max-w-3xl">
          <SectionHeading title="Our delivery approach" text={service.approach} />
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <SectionHeading title="Frequently asked questions" />
          <div className="mt-8">
            <Accordion items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-soft">
        <div className="container-page">
          <h2 className="text-xl font-bold">Explore other services</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="chip transition-colors hover:border-accent hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={`Interested in ${service.title}?`}
        text="Tell us about your needs and we can explore the next steps together."
        label="Discuss Your Project"
        to={`/contact?service=${encodeURIComponent(service.slug)}`}
      />
    </>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  if (!service) return <NotFound />
  return <ServiceContent service={service} />
}
