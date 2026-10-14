import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import ServiceCard from '../components/cards/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  useSeo({
    title: 'Services',
    description:
      'Explore Croxent Technologies services: custom software, web applications, cloud and DevOps, AI and automation, IT consulting, and application support.',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology Services That Move Businesses Forward"
        text="We help organizations develop, improve, and maintain digital solutions aligned with their business objectives."
      />
      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
