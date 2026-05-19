import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      aria-haspopup="dialog"
      className="glow-ring h-full overflow-hidden rounded-2xl border border-base-300/70 bg-base-100/80 text-left transition duration-300 hover:-translate-y-1 hover:border-info/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info/70"
    >
      <figure className="aspect-video bg-base-200/70 overflow-hidden">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
      </figure>
      <div className="flex items-center gap-3 px-5 py-4">
        <span className="leading-none">{project.icon ?? '📁'}</span>
        <span className="truncate text-base font-semibold text-base-content">{project.title}</span>
      </div>
    </button>
  )
}
