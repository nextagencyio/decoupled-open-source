'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Build better, together'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Developer-first open source toolkit for the modern web'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=2000&q=80&fit=crop"
          alt="Open source code collaboration"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-accent-950" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-sm font-medium text-accent-300">Open Source &middot; MIT Licensed</span>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white leading-[0.9] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">{subtitle}</p>
        )}
        {description && (
          <div className="text-gray-300 max-w-xl mb-10 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/features"
            className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-medium px-6 py-3.5 rounded-lg text-sm transition-colors duration-200"
          >
            Get Started
          </a>
          <div className="font-heading text-sm text-gray-200 bg-gray-950/80 border border-gray-700/50 rounded-lg px-6 py-3.5 backdrop-blur-sm">
            <span className="text-accent-400">$</span> npm install openforge
          </div>
        </div>
      </div>
    </section>
  )
}
