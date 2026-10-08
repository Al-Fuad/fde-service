# Nexus FDE — Senior Full-Stack Engineering Landing Page

A modern, high-performance landing page engineered for a Senior Full-Stack Development (FDE) service. Built with **React**, **Tailwind CSS**, and **Vite** following clean-code principles, modular architecture, and modern UX design patterns.

---

## 🏗️ Architecture & Project Structure

The codebase is organized into cleanly decoupled directories designed for scalability and maintainability:

```text
antigravity/
├── index.html                   # HTML entry point with SEO metadata & Plus Jakarta Sans / JetBrains Mono fonts
├── vite.config.js               # Vite bundler configuration with React plugin
├── tailwind.config.js           # Tailored dark-mode theme, brand gradients, glow effects, & typography
├── postcss.config.js            # PostCSS configuration with Tailwind CSS & Autoprefixer
├── package.json                 # Dependencies and scripts (React 18, Tailwind CSS, Lucide icons)
└── src/
    ├── main.jsx                 # React root entrypoint
    ├── App.jsx                  # Root state orchestration & layout integration
    ├── index.css                # Glassmorphic utility classes, background patterns, custom scrollbars
    ├── utils/
    │   └── helpers.js           # Utility helpers (cn class merger, smooth scrolling handler)
    ├── data/                    # Decoupled mock and content datasets
    │   ├── navigation.js        # Navbar items, social channels
    │   ├── metrics.js           # Real-world proof-of-work benchmarks & client badges
    │   ├── services.js          # Core FDE offerings, capabilities checklist, & highlights
    │   ├── techStack.js         # Categorized matrix (Frontend, Backend, DB, Cloud)
    │   ├── projects.js          # Featured case studies with metrics & tech tags
    │   ├── process.js           # 4-stage sprint development methodology
    │   ├── pricing.js           # Transparent engagement models (Sprint, MVP, Advisory)
    │   ├── testimonials.js      # Verified client reviews, ratings, & avatars
    │   └── faqs.js              # Detailed client questions & answers
    ├── components/              # Modular, reusable UI components
    │   ├── Button.jsx           # Configurable button (primary, secondary, outline, ghost) with icon transitions
    │   ├── SectionHeading.jsx   # Section title with pill badge & responsive gradient headings
    │   ├── ServiceCard.jsx      # Service capability cards with icon highlights
    │   ├── ProjectCard.jsx      # Case study cards featuring metrics grid & tech tags
    │   ├── TestimonialCard.jsx  # Client quote cards with star ratings & client credentials
    │   ├── ProcessStepCard.jsx  # Sprint process steps with deliverables checklist
    │   ├── PricingCard.jsx      # Engagement models with feature lists & highlight badges
    │   ├── TechBadge.jsx        # Technology proficiency pill badges
    │   ├── Icons.jsx            # Clean SVG brand icons (GitHub, LinkedIn, Twitter/X)
    │   └── Modal.jsx            # High-conversion Consultation Booking modal with form validation
    ├── layouts/                 # Page structure components
    │   ├── Navbar.jsx           # Fixed glassmorphic navigation bar with scroll spy & mobile drawer
    │   ├── Footer.jsx           # Footer with sitemap, social links, & back-to-top button
    │   └── MainLayout.jsx       # Layout shell wrapping Navbar, content, & Footer
    ├── sections/                # Feature-complete page sections
    │   ├── HeroSection.jsx      # Value proposition, availability indicator, dual CTAs & code terminal
    │   ├── TrustMetrics.jsx     # Production uptime, latency, and client credibility banner
    │   ├── ServicesSection.jsx  # 6 deep engineering services with capabilities
    │   ├── TechStackSection.jsx # Categorized tech matrix with interactive filtering
    │   ├── ProjectsSection.jsx  # Portfolio showcase with category filtering (All, Full-Stack, AI, Cloud)
    │   ├── ProcessSection.jsx   # 4-stage engineering sprint methodology
    │   ├── PricingSection.jsx   # Transparent engagement packages
    │   ├── TestimonialsSection.jsx # Social proof & verified reviews
    │   ├── FaqSection.jsx       # Interactive accordion FAQ
    │   └── CtaSection.jsx       # High-conversion closing banner with booking triggers
    └── pages/
        └── LandingPage.jsx      # Single-page aggregator with modal event binding
```

---

## ⚡ Key Highlights & UI/UX Features

- **Aesthetic**: Premium dark mode theme (`#0a0d14` palette) with ambient indigo/cyan glows, glassmorphism cards (`backdrop-blur-md`), and typography.
- **Interactive Terminal Preview**: Hero section features an interactive code preview widget showcasing Architecture (`Architecture.ts`), Stress Benchmarks (`Benchmark.json`), and CI/CD Pipeline (`Deploy.yml`) with one-click copy.
- **High-Conversion Consultation Flow**: Global modal system with custom preselection (e.g., clicking "Start Your Project" on the MVP tier preselects the tier in the booking form).
- **Responsive Navigation**: Glassmorphic sticky header with scroll-spy highlighting of active sections and mobile drawer menu.
- **Interactive Filters**: Case studies and tech stack support category filtering (`All`, `Full-Stack`, `AI & Data`, `Cloud & Scale`).
- **Interactive FAQ Accordion**: Expandable Q&A accordion.
- **Clean Architecture & Separation of Concerns**: Zero hardcoded strings in presentation components; content is managed within `src/data/`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```
