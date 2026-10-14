import { Link, useSearchParams } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import LinkedInIcon from '../components/common/LinkedInIcon'
import useSeo from '../hooks/useSeo'
import PageHero from '../components/common/PageHero'
import ContactForm from '../components/forms/ContactForm'
import { company, isPlaceholder } from '../config/company'
import { getServiceBySlug } from '../data/services'

function InfoRow({ icon: Icon, label, value, href }) {
  const missing = isPlaceholder(value)
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft text-slate">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-navy">{label}</p>
        {!missing && href ? (
          <a href={href} className="text-muted hover:text-accent">{value}</a>
        ) : (
          <p className="text-sm text-muted">{missing ? 'Details will be published soon.' : value}</p>
        )}
      </div>
    </li>
  )
}

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description:
      'Tell Croxent Technologies about your business needs, technical challenges, or project ideas and explore the next steps together.',
  })

  // Optional deep link: /contact?service=cloud-services-and-devops preselects the service.
  const [params] = useSearchParams()
  const preset = getServiceBySlug(params.get('service') || '')
  const { contact, social } = company

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s Talk About Your Next Project."
        text="Tell us about your business needs, technical challenges, or project ideas. Our team can explore the next steps with you."
      />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="mb-6 text-2xl font-extrabold">Send us a message</h2>
            <ContactForm key={preset?.slug || 'none'} defaultService={preset?.title || ''} />
          </div>
          <aside aria-label="Contact details" className="lg:pt-14">
            <div className="card p-6">
              <h2 className="text-lg font-bold">Contact details</h2>
              <ul className="mt-5 space-y-5">
                <InfoRow icon={Mail} label="Email" value={contact.email} href={contact.emailHref} />
                <InfoRow icon={Phone} label="Phone" value={contact.phone} href={contact.phoneHref} />
                <InfoRow icon={MapPin} label="Office" value={contact.address} />
                <InfoRow icon={LinkedInIcon} label="LinkedIn" value={social.linkedin} href={social.linkedin} />
              </ul>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Not sure which service fits? Browse our{' '}
              <Link to="/services" className="font-semibold text-accent hover:underline">services</Link> or read how we
              work on the{' '}
              <Link to="/solutions" className="font-semibold text-accent hover:underline">approach page</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
