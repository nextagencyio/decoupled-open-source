'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const defaultStats = [
  { value: '12K+', label: 'Stars' },
  { value: '480+', label: 'Contributors' },
  { value: '3.2M', label: 'Downloads' },
  { value: '99.9%', label: 'Uptime' },
]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || defaultStats

  if (!stats || stats.length === 0) return null

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100 py-8">
          <div className="flex flex-wrap items-center gap-x-1 text-sm text-gray-400">
            {stats.map((stat: any, i: number) => (
              <span key={stat.id || i} className="flex items-center">
                {i > 0 && <span className="mx-3 text-gray-200">/</span>}
                <span className="font-heading font-semibold text-gray-900 mr-1.5">{stat.value || stat.statValue}</span>
                {stat.label || stat.statLabel || stat.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
