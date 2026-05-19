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
      className="glow-ring overflow-hidden rounded-2xl border border-base-300/70 bg-base-100/80 text-left transition duration-300 hover:-translate-y-1 hover:border-info/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info/70"
    >
      <figure className="bg-base-200/70">
        <img src={project.thumbnail} alt="" className="h-40 w-full object-cover" />
      </figure>
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="text-base leading-none">{project.icon ?? '📁'}</span>
        <span className="truncate text-sm font-medium text-base-content">{project.title}</span>
      </div>
    </button>
  )
}
