import Link from 'next/link'
import { DrupalContributor } from '@/lib/types'
import { ArrowRight } from 'lucide-react'

interface ContributorCardProps {
  item: DrupalContributor
}

export default function ContributorCard({ item }: ContributorCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group flex items-center justify-between py-6 border-b border-gray-100"
    >
      <div className="flex-1 min-w-0 pr-4">
        <div className="flex items-baseline gap-3">
          <h3 className="font-heading text-lg font-semibold text-gray-900 group-hover:text-accent-500 transition-colors truncate">
            {item.title}
          </h3>
          {(item as any).role && (
            <span className="text-xs text-gray-300 hidden sm:inline">{(item as any).role}</span>
          )}
        </div>
        {(item as any).githubUsername && (
          <p className="text-sm text-gray-400 mt-1">@{(item as any).githubUsername}</p>
        )}
      </div>
      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
    </Link>
  )
}
