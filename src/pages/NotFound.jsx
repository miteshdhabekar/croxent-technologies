import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import useSeo from '../hooks/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    noIndex: true,
  })

  return (
    <section className="section">
      <div className="container-page text-center">
        <p className="eyebrow mb-3">Error 404</p>
        <h1 className="mx-auto max-w-xl text-4xl font-extrabold sm:text-5xl">We couldn&rsquo;t find that page.</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
          The address may be mistyped, or the page may have moved. You can head back to the homepage or explore our
          services.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            <Home size={18} aria-hidden="true" /> Back to Homepage
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <ArrowLeft size={18} aria-hidden="true" /> Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
