import React, { useState } from 'react';
import { ArrowRight, Code2, ShieldCheck, Zap, Sparkles, Terminal, Copy, Check } from 'lucide-react';
import Button from '../components/Button';
import { scrollToSection } from '../utils/helpers';

/**
 * High-converting Hero section with interactive architecture preview terminal
 */
export default function HeroSection({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('architecture');
  const [copied, setCopied] = useState(false);

  const snippets = {
    architecture: `// Production-Grade Full-Stack System Architecture
import { createEngine, defineStack } from '@nexus-fde/core';

export const ProductionService = defineStack({
  frontend: {
    framework: 'Next.js 14 (App Router) + React',
    styling: 'Tailwind CSS + Headless UI',
    state: 'TanStack Query + Zustand',
  },
  backend: {
    runtime: 'Node.js 20 LTS / TypeScript Strict',
    api: ['GraphQL Mesh', 'REST OpenAPI 3.1'],
    streaming: 'WebSockets & Server-Sent Events',
  },
  infrastructure: {
    cloud: 'AWS ECS Fargate + Terraform IaC',
    database: 'PostgreSQL (Multi-AZ) + Redis Cluster',
    observability: 'OpenTelemetry + Datadog APM',
    slaTarget: '99.99% Availability & < 80ms Latency',
  },
});`,
    benchmark: `// Real-Time Production Telemetry & Stress Benchmark
{
  "cluster_status": "OPTIMAL_HEALTH",
  "p95_latency_ms": 38.4,
  "p99_latency_ms": 64.2,
  "throughput_rps": 18450,
  "cache_hit_ratio": "96.8%",
  "active_instances": 8,
  "cpu_utilization": "24.6%",
  "memory_footprint": "312MB / node",
  "security_scan": "0 Vulnerabilities (PASSED)",
  "test_coverage": "94.2% unit + e2e"
}`,
    deploy: `# Zero-Downtime Automated CI/CD Pipeline
name: Deploy Production Cluster
on:
  push:
    branches: [main]

jobs:
  verify-and-ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Strict Typecheck & Test Suite
        run: pnpm test:ci --coverage
      - name: Security Scan (Trivy + Snyk)
        run: pnpm security:audit
      - name: Rolling Blue/Green Deployment
        run: terraform apply -auto-approve`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow bg-grid-pattern">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs font-medium text-slate-200 shadow-md shadow-indigo-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack Development Engineering (FDE)</span>
              <span className="text-slate-600">|</span>
              <span className="text-indigo-400 font-semibold">Accepting Q4 Projects</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Senior Full-Stack Engineering for{' '}
              <span className="text-gradient-brand">High-Growth Products</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I architect, build, and deploy production-ready web applications, high-throughput APIs, and scalable cloud systems. From greenfield MVPs to high-scale performance refactors—delivered with clean code and zero tech debt.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenConsultation}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Schedule Technical Discovery
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto"
              >
                Explore Case Studies
              </Button>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% IP Handover</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sub-80ms Latency</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Senior Velocity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0d121f]/95 border border-slate-700/80 shadow-2xl shadow-black/60 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>nexus-terminal</span>
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 border border-slate-700/60 transition-colors cursor-pointer"
                  title="Copy Code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 px-4 pt-2 bg-[#090d16]/60 border-b border-slate-800/80 text-xs font-mono overflow-x-auto">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'architecture'
                      ? 'bg-[#0d121f] text-indigo-400 font-semibold border-t-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Architecture.ts
                </button>
                <button
                  onClick={() => setActiveTab('benchmark')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'benchmark'
                      ? 'bg-[#0d121f] text-cyan-400 font-semibold border-t-2 border-cyan-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Benchmark.json
                </button>
                <button
                  onClick={() => setActiveTab('deploy')}
                  className={`px-3 py-1.5 rounded-t-lg transition-colors cursor-pointer ${
                    activeTab === 'deploy'
                      ? 'bg-[#0d121f] text-emerald-400 font-semibold border-t-2 border-emerald-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Deploy.yml
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto max-h-[380px]">
                <pre className="text-indigo-200/90 selection:bg-indigo-600/40">
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal status bar */}
              <div className="px-4 py-2 bg-[#080b12] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>CI/CD: Passed (100%)</span>
                </div>
                <span>Strict TypeScript 5.5</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
