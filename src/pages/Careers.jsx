import { BookOpen, Cloud, Code2, Handshake, Lightbulb, ShieldCheck, Briefcase } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import TalentForm from '../components/forms/TalentForm'

// Add real vacancies here. While this array is empty, the page shows the
// "no current openings" message. Shape: { title, location, type, summary, applyTo }
const openRoles = []

const culture = [
  { icon: Lightbulb, title: 'Curiosity', text: 'We ask good questions, explore alternatives, and learn from how things work.' },
  { icon: Handshake, title: 'Collaboration', text: 'We share context openly and make decisions together with clear expectations.' },
  { icon: BookOpen, title: 'Continuous learning', text: 'We want people who enjoy improving their craft and helping others grow.' },
]

const areas = [
  { icon: Code2, title: 'Software Development', text: 'Building and maintaining web and backend applications.' },
  { icon: Cloud, title: 'Cloud Engineering', text: 'Infrastructure, deployment pipelines, and operational reliability.' },
  { icon: ShieldCheck, title: 'Quality Assurance', text: 'Testing strategies that help teams release with confidence.' },
  { icon: Briefcase, title: 'Business Operations', text: 'Planning, coordination, and client communication.' },
]

export default function Careers() {
  useSeo({
    title: 'Careers',
    description:
      'Explore careers at Croxent Technologies. We are building a technology team that values curiosity, collaboration, and continuous learning.',
  })

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build What’s Next With Croxent."
        text="We are building a technology-focused team that values curiosity, collaboration, and continuous learning."
      />

      <section className="section">
        <div className="container-page">
          <SectionHeading title="How we like to work" text="As a growing company, we are shaping our culture on purpose." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card h-full p-6">
                  <c.icon size={24} className="text-accent" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-page">
          <SectionHeading
            title="Learning and growth"
            text="We aim to give people room to learn new technologies, take on meaningful problems, and grow alongside the company."
          />
          <h3 className="mt-12 text-xl font-bold">Areas we are interested in</h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a) => (
              <li key={a.title} className="card p-5">
                <a.icon size={22} className="text-accent" aria-hidden="true" />
                <p className="mt-3 font-bold text-navy">{a.title}</p>
                <p className="mt-1 text-sm text-muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading title="Open roles" />
          {openRoles.length === 0 ? (
            <p className="mt-6 max-w-2xl rounded-xl border border-line bg-soft p-6 text-lg text-slate">
              We may not have an opening that matches your profile today, but we welcome you to share your interests
              for future opportunities.
            </p>
          ) : (
            <ul className="mt-8 space-y-4">
              {openRoles.map((r) => (
                <li key={r.title} className="card p-6">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="text-sm text-muted">{r.location} · {r.type}</p>
                  <p className="mt-2 text-muted">{r.summary}</p>
                  {r.applyTo && (
                    <a href={r.applyTo} className="btn btn-primary mt-4">Apply</a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="section bg-soft" id="apply">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              title="Share your interests"
              text="Tell us about your background and the kind of work you would like to do. We will keep your details in mind for future opportunities."
            />
          </div>
          <div className="card p-6 sm:p-8">
            <TalentForm />
          </div>
        </div>
      </section>
    </>
  )
}
