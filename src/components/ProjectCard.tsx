import { Badge } from './Badge'
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
      className="card glow-ring h-full overflow-hidden border border-base-300/70 bg-base-100/80 text-left shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-info/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info/70"
    >
      <figure className="border-b border-base-300/70 bg-base-200/70">
        <img src={project.thumbnail} alt="" className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge tone="accent">{project.scope}</Badge>
            </div>
            <h3 className="text-xl font-semibold text-base-content">{project.title}</h3>
          </div>
          <span aria-hidden="true" className="text-2xl text-info">
            ✨
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool) => (
            <Badge key={tool}>{tool}</Badge>
          ))}
        </div>
      </div>
    </button>
  )
}
