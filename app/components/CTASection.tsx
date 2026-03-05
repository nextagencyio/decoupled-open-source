'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready to contribute?'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Get Started'

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">{title}</h2>
        {description ? (
          <div className="text-gray-400 mb-10 max-w-lg mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Join our growing community of contributors. Every pull request makes a difference.
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            {primaryLabel}
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-3.5 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
