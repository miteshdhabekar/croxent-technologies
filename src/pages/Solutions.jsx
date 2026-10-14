import { Info } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Reveal from '../components/common/Reveal'
import { phases, engagementModels } from '../data/approach'

export default function Solutions() {
  useSeo({
    title: 'Our Approach',
    description:
      'See how Croxent Technologies works with clients, from requirement discovery and architecture to deployment and ongoing improvement, and the engagement models we can offer.',
  })

  return (
    <>
      <PageHero
        eyebrow="Solutions / Our Approach"
        title="From Business Challenge to Digital Solution."
        text="A clear, collaborative process helps projects stay focused and predictable. Here is how we work with clients."
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading title="Our delivery process" />
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.05}>
                <li className="card flex h-full gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-soft text-navy">
                    <p.icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-accent">STEP {i + 1}</p>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement models"
            title="Flexible ways to work together"
            text="The right model depends on your goals, timeline, and how well the work is defined."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((m) => (
              <div key={m.title} className="card p-6">
                <h3 className="text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 flex gap-3 rounded-lg border border-line bg-white p-4 text-sm text-slate">
            <Info size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            Project scope, pricing, and engagement terms depend on each client&rsquo;s needs and are agreed in writing
            before work begins.
          </p>
        </div>
      </section>

      <CTASection
        title="Let's Plan Your Project"
        text="Share your goals and we can help you choose the approach that fits."
        label="Start a Conversation"
      />
    </>
  )
}
