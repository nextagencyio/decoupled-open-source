import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_RELEASES } from '@/lib/queries'
import { ReleaseData } from '@/lib/types'
import Header from '../components/Header'
import ReleaseCard from '../components/ReleaseCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Releases | NovaCMS',
  description: 'Browse NovaCMS release history, changelogs, and downloads. Stay up to date with the latest features, bug fixes, and security patches.',
}

async function getReleases() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_RELEASES, { first: 50 })
    return data?.nodeReleases?.nodes || []
  } catch (error) {
    console.error('Error fetching releases:', error)
    return []
  }
}

export default async function ReleasesPage() {
  const items = await getReleases()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-violet-900 via-violet-800 to-violet-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Releases
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto">
              Download the latest version, review changelogs, and track the project's evolution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Releases Yet</h2>
              <p className="text-gray-500">
                Releases will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ReleaseCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
