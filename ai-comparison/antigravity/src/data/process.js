export const processSteps = [
  {
    step: '01',
    title: 'Discovery & System Blueprint',
    duration: 'Week 1',
    description: 'We align on business goals, map data models, select the ideal technology stack, and construct an actionable architectural blueprint with risk de-risking.',
    deliverables: [
      'System Architecture Diagrams',
      'API & Schema Specifications',
      'Project Milestones & Sprint Plan',
    ],
    icon: 'Compass',
  },
  {
    step: '02',
    title: 'Rapid Engineering Sprints',
    duration: 'Weeks 2 - 6',
    description: 'High-velocity two-week development cycles delivering fully tested, functional modules to a private staging environment with continuous client demos.',
    deliverables: [
      'Clean, modular code repository',
      'Live staging environment preview',
      'Asynchronous weekly sprint demos',
    ],
    icon: 'GitPullRequest',
  },
  {
    step: '03',
    title: 'Quality, Security & Load Testing',
    duration: 'Week 7',
    description: 'Rigorous end-to-end testing, pen-testing, query profiling, and high-concurrency stress testing to guarantee rock-solid resilience in production.',
    deliverables: [
      'Load & stress test benchmarks',
      'Security audit & sanitization',
      'Accessibility & SEO optimization',
    ],
    icon: 'ShieldCheck',
  },
  {
    step: '04',
    title: 'Zero-Downtime Production Launch',
    duration: 'Week 8 & Beyond',
    description: 'Smooth DNS switchover, automated CI/CD pipeline handover, telemetry setup (Datadog/Sentry), and comprehensive documentation for your team.',
    deliverables: [
      'Zero-downtime production rollout',
      'Monitoring & alert configuration',
      '30-day post-launch warranty & handover',
    ],
    icon: 'Rocket',
  },
];
