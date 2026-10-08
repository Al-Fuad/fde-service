export const brand = {
  name: 'FDE Studio',
  tagline: 'Full-Stack Development',
  email: 'hello@fde.studio',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Full-Stack Development Partner',
  title: 'Ship products that look sharp and scale with confidence.',
  highlight: 'scale with confidence',
  description:
    'I help startups and teams design, build, and launch production-ready web applications — from polished interfaces to robust APIs and cloud deployment.',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'View selected work', href: '#work' },
  stats: [
    { value: '8+', label: 'Years building for the web' },
    { value: '40+', label: 'Projects delivered' },
    { value: '100%', label: 'Client-focused delivery' },
  ],
}

export const services = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description:
      'Responsive, accessible interfaces with React, performance tuning, and design systems that stay consistent as you grow.',
    icon: 'layout',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'REST and GraphQL APIs, authentication, databases, and integrations built for reliability, security, and clear documentation.',
    icon: 'server',
  },
  {
    id: 'fullstack',
    title: 'End-to-End Product',
    description:
      'From discovery and architecture through deployment — one partner for your MVP, refactor, or greenfield platform.',
    icon: 'layers',
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description:
      'CI/CD pipelines, containerization, monitoring, and cloud setup so releases are predictable and downtime stays rare.',
    icon: 'cloud',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description:
      'Code reviews, stack decisions, and roadmap planning when you need senior judgment without a full-time hire.',
    icon: 'compass',
  },
  {
    id: 'maintenance',
    title: 'Ongoing Support',
    description:
      'Feature iterations, bug fixes, and dependency upgrades with clear communication and sensible SLAs.',
    icon: 'shield',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We align on goals, users, constraints, and success metrics so every technical choice serves the business.',
  },
  {
    step: '02',
    title: 'Design & Plan',
    description:
      'Architecture, milestones, and a realistic timeline — with wireframes or specs where they add clarity.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    description:
      'Short feedback loops, demos you can share with stakeholders, and code you can maintain after handoff.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'Production deployment, documentation, and optional retainer support as your product evolves.',
  },
]

export const projects = [
  {
    id: 'saas-dashboard',
    title: 'Analytics SaaS Dashboard',
    description:
      'Real-time metrics, role-based access, and a component library shared across marketing and app surfaces.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-sky-500/20 to-indigo-600/20',
  },
  {
    id: 'ecommerce',
    title: 'Headless Commerce Platform',
    description:
      'Custom storefront with Stripe, inventory sync, and admin tools for a growing retail brand.',
    tags: ['Next.js', 'Stripe', 'Redis'],
    gradient: 'from-cyan-500/20 to-teal-600/20',
  },
  {
    id: 'internal-tools',
    title: 'Internal Operations Hub',
    description:
      'Workflow automation and reporting that replaced spreadsheets and cut manual processing time by 60%.',
    tags: ['React', 'Python', 'AWS'],
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
]

export const testimonials = [
  {
    id: 't1',
    quote:
      'Clear communication, thoughtful architecture, and a UI our customers actually compliment. We shipped three months ahead of our original plan.',
    name: 'Sarah Chen',
    role: 'CEO, Northline Labs',
  },
  {
    id: 't2',
    quote:
      'Rare combination of product sense and deep engineering. The codebase was clean enough that our team could take over without friction.',
    name: 'Marcus Webb',
    role: 'CTO, Stackform',
  },
  {
    id: 't3',
    quote:
      'Responsive, proactive, and honest about trade-offs. Exactly what we needed for a complex integration project.',
    name: 'Elena Rodriguez',
    role: 'Product Lead, Meridian Health',
  },
]

export const cta = {
  title: 'Ready to build something great?',
  description:
    'Tell me about your project — timeline, stack, and goals. I typically respond within one business day.',
  buttonLabel: 'Get in touch',
  href: '#contact',
}

export const footer = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}
