import { useState } from 'react'
import { ExternalLink, FileText, FolderGit2, Mail } from 'lucide-react'

import { Badge } from './components/Badge'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { contactLinks, profilePhoto, projects, resumeHref } from './data/portfolio'
import type { Project } from './types'

const contactIcons = {
  Email: Mail,
  LinkedIn: ExternalLink,
  GitHub: FolderGit2,
}

const skillTools = [
  'React',
  'TypeScript',
  'Vue.js',
  'Python Django',
  'NestJS',
  'Golang',
  'PHP Laravel',
  'PostgreSQL',
  'MySQL',
  'MSSQL',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'Agile Scrum',
]

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div data-theme="portfolio" className="min-h-screen bg-base-200 text-base-content">
      <main>
        {/* Cover banner */}
        <div
          className="relative h-52 w-full overflow-hidden sm:h-64"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(34,211,238,0.12), transparent 55%), linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #0f172a 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(34,211,238,0.5) 31px,rgba(34,211,238,0.5) 32px),repeating-linear-gradient(90deg,transparent,transparent 63px,rgba(34,211,238,0.3) 63px,rgba(34,211,238,0.3) 64px)',
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <div className="mb-10 mt-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Hi There! ✨</h1>
          </div>

          {/* About section */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Left: profile photo + contact */}
            <div className="flex flex-col gap-6">
              <div className="glow-ring mx-auto w-full max-w-55 overflow-hidden rounded-2xl border border-base-300/70 sm:max-w-62.5 lg:mx-0 lg:max-w-none">
                <img
                  src={profilePhoto}
                  alt="Portrait of Kevin Juliandito"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>

              <div>
                <h3 className="mb-3 text-base font-semibold text-white">Let&apos;s Connect</h3>
                <div className="flex flex-col gap-2">
                  {contactLinks.map((item) => {
                    const Icon = contactIcons[item.label as keyof typeof contactIcons]
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="flex items-center gap-3 rounded-2xl border border-base-300/70 bg-base-100/70 px-4 py-3 transition duration-200 hover:border-info/40 hover:bg-base-100"
                      >
                        <Icon size={15} className="shrink-0 text-info" />
                        <span className="truncate text-sm text-slate-200">{item.value}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right: About Me */}
            <div className="glow-ring rounded-2xl border border-base-300/70 bg-base-100/70 p-6 sm:p-8">
              <h2 className="mb-5 text-2xl font-bold text-white">About Me</h2>
              <p className="text-base leading-8 text-slate-200">
                Hi! My name is <strong className="text-white">Kevin Juliandito</strong>. I am a
                Software Engineer at <strong className="text-white">Visual Analysis</strong> with
                around <strong className="text-white">4 years of hands-on experience</strong> building and maintaining production-grade applications.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                I focus on shipping <strong className="text-white">effective, testable, and
                scalable products</strong>, from feature discovery to delivery. My work spans
                fullstack implementation, especially on data-heavy dashboards, internal tools, and
                user-facing web platforms that need strong performance and clear UX.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                I enjoy close collaboration with designers, QA, and product stakeholders to align
                technical direction with business goals. I have also taken the role of
                <strong className="text-white"> Scrum Master</strong>, applying
                <strong className="text-white"> Agile Scrum practices</strong> to help teams deliver
                reliably and continuously improve execution.
              </p>

              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Skills &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillTools.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-300">
                Want to know more about me? Check out my resume here!
              </p>
              <a
                href={resumeHref}
                download
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-base-300/70 bg-base-200/60 px-4 py-2.5 text-sm text-slate-200 transition duration-200 hover:border-info/40 hover:bg-base-200"
              >
                <FileText size={15} className="text-info" />
                My Resume
              </a>
            </div>
          </div>

          {/* Projects section */}
          <div className="mb-16">
            <h2 className="mb-5 text-2xl font-bold text-white">My Featured Projects 🚀</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="px-4 pb-10 pt-2 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        Built with React, TypeScript, Tailwind CSS, and DaisyUI for GitHub Pages.
      </footer>

      <ProjectModal
        key={selectedProject?.id ?? 'project-modal'}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
