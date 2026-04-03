'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import FeatureCard from './FeatureCard'
import ContributorCard from './ContributorCard'
import ReleaseCard from './ReleaseCard'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { GitBranch, Code, Star, Users, GitPullRequest, Terminal } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
  features?: any[]
  contributors?: any[]
  releases?: any[]
}

const capabilities = [
  { icon: GitBranch, label: 'Version Control' },
  { icon: Code, label: 'TypeScript SDK' },
  { icon: Star, label: 'Community Driven' },
  { icon: Users, label: 'Team Collaboration' },
  { icon: GitPullRequest, label: 'Pull Request Workflow' },
  { icon: Terminal, label: 'CLI Tools' },
]

export default function HomepageRenderer({ homepageContent, features = [], contributors = [], releases = [] }: HomepageRendererProps) {

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Features list */}
      {features.length > 0 && (
        <section className="bg-[#f8fafc] py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-950 mb-2">Features</h2>
            <p className="text-gray-500 text-sm mb-8">Core capabilities that power your workflow</p>
            <div className="border-t border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm">
              {features.slice(0, 6).map((item: any) => (
                <FeatureCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities icons */}
      <section className="bg-primary-950 py-12 border-y border-primary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-primary-800 pt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-primary-300 mb-2" strokeWidth={1.5} />
                  <span className="text-xs text-primary-200">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributors list */}
      {contributors.length > 0 && (
        <section className="bg-[#f8fafc] py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-950 mb-2">Contributors</h2>
            <p className="text-gray-500 text-sm mb-8">The people building OpenForge</p>
            <div className="border-t border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm">
              {contributors.slice(0, 6).map((item: any) => (
                <ContributorCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Releases list */}
      {releases.length > 0 && (
        <section className="bg-[#f8fafc] py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-950 mb-2">Releases</h2>
            <p className="text-gray-500 text-sm mb-8">Latest versions and changelogs</p>
            <div className="border-t border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm">
              {releases.slice(0, 4).map((item: any) => (
                <ReleaseCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <span className="font-heading">&copy; {new Date().getFullYear()} OpenForge</span>
            <span className="mt-2 sm:mt-0">Released under the MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
