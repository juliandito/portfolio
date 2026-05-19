export type ProjectScope = 'Work' | 'Personal' | 'Project'

export type ProjectScreenshot = {
  src: string
  alt: string
}

export type Project = {
  id: string
  title: string
  overview: string
  scope: ProjectScope
  icon?: string
  thumbnail: string
  hero: string
  tools: string[]
  screenshots: ProjectScreenshot[]
  takeaways: string[]
}
