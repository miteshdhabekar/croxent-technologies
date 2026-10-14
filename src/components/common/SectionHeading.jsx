export default function SectionHeading({ eyebrow, title, text, align = 'left', as: Tag = 'h2', light = false }) {
  const center = align === 'center'
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? '!text-white/70' : ''}`}>{eyebrow}</p>}
      <Tag className={`text-3xl font-extrabold sm:text-4xl ${light ? '!text-white' : ''}`}>{title}</Tag>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-muted'}`}>{text}</p>
      )}
    </div>
  )
}
