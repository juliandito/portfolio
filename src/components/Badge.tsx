import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'accent' | 'muted'
}

const toneClasses = {
  accent: 'border-info/40 bg-info/10 text-info',
  muted: 'border-base-300/70 bg-base-200/50 text-base-content/80',
}

export function Badge({ children, tone = 'muted' }: BadgeProps) {
  return (
    <span className={`badge badge-outline gap-1 rounded-full px-3 py-3 ${toneClasses[tone]}`}>
      {children}
    </span>
  )
}
