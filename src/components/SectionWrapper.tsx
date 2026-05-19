import type { ReactNode } from 'react'

type SectionWrapperProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-info/80">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">{title}</h2>
          {description ? <p className="mt-3 text-base leading-7 text-slate-300">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
