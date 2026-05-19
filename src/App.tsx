import { useState } from 'react'
import { ArrowRight, Download, ExternalLink, FolderGit2, Mail } from 'lucide-react'

import { Badge } from './components/Badge'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { SectionWrapper } from './components/SectionWrapper'
import { contactLinks, profilePhoto, projects, resumeHref, techStack } from './data/portfolio'
import type { Project } from './types'

const contactIcons = {
  Email: Mail,
  LinkedIn: ExternalLink,
  GitHub: FolderGit2,
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div data-theme="portfolio" className="min-h-screen bg-base-200 text-base-content">
      <main>
        <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-10">
          <div className="glow-ring mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-base-300/70 bg-base-100/90">
            <div className="bg-[radial-gradient(circle_at_top,rgba(46,230,214,0.18),transparent_38%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(11,18,32,0.96))] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-info/85">
                    👋 Hello, I&apos;m Julian Dito
                  </p>
                  <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Software Engineer building thoughtful digital products with a calm, modern feel.
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    I design and ship responsive interfaces with strong foundations in accessibility,
                    performance, and maintainable front-end architecture.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => scrollToSection('projects')}
                      className="btn btn-primary border-none px-6 text-slate-950 shadow-[0_0_30px_rgba(46,230,214,0.25)] hover:bg-cyan-300"
                    >
                      View Projects
                      <ArrowRight size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('contact')}
                      className="btn btn-outline border-info/50 bg-base-100/10 px-6 text-slate-100 hover:border-info hover:bg-base-100/20"
                    >
                      Contact
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-3xl border border-base-300/70 bg-base-100/60 p-5 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Focus</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Frontend systems, product polish, and reliable UX.</p>
                  </div>
                  <div className="rounded-3xl border border-base-300/70 bg-base-100/60 p-5 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Now</p>
                    <p className="mt-3 text-lg leading-7 text-slate-200">
                      Creating performant web experiences with reusable components and design-led engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper
          id="about"
          eyebrow="About"
          title="A developer portfolio designed to be fast, clear, and easy to explore."
          description="I enjoy turning product requirements into resilient interfaces with deliberate spacing, grounded visual systems, and practical component architecture."
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
            <div className="glow-ring overflow-hidden rounded-[28px] border border-base-300/70 bg-base-100/70">
              <img src={profilePhoto} alt="Portrait illustration of Julian Dito" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-[28px] border border-base-300/70 bg-base-100/70 p-6 sm:p-8">
              <p className="text-base leading-8 text-slate-200">
                My work leans on a simple principle: the best interfaces feel obvious. I care about meaningful motion, accessible contrast, useful empty states, and components that scale cleanly as products grow.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                I like collaborating closely with designers, product teams, and stakeholders to make technical tradeoffs visible early and keep delivery sustainable.
              </p>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Tech stack highlights
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {techStack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="projects"
          eyebrow="Projects"
          title="Selected work with concise detail views."
          description="Each card opens a focused modal with overview, tools, screenshots, and project takeaways."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          id="contact"
          eyebrow="Contact"
          title="Let’s build something sharp and useful."
          description="Reach out for product engineering, front-end systems work, or collaborative problem solving."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="grid gap-4 sm:grid-cols-3">
              {contactLinks.map((item) => {
                const Icon = contactIcons[item.label as keyof typeof contactIcons]

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="glow-ring rounded-[24px] border border-base-300/70 bg-base-100/70 p-5 transition duration-300 hover:border-info/40 hover:bg-base-100"
                  >
                    <div className="flex items-center gap-3 text-info">
                      <Icon size={18} />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-4 break-all text-base font-medium text-white">{item.value}</p>
                  </a>
                )
              })}
            </div>

            <a
              href={resumeHref}
              download
              className="btn btn-primary h-auto self-start border-none px-6 py-4 text-slate-950 shadow-[0_0_30px_rgba(46,230,214,0.25)] hover:bg-cyan-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </SectionWrapper>
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
