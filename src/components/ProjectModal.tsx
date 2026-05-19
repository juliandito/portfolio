import { useEffect } from 'react'
import { X } from 'lucide-react'

import { Badge } from './Badge'
import type { Project } from '../types'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, project])

  if (!project) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="glow-ring max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-[28px] border border-base-300/80 bg-base-100 shadow-2xl shadow-black/50"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="max-h-[92vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          {/* Close */}
          <div className="mb-5 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-circle btn-sm border-none bg-base-200/80 text-slate-300 hover:bg-base-300"
              aria-label="Close project details"
            >
              <X size={16} />
            </button>
          </div>

          {/* Icon + Title */}
          <div className="mb-4 flex items-start gap-4">
            <span className="text-5xl leading-none">{project.icon ?? '📁'}</span>
            <h3 id="project-modal-title" className="text-3xl font-bold text-white leading-tight mt-1">
              {project.title}
            </h3>
          </div>

          {/* Scope property row */}
          <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span>≡</span>
              <span>Scope</span>
            </span>
            <Badge tone="accent">{project.scope}</Badge>
          </div>

          {/* Hero image */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-base-300/70">
            <img src={project.hero} alt="" className="w-full object-cover" />
          </div>

          {/* Overview */}
          <div className="mb-7">
            <h4 className="mb-3 inline-block border-b-2 border-info/60 pb-0.5 text-lg font-bold text-info">
              Overview
            </h4>
            <p className="text-base leading-8 text-slate-200">{project.overview}</p>
          </div>

          {/* Tools */}
          <div className="mb-7">
            <h4 className="mb-3 text-base font-semibold text-white">Tools:</h4>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {project.tools.map((tool) => (
                <li key={tool} className="flex items-center gap-2">
                  <span className="text-info">•</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview */}
          <div className="mb-7">
            <h4 className="mb-3 inline-block border-b-2 border-info/60 pb-0.5 text-lg font-bold text-info">
              Preview
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {project.screenshots.map((screenshot) => (
                <figure
                  key={screenshot.src}
                  className="overflow-hidden rounded-2xl border border-base-300/70 bg-base-200/50"
                >
                  <img src={screenshot.src} alt={screenshot.alt} className="h-full w-full object-cover" />
                </figure>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div>
            <h4 className="mb-3 inline-block border-b-2 border-info/60 pb-0.5 text-lg font-bold text-info">
              Key Takeaways
            </h4>
            <ul className="space-y-2 text-sm text-slate-200">
              {project.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-2">
                  <span className="mt-0.5 text-info">•</span>
                  <span className="leading-7">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
