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
    value: 'sjuliandito@gmail.com',
    href: 'mailto:sjuliandito@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kevinjuliandito',
    href: 'https://www.linkedin.com/in/kevinjuliandito/',
  },
  {
    label: 'GitHub',
    value: 'github.com/juliandito',
    href: 'https://github.com/juliandito',
  },
]

export const resumeHref = asset('resume-julian-dito.pdf')
export const profilePhoto = asset('media/profile/photo.jpg')

export const projects: Project[] = [
  {
    id: 'insight-portal',
    icon: '🔎',
    title: 'Insight Portal Origin',
    overview:
      'Insight Portal is a data analytics and visualization tools for large scale data. With advanced feature such as graph visualization, query builder, elasticsearch and much more, this application is a great tools for quick and accurate information management. Being built in Kubernetes architecture also enhance the scalability of the system for larger user base.',
    scope: 'Work',
    thumbnail: asset('media/projects/insight-portal-2.jpg'),
    hero: asset('media/projects/insight-portal-2.jpg'),
    tools: ['Django DRF', 'Vue JS', 'PostgreSQL', 'MSSQL', 'Redis', 'Elasticsearch', 'Kubernetes', 'Docker'],
    screenshots: [
      {
        src: asset('media/projects/insight-portal-hero.jpg'),
        alt: 'Main hero image of Insight Portal',
      },
      {
        src: asset('media/projects/insight-portal-1.jpg'),
        alt: 'Insight Portal dashboard showing chart feature',
      },
      {
        src: asset('media/projects/insight-portal-2.jpg'),
        alt: 'Insight Portal dashboard showing tactical visualization',
      },
      {
        src: asset('media/projects/insight-portal-3.jpg'),
        alt: 'Insight Portal search engine',
      },
    ],
    takeaways: [
      'Explored advanced tools like caching, elastic, data visualization, reporting, language localization, 3rd party integration and much more.',
      'Participating in full SDLC helps with product vision and overall business goals.',
      'Configured Kubernetes architecture in a bare metal VM to support clients that don’t use Docker.',
    ],
  },
  {
    id: 'manufacture-execution-system',
    icon: '⚙️',
    title: 'Manufacture Execution System (MES)',
    overview:
      'This ERP platform is developed for for a client to manage its spare part resources. Developed on top of microservices architecture for the core functionality like authentication and authorization, this application work seamlessly with customized feature for the client user. With the requirement of ecommerce-like system, this platform have advanced search functionality and stable workflow for ERP purposes. Also, with NoSQL database for the items detail, the config is highly customizable.',
    scope: 'Work',
    thumbnail: asset('media/projects/mes-1.png'),
    hero: asset('media/projects/mes-1.png'),
    tools: ['Nest JS', 'Vue JS', 'PostgreSQL', 'MongoDB', 'gRPC'],
    screenshots: [
      {
        src: asset('media/projects/mes-1.png'),
        alt: 'Login page and dashboard of the MES application',
      },
      {
        src: asset('media/projects/mes-2.png'),
        alt: 'Sparepart search page with filter and search result list',
      },
      {
        src: asset('media/projects/mes-3.png'),
        alt: 'Sparepart database and detail page',
      },
      {
        src: asset('media/projects/mes-4.png'),
        alt: 'System configuration page',
      },
    ],
    takeaways: [
      'Existing microservices core feature helps to jumpstart the development for base flow.',
      'NoSQL DB enables dynamic information for each items, but also requires careful design to avoid maintenance overhead.',
      'Helping to deploy the product in client’s environment, improves problem solving ability under pressure.',
    ],
  },
  {
    id: 'mechtech',
    icon: '📖',
    title: 'MechTech Indonesia LMS Platform',
    overview:
      'This LMS platform was developed for MechTech Indonesia. In its early years (2020), MechTech relied solely on WordPress, which limited their ability to offer online courses. To address this, a full-stack Laravel-based LMS was built. The platform features an online course area and a full-featured admin panel for managing courses, users, payment gateways, and certificate generation. It was deployed to a shared hosting provider and maintained for about a year before being revamped. With growing user base, we decided to revamp the platform to have more modern and flexible features, the revamp process includes changing the backend to use Golang and frontend into Vue JS',
    scope: 'Work',
    thumbnail: asset('media/projects/mechtech-1.png'),
    hero: asset('media/projects/mechtech-1.png'),
    tools: ['Laravel', 'MySQL', 'jQuery', 'Rich Text Editor integration (TinyMCE)', 'Payment Gateway Integration (Midtrans)', 'Golang Gin', 'Vue JS'],
    screenshots: [
      {
        src: asset('media/projects/mechtech-1.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-2.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-3.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-4.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-5.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-6.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-7.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-8.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-9.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-10.png'),
        alt: 'MechTech LMS',
      },
      {
        src: asset('media/projects/mechtech-11.png'),
        alt: 'MechTech LMS',
      },
    ],
    takeaways: [
      'Designing and building fully functional platforms requires fast adaptation for changes during the development.',
      'Migrating across different environment should be planed carefully to prevent data loss in a live product/services, especially with different database + backend frameworks.',
    ],
  },
  {
    id: 'reporting-system',
    icon: '📊',
    title: 'Auto Reporting System',
    overview:
      'A full-stack reporting system that converts Excel data into interactive visual reports. The frontend (React + TypeScript) provides a guided workflow for uploading, previewing, and configuring charts, while a Golang REST API handles data processing, storage, and report generation.',
    scope: 'Project',
    thumbnail: asset('media/projects/reporting-1.png'),
    hero: asset('media/projects/reporting-1.png'),
    tools: ['Golang', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Tailwind CSS', 'DaisyUI'],
    screenshots: [
      {
        src: asset('media/projects/reporting-1.png'),
        alt: 'Reporting system',
      },
      {
        src: asset('media/projects/reporting-2.png'),
        alt: 'Reporting system',
      },
      {
        src: asset('media/projects/reporting-3.png'),
        alt: 'Reporting system',
      },
      {
        src: asset('media/projects/reporting-4.png'),
        alt: 'Reporting system',
      },
      {
        src: asset('media/projects/reporting-5.png'),
        alt: 'Reporting system',
      },
    ],
    takeaways: [
      'Designed a full-stack architecture with React frontend and Golang REST API with a step-based workflow (upload → preview → configure → generate report).',
      'Leveraged modern stack (React, TypeScript, Vite, Tailwind, Chart.js) for performance and maintainability.',
    ],
  },
  {
    id: 'timatcher',
    icon: '👥',
    title: 'TiMatcher',
    overview:
      'TiMatcher is a platform to automate group creation with certain formulas developed by lecturers in PENS. This platform is created for a school project/competition(PENS Fest 2022 organized by SimHive/AgileTeknik. TiMatcher won the 1st best web application category. Developed for few months with Agile methodologies from the very start, with each iteration brings meaningful improvement to the product.',
    scope: 'Project',
    thumbnail: asset('media/projects/timatcher-1.png'),
    hero: asset('media/projects/timatcher-1.png'),
    tools: ['Laravel','MySQL', 'Vue JS', 'Vuetify'],
    screenshots: [
      {
        src: asset('media/projects/timatcher-1.png'),
        alt: 'TiMatcher',
      },
      {
        src: asset('media/projects/timatcher-2.png'),
        alt: 'TiMatcher',
      },
      {
        src: asset('media/projects/timatcher-3.png'),
        alt: 'TiMatcher',
      },
      {
        src: asset('media/projects/timatcher-4.png'),
        alt: 'TiMatcher',
      },
    ],
    takeaways: [
      'Agile development from ideation stage up to post-deployment stage helped a lot with breaking down the product into achievable sprints',
    ],
  },
]
