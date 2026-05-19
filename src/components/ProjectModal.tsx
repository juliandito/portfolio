import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

import { Badge } from './Badge'
import type { Project } from '../types'

type TabId = 'overview' | 'tools' | 'screenshots' | 'takeaways'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'tools', label: 'Tools' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'takeaways', label: 'Key Takeaways' },
]

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview')

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
        className="glow-ring max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-base-300/80 bg-base-100 shadow-2xl shadow-black/50"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative border-b border-base-300/70 bg-base-200/70">
          <img src={project.hero} alt="" className="h-72 w-full object-cover sm:h-80" />
          <button
            type="button"
            onClick={onClose}
            className="btn btn-circle btn-sm absolute right-4 top-4 border-none bg-slate-950/70 text-white hover:bg-slate-900"
            aria-label="Close project details"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-[calc(92vh-18rem)] overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-4 border-b border-base-300/70 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <Badge tone="accent">{project.scope}</Badge>
                <span className="text-sm text-slate-400">Project Detail</span>
              </div>
              <h3 id="project-modal-title" className="text-3xl font-semibold text-base-content">
                {project.title}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-300">{project.summary}</p>
          </div>

          <div className="tabs tabs-box mt-6 inline-flex border border-base-300/80 bg-base-200/70 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tab rounded-xl px-4 ${activeTab === tab.id ? 'tab-active bg-base-100 text-info' : 'text-slate-300'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === 'overview' ? (
              <div className="space-y-4">
                <p className="text-base leading-8 text-slate-200">{project.overview}</p>
              </div>
            ) : null}

            {activeTab === 'tools' ? (
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            ) : null}

            {activeTab === 'screenshots' ? (
              <div className="grid gap-4 md:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="overflow-hidden rounded-3xl border border-base-300/70 bg-base-200/50"
                  >
                    <img src={screenshot.src} alt={screenshot.alt} className="h-full w-full object-cover" />
                    <figcaption className="px-4 py-3 text-sm text-slate-300">{screenshot.alt}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}

            {activeTab === 'takeaways' ? (
              <ul className="space-y-3 text-sm leading-7 text-slate-200">
                {project.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 rounded-2xl border border-base-300/70 bg-base-200/40 px-4 py-3">
                    <span aria-hidden="true" className="mt-0.5 text-info">
                      ✓
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
