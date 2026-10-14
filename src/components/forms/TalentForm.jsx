import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Loader2, Send } from 'lucide-react'
import FormField from './FormField'
import FormStatus from './FormStatus'
import { company } from '../../config/company'
import { submitForm } from '../../utils/submitForm'

const interestAreas = [
  'Software Development',
  'Cloud Engineering',
  'Quality Assurance',
  'Business Operations',
  'Other',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const urlPattern = /^(https?:\/\/)[^\s]+\.[^\s]+$/i

export default function TalentForm() {
  const [status, setStatus] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { name: '', email: '', area: '', profile: '', message: '', website: '' },
  })

  const onSubmit = async (data) => {
    setStatus(null)
    if (data.website) return // honeypot
    const { website, ...payload } = data
    void website
    const result = await submitForm(company.api.talentEndpoint, payload)
    if (result.ok) {
      setStatus('success')
      reset()
    } else {
      setStatus(result.reason)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="General talent application form">
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
              })}
            />
          )}
        </FormField>
        <FormField label="Email" error={errors.email?.message}>
          {(a11y) => (
            <input
              {...a11y}
              type="email"
              autoComplete="email"
              className="field"
              {...register('email', {
                required: 'Please enter your email.',
                pattern: { value: emailPattern, message: 'Please enter a valid email address.' },
              })}
            />
          )}
        </FormField>
      </div>

      <FormField label="Area of Interest" error={errors.area?.message}>
        {(a11y) => (
          <select {...a11y} className="field" {...register('area', { required: 'Please choose an area.' })}>
            <option value="">Select an area</option>
            {interestAreas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        )}
      </FormField>

      <FormField
        label="Profile Link"
        optional
        error={errors.profile?.message}
        hint="LinkedIn, portfolio, or GitHub URL starting with https://"
      >
        {(a11y) => (
          <input
            {...a11y}
            type="url"
            className="field"
            {...register('profile', {
              validate: (v) => !v || urlPattern.test(v) || 'Please enter a valid URL starting with https://',
            })}
          />
        )}
      </FormField>

      <FormField label="About You" error={errors.message?.message} hint="Share your background and the kind of work you would like to do.">
        {(a11y) => (
          <textarea
            {...a11y}
            rows={5}
            className="field resize-y"
            {...register('message', {
              required: 'Please tell us a little about yourself.',
              minLength: { value: 20, message: 'Please write at least 20 characters.' },
              maxLength: { value: 3000, message: 'Please keep this under 3000 characters.' },
            })}
          />
        )}
      </FormField>

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
            Share Your Interest <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <FormStatus status={status} />
    </form>
  )
}
