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
    <section className="bg-white pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-heading text-sm text-accent-500 tracking-wide mb-6">$ npm install openforge</p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-gray-950 leading-[0.9] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-xl mb-8">{subtitle}</p>
        )}
        {description && (
          <div className="text-gray-400 max-w-xl" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </section>
  )
}
