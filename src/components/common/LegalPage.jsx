import PageHero from './PageHero'

/**
 * Shared layout for Privacy Policy and Terms.
 * `sections` is an array of { title, paragraphs?: string[], items?: string[] }.
 */
export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={intro} />
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="mb-10 rounded-lg border border-amber-700/30 bg-amber-50 p-4 text-sm text-amber-900" role="note">
            <strong>Draft for review:</strong> this document is a general starting template and has not been reviewed
            by a lawyer. Have it reviewed and adapted to your company and jurisdiction before launch.
          </p>
          {sections.map((s) => (
            <div key={s.title} className="mb-8">
              <h2 className="mb-3 text-xl font-extrabold">{s.title}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mb-3 leading-relaxed text-ink">{p}</p>
              ))}
              {s.items && (
                <ul className="list-disc space-y-1.5 pl-6 text-ink marker:text-accent">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
