import { useId } from 'react'

/** Accessible labelled field with error text wired via aria-describedby. */
export default function FormField({ label, error, optional = false, hint, children }) {
  const id = useId()
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ') || undefined

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
        {optional && <span className="ml-1 font-normal text-muted">(optional)</span>}
      </label>
      {children({ id, 'aria-invalid': error ? 'true' : 'false', 'aria-describedby': describedBy })}
      {hint && !error && <p id={hintId} className="mt-1 text-xs text-muted">{hint}</p>}
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-sm text-[#b3261e]">
          {error}
        </p>
      )}
    </div>
  )
}
