import { useState } from 'react'
import { ExternalLink, FileText, FolderGit2, Mail } from 'lucide-react'

import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { contactLinks, profilePhoto, projects, resumeHref } from './data/portfolio'
import type { Project } from './types'

const contactIcons = {
  Email: Mail,
  LinkedIn: ExternalLink,
  GitHub: FolderGit2,
}

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
              <div className="glow-ring overflow-hidden rounded-2xl border border-base-300/70">
                <img
                  src={profilePhoto}
                  alt="Portrait of Kevin Juliandito"
                  className="w-full object-cover"
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
              <h2 className="mb-5 text-2xl font-bold text-white">🪪 About Me</h2>
              <p className="text-base leading-8 text-slate-200">
                Hi! My name is <strong className="text-white">Kevin Juliandito</strong>. I&apos;m a
                Software Engineer at <strong className="text-white">Visual Analysis</strong>
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                With about <strong className="text-white">4 years of experience</strong> in building
                software, I&apos;m familiar with a wide range of technologies related to{' '}
                <strong className="text-white">Fullstack Development</strong>. For backend services,
                mostly I used{' '}
                <strong className="text-white">Python Django, Nest JS, Golang</strong>, and{' '}
                <strong className="text-white">PHP Laravel</strong> with{' '}
                <strong className="text-white">PostgreSQL, MSSQL</strong> and{' '}
                <strong className="text-white">MySQL</strong> database. On the frontend side, I
                frequently use <strong className="text-white">React</strong> and{' '}
                <strong className="text-white">Vue JS</strong>. With these technologies, I&apos;m
                capable of building{' '}
                <strong className="text-white">effective and testable products</strong> with all
                around functionalities. Aside from development tools, I&apos;ve also used{' '}
                <strong className="text-white">DevOps</strong> tools like{' '}
                <strong className="text-white">Docker, Kubernetes and Jenkins</strong> to deploy the
                product in various environments.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Other than tech stuff, I&apos;ve also taken up the role of{' '}
                <strong className="text-white">Scrum Master</strong> in my team, with{' '}
                <strong className="text-white">PSM I</strong> certification I took part in
                implementing{' '}
                <strong className="text-white">Agile Development Scrum</strong> to make sure my
                team can deliver great products on time.
              </p>
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
            <h2 className="mb-5 text-2xl font-bold text-white">My Featured Projects</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
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
