import { Link } from 'react-router-dom'
import LinkedInIcon from '../common/LinkedInIcon'
import Logo from '../common/Logo'
import { company, isPlaceholder } from '../../config/company'

const currentYear = new Date().getFullYear()
import { services } from '../../data/services'
import { industries } from '../../data/industries'

import logo from '../../assets/logo.png'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/solutions', label: 'Our Approach' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
]

const linkClass = 'text-sm text-white/70 transition-colors hover:text-white'

function ContactLine({ label, value, href }) {
  const placeholder = isPlaceholder(value)
  return (
    <li className="text-sm">
      <span className="block text-xs uppercase tracking-wider text-white/50">{label}</span>
      {!placeholder && href ? (
        <a href={href} className="text-white/80 hover:text-white">{value}</a>
      ) : (
        <span className={placeholder ? 'italic text-white/50' : 'text-white/80'}>
          {placeholder ? `${label} details will be published soon.` : value}
        </span>
      )}
    </li>
  )
}

export default function Footer() {
  const { contact, social } = company
  return (
    <footer className="bg-[#0f1d30] text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            {/* <Logo light /> */}
           <img src={logo} alt="Croxent Technologies Logo" style={{ height: '86px', width: 'auto' }} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{company.description}</p>
            <div className="mt-5">
              {social.linkedin ? (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Croxent Technologies on LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <LinkedInIcon size={18} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm italic text-white/50">
                  <LinkedInIcon size={16} aria-hidden="true" /> [LinkedIn link to be added]
                </span>
              )}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h2>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className={linkClass}>{s.title}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Industries</h2>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link to={`/industries#${i.slug}`} className={linkClass}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            <ContactLine label="Email" value={contact.email} href={contact.emailHref} />
            <ContactLine label="Phone" value={contact.phone} href={contact.phoneHref} />
            <ContactLine label="Address" value={contact.address} />
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
