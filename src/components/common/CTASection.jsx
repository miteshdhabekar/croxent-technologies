import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Have a Business Challenge in Mind?',
  text = 'Let’s explore how the right technology solution can help move your business forward.',
  label = 'Start a Conversation',
  to = '/contact',
}) {
  return (
    <section className="bg-navy">
      <div className="container-page py-16 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold !text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">{text}</p>
        <Link to={to} className="btn btn-light mt-8">
          {label} <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
