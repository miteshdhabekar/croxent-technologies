export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="border-b border-line bg-soft">
      <div className="container-page py-14 sm:py-20">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>}
        {children}
      </div>
    </section>
  )
}
