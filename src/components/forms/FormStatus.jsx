import { AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { company } from '../../config/company'

/**
 * Honest status banner. `status` is one of:
 *  - null | 'success' | 'not-configured' | 'server-error' | 'network-error'
 * Success is only shown when a real API confirmed the submission.
 */
export default function FormStatus({ status }) {
  if (!status) return null

  const base = 'mt-6 flex gap-3 rounded-lg border p-4 text-sm'

  if (status === 'success') {
    return (
      <div role="status" className={`${base} border-green-700/30 bg-green-50 text-green-900`}>
        <CheckCircle2 size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
        <p>Thank you. Your message was received. We will review it and respond as soon as we can.</p>
      </div>
    )
  }

  if (status === 'not-configured') {
    return (
      <div role="alert" className={`${base} border-amber-700/30 bg-amber-50 text-amber-900`}>
        <Info size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
        <p>
          This form is not connected to a server yet, so your message was <strong>not sent</strong>.
          {company.contact.emailHref
            ? ' Please contact us directly by email.'
            : ' Contact details will be published here once available.'}
        </p>
      </div>
    )
  }

  return (
    <div role="alert" className={`${base} border-red-700/30 bg-red-50 text-red-900`}>
      <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p>
        {status === 'network-error'
          ? 'We could not reach the server. Please check your connection and try again.'
          : 'Something went wrong while sending your message. Please try again in a moment.'}
      </p>
    </div>
  )
}
