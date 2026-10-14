import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from '../common/Logo'
import { services } from '../../data/services'

const navLinkClass = ({ isActive }) =>
  `relative px-3 py-2 text-[0.95rem] font-semibold transition-colors ${
    isActive ? 'text-navy' : 'text-slate hover:text-navy'
  } after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-accent after:transition-transform after:origin-left ${
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
  }`

function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  const isActive = pathname.startsWith('/services')

  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 px-3 py-2 text-[0.95rem] font-semibold transition-colors ${
          isActive ? 'text-navy' : 'text-slate hover:text-navy'
        }`}
      >
        Services
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {isActive && <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded bg-accent" />}
      {open && (
        <div className="absolute left-0 top-full z-50 w-80 pt-2">
          <ul className="rounded-xl border border-line bg-white p-2 shadow-xl">
            <li>
              <Link
                to="/services"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-soft"
              >
                All Services
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate hover:bg-soft hover:text-navy"
                >
                  <s.icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMobileOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  const mobileLink = ({ isActive }) =>
    `block rounded-lg px-3 py-3 text-base font-semibold ${
      isActive ? 'bg-soft text-navy' : 'text-slate hover:bg-soft'
    }`

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-white transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <ServicesDropdown />
          <NavLink to="/industries" className={navLinkClass}>Industries</NavLink>
          <NavLink to="/insights" className={navLinkClass}>Insights</NavLink>
          <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
            Let&rsquo;s Talk
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page space-y-1 py-4">
            <NavLink to="/" end className={mobileLink}>Home</NavLink>
            <NavLink to="/about" className={mobileLink}>About Us</NavLink>
            <div>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-slate hover:bg-soft"
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <ul className="ml-3 space-y-1 border-l border-line pl-3">
                  <li><NavLink to="/services" end className={mobileLink}>All Services</NavLink></li>
                  {services.map((s) => (
                    <li key={s.slug}>
                      <NavLink to={`/services/${s.slug}`} className={mobileLink}>{s.title}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <NavLink to="/industries" className={mobileLink}>Industries</NavLink>
            <NavLink to="/insights" className={mobileLink}>Insights</NavLink>
            <NavLink to="/careers" className={mobileLink}>Careers</NavLink>
            <NavLink to="/contact" className={mobileLink}>Contact Us</NavLink>
            <div className="pt-3">
              <Link to="/contact" className="btn btn-primary w-full">Let&rsquo;s Talk</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
