import { Link } from 'react-router-dom'
import { ArrowRight, Target, Wrench, MessagesSquare, TrendingUp } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import HeroVisual from '../components/common/HeroVisual'
import CTASection from '../components/common/CTASection'
import ServiceCard from '../components/cards/ServiceCard'
import IndustryCard from '../components/cards/IndustryCard'
import ProjectCard from '../components/cards/ProjectCard'
import { services } from '../data/services'
import { industries } from '../data/industries'
import { technologies } from '../data/technologies'
import { projects } from '../data/projects'
import { approachSteps } from '../data/approach'

const differentiators = [
  { icon: Target, title: 'Business-First Thinking', text: 'We begin by understanding your goals, users, and business challenges.' },
  { icon: Wrench, title: 'Purposeful Engineering', text: 'We prioritize maintainable software, thoughtful architecture, and practical technology choices.' },
  { icon: MessagesSquare, title: 'Transparent Collaboration', text: 'We value clear communication, shared expectations, and collaborative decision-making.' },
  { icon: TrendingUp, title: 'Continuous Improvement', text: 'We believe digital solutions should evolve alongside changing business needs.' },
]

export default function Home() {
  useSeo({
    title: null,
    description:
      'Croxent Technologies is an emerging IT services company offering custom software, web applications, cloud and DevOps, AI automation, and IT consulting.',
  })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow mb-4">Your Technology Partner</p>
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Engineering Digital Excellence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Croxent Technologies helps businesses transform ideas into reliable digital solutions through
              software engineering, modern technology, and a business-first approach.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
            </div>
            <p className="mt-8 border-l-2 border-accent pl-4 text-sm font-semibold text-slate">
              Practical technology. Thoughtful engineering. Measurable business value.
            </p>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Technology Built Around Your Business.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              Every business has different challenges, goals, and opportunities. At Croxent Technologies, we focus on
              understanding those needs and developing technology solutions that support sustainable growth. From
              software development to cloud adoption, our approach combines practical thinking, engineering discipline,
              and continuous improvement.
            </p>
            <Link to="/about" className="group mt-5 inline-flex items-center gap-1.5 font-semibold text-accent">
              Learn more about Croxent Technologies
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-soft" aria-labelledby="services-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Technology Services That Move Businesses Forward"
            text="We help organizations develop, improve, and maintain digital solutions aligned with their business objectives."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Why Croxent Technologies" title="A Thoughtful Approach to Technology." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <d.icon size={28} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-soft">
        <div className="container-page">
          <SectionHeading eyebrow="Our approach" title="From Business Challenge to Digital Solution." />
          <ol className="relative mt-12 space-y-8 border-l-2 border-line pl-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8">
            {approachSteps.map((s) => (
              <li key={s.n} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-4 border-soft bg-accent lg:-top-[2.55rem] lg:left-0"
                />
                <p className="text-sm font-bold tracking-widest text-accent">{s.n}</p>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Technology for Different Business Needs."
            text="Different sectors face different operational challenges. Here are some areas where technology can help."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 0.05} className="h-full">
                <IndustryCard industry={ind} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section bg-soft">
        <div className="container-page">
          <SectionHeading eyebrow="Capabilities" title="Built With Modern Technologies." />
          <dl className="mt-10 divide-y divide-line rounded-xl border border-line bg-white">
            {technologies.map((group) => (
              <div key={group.category} className="grid gap-3 px-5 py-5 sm:grid-cols-[12rem_1fr] sm:items-center">
                <dt className="font-bold text-navy">{group.category}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Featured work"
            title="Turning Ideas Into Practical Solutions."
            text="The examples below are illustrative solution concepts that show the kinds of problems we can help solve. They are not completed client projects."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section border-t border-line bg-soft">
        <div className="container-page max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">A New Technology Company With a Clear Purpose.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Croxent Technologies is an emerging technology company focused on helping businesses navigate software
            development and digital transformation with clarity and confidence. We believe good technology starts with
            understanding the problem, choosing the right approach, and building solutions that are reliable, useful,
            and ready to evolve.
          </p>
          <Link to="/about" className="btn btn-secondary mt-8">Discover Our Company</Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
