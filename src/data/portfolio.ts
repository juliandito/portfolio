import type { Project } from '../types'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const techStack = [
  '⚛️ React + Vite',
  '🧠 TypeScript',
  '🎨 Tailwind CSS',
  '🧩 DaisyUI',
  '📱 Responsive systems',
  '🚀 Performance-first UX',
]

export const contactLinks = [
  {
    label: 'Email',
    value: 'hello@juliandito.dev',
    href: 'mailto:hello@juliandito.dev',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/juliandito',
    href: 'https://www.linkedin.com/in/juliandito/',
  },
  {
    label: 'GitHub',
    value: 'github.com/juliandito',
    href: 'https://github.com/juliandito',
  },
]

export const resumeHref = asset('resume-julian-dito.pdf')
export const profilePhoto = asset('media/profile/julian-dito.svg')

export const projects: Project[] = [
  {
    id: 'launchpad',
    title: 'Launchpad Commerce',
    summary:
      'A storefront control center that gives growth teams a fast way to monitor launches, inventory, and campaign readiness.',
    overview:
      'Launchpad Commerce centralizes launch-day signals into a single operational dashboard. The experience was designed to surface blockers quickly, keep stakeholders aligned, and reduce the friction between marketing and engineering during high-traffic releases.',
    scope: 'Work',
    thumbnail: asset('media/projects/launchpad-card.svg'),
    hero: asset('media/projects/launchpad-hero.svg'),
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'REST APIs'],
    screenshots: [
      {
        src: asset('media/projects/launchpad-shot-1.svg'),
        alt: 'Launchpad dashboard showing deployment status and launch metrics',
      },
      {
        src: asset('media/projects/launchpad-shot-2.svg'),
        alt: 'Launchpad task board for launch preparation steps',
      },
    ],
    takeaways: [
      'Designed for scanability first so the most important launch blockers stay visible on smaller screens.',
      'Used compact dashboard patterns and muted surfaces to keep the interface calm under pressure.',
      'Focused on clear state indicators and predictable navigation for cross-functional teams.',
    ],
  },
  {
    id: 'signalflow',
    title: 'SignalFlow Notes',
    summary:
      'A polished personal project for turning meeting notes and quick thoughts into searchable, structured knowledge.',
    overview:
      'SignalFlow Notes explores a lightweight knowledge workflow for individuals who want fast capture, clean organization, and delightful review moments. The product direction emphasized speed, low visual noise, and a writing-first interface that still feels modern.',
    scope: 'Personal',
    thumbnail: asset('media/projects/signalflow-card.svg'),
    hero: asset('media/projects/signalflow-hero.svg'),
    tools: ['React', 'TypeScript', 'DaisyUI', 'Local Storage', 'Accessible UI'],
    screenshots: [
      {
        src: asset('media/projects/signalflow-shot-1.svg'),
        alt: 'SignalFlow note editor with quick-capture layout',
      },
      {
        src: asset('media/projects/signalflow-shot-2.svg'),
        alt: 'SignalFlow library view with filters and saved notes',
      },
    ],
    takeaways: [
      'Prototyped around keyboard-friendly interactions to support fast capture and review.',
      'Balanced playful accent color with a grounded dark palette to preserve readability.',
      'Kept the information hierarchy shallow so content stays the main focus.',
    ],
  },
  {
    id: 'orbit-ops',
    title: 'Orbit Ops',
    summary:
      'A team operations hub that helps engineering managers track delivery, risks, and weekly execution across squads.',
    overview:
      'Orbit Ops combines delivery snapshots, dependency tracking, and action-oriented meeting notes into one steady rhythm for weekly planning. The interface favors concise summaries, responsive layouts, and reusable status patterns that scale from desktop to mobile.',
    scope: 'Work',
    thumbnail: asset('media/projects/orbit-card.svg'),
    hero: asset('media/projects/orbit-hero.svg'),
    tools: ['Vite', 'React', 'Tailwind CSS', 'Charts', 'Design Systems'],
    screenshots: [
      {
        src: asset('media/projects/orbit-shot-1.svg'),
        alt: 'Orbit Ops delivery timeline and squad health cards',
      },
      {
        src: asset('media/projects/orbit-shot-2.svg'),
        alt: 'Orbit Ops weekly planning board with actions and risks',
      },
    ],
    takeaways: [
      'Created repeatable card and badge patterns that adapt well across several data densities.',
      'Used subtle glows and cyan highlights sparingly so important actions feel actionable without visual clutter.',
      'Made responsive tradeoffs early to ensure the product remains effective on tablets and phones.',
    ],
  },
]
