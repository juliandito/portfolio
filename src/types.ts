export type ProjectScope = 'Work' | 'Personal'

export type ProjectScreenshot = {
  src: string
  alt: string
}

export type Project = {
  id: string
  title: string
  summary: string
  overview: string
  scope: ProjectScope
  thumbnail: string
  hero: string
  tools: string[]
  screenshots: ProjectScreenshot[]
  takeaways: string[]
}
