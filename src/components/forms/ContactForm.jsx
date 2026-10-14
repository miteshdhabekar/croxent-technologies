import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Loader2, Send } from 'lucide-react'
import FormField from './FormField'
import FormStatus from './FormStatus'
import { services } from '../../data/services'
import { company } from '../../config/company'
import { submitForm } from '../../utils/submitForm'

const budgets = [
  'Not sure yet',
  'Under 5,000 USD',
  '5,000 - 25,000 USD',
  '25,000 - 100,000 USD',
  'Over 100,000 USD',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const freeMailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com']

export default function ContactForm({ defaultService = '' }) {
  const [status, setStatus] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { name: '', email: '', company: '', service: defaultService, budget: '', message: '', website: '' },
  })

  const onSubmit = async (data) => {
    setStatus(null)
    // Honeypot: real users never fill this hidden field. Bots often do.
    if (data.website) {
      return
    }
    const { website, ...payload } = data
    void website
    const result = await submitForm(company.api.contactEndpoint, payload)
    if (result.ok) {
      setStatus('success')
      reset()
    } else {
      setStatus(result.reason)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" error={errors.name?.message}>
          {(a11y) => (
            <input
              {...a11y}
              type="text"
              autoComplete="name"
              className="field"
              {...register('name', {
                required: 'Please enter your full name.',
                minLength: { value: 2, message: 'Name must be at least 2 characters.' },
                maxLength: { value: 100, message: 'Name is too long.' },
              })}
            />
          )}
        </FormField>

        <FormField label="Work Email" error={errors.email?.message}>
          {(a11y) => (
            <input
              {...a11y}
              type="email"
              autoComplete="email"
              className="field"
              {...register('email', {
                required: 'Please enter your work email.',
                pattern: { value: emailPattern, message: 'Please enter a valid email address.' },
                validate: (v) =>
                  !freeMailDomains.includes(v.split('@')[1]?.toLowerCase()) ||
                  'Please use your work email address.',
              })}
            />
          )}
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Company Name" error={errors.company?.message}>
          {(a11y) => (
            <input
              {...a11y}
              type="text"
              autoComplete="organization"
              className="field"
              {...register('company', {
                required: 'Please enter your company name.',
                maxLength: { value: 120, message: 'Company name is too long.' },
              })}
            />
          )}
        </FormField>

        <FormField label="Service of Interest" error={errors.service?.message}>
          {(a11y) => (
            <select
              {...a11y}
              className="field"
              {...register('service', { required: 'Please choose a service.' })}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
            </select>
          )}
        </FormField>
      </div>

      <FormField label="Project Budget" optional>
        {(a11y) => (
          <select {...a11y} className="field" {...register('budget')}>
            <option value="">Prefer not to say</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        )}
      </FormField>

      <FormField
        label="Message"
        error={errors.message?.message}
        hint="Describe your business need, challenge, or project idea."
      >
        {(a11y) => (
          <textarea
            {...a11y}
            rows={6}
            className="field resize-y"
            {...register('message', {
              required: 'Please tell us a little about your project.',
              minLength: { value: 20, message: 'Please write at least 20 characters.' },
              maxLength: { value: 3000, message: 'Message must be under 3000 characters.' },
            })}
          />
        )}
      </FormField>

      {/* Honeypot field - hidden from people and assistive technology */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
        </label>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <FormStatus status={status} />
    </form>
  )
}
