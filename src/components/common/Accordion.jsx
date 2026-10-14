import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const baseId = useId()

  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-white">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`${baseId}-btn-${i}`}
                aria-expanded={open}
                aria-controls={`${baseId}-panel-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy"
              >
                {item.q}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`shrink-0 text-accent transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`${baseId}-panel-${i}`}
              role="region"
              aria-labelledby={`${baseId}-btn-${i}`}
              hidden={!open}
              className="px-5 pb-5 text-muted"
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
