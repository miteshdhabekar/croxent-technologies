import { Eye, Flag, ShieldCheck, Users, Cog, Handshake, BookOpen, ClipboardCheck } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/common/CTASection'
import Reveal from '../components/common/Reveal'

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'We are honest about what we can do, what we cannot, and what we do not yet know.' },
  { icon: Users, title: 'Customer Focus', text: 'We measure our work by whether it helps the people and businesses who use it.' },
  { icon: Cog, title: 'Engineering Excellence', text: 'We care about clean design, testing, and software that is easy to maintain.' },
  { icon: Handshake, title: 'Collaboration', text: 'We work with clients as partners, sharing context, decisions, and progress.' },
  { icon: BookOpen, title: 'Continuous Learning', text: 'We stay curious, learn from every project, and keep improving our skills.' },
  { icon: ClipboardCheck, title: 'Accountability', text: 'We own our commitments and communicate early when plans need to change.' },
]

const principles = [
  {
    title: 'Engineering philosophy',
    text: 'Good software is simple where it can be and sophisticated only where it must be. We favor clear structure, readable code, and proven tools over novelty. Every technical choice should have a reason that can be explained to the people who depend on it.',
  },
  {
    title: 'Client collaboration',
    text: 'We involve clients throughout the work rather than only at the start and end. Regular reviews, shared priorities, and honest conversations about trade-offs help ensure that what we build matches what the business needs.',
  },
  {
    title: 'Quality and continuous improvement',
    text: 'Quality comes from habits: reviewing code, testing important behavior, and learning from feedback. After release we look for ways to improve the solution and our own way of working.',
  },
]

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Learn about Croxent Technologies, an emerging IT company with a clear purpose: reliable software, thoughtful engineering, and practical technology solutions.',
  })

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Technology With Purpose."
        text="Croxent Technologies is a growing startup with big ambitions: to help businesses solve meaningful challenges with reliable, well-engineered technology."
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Who we are</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Croxent Technologies is an emerging technology company focused on software development and digital
              transformation. We are at the beginning of our journey, and we are building the company with the same
              care we bring to the software we create.
            </p>
            <p>
              We believe good technology starts with understanding the problem, choosing the right approach, and
              building solutions that are reliable, useful, and ready to evolve.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal className="card p-8">
            <Eye size={28} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold">Our Vision</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              To grow into a trusted technology partner recognized for engineering quality, transparency, and lasting
              business value.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="card p-8">
            <Flag size={28} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-extrabold">Our Mission</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              To help businesses solve meaningful challenges through reliable software, thoughtful engineering, and
              practical technology solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Core values" title="What guides our work" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.05}>
                <v.icon size={26} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="Our principles" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Discuss a Project?"
        text="Tell us about your goals and challenges. We would be glad to explore how we can help."
        label="Discuss a Project"
      />
    </>
  )
}
