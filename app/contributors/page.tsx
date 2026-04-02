import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_CONTRIBUTORS } from '@/lib/queries'
import { ContributorData } from '@/lib/types'
import Header from '../components/Header'
import ContributorCard from '../components/ContributorCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contributors | NovaCMS',
  description: 'Meet the maintainers and contributors who build and maintain NovaCMS. Learn about their roles, contributions, and how to get involved.',
}

async function getContributors() {
  try {
    const client = getClient()
    const data = await client.raw(GET_CONTRIBUTORS, { first: 50 })
    return data?.nodeContributors?.nodes || []
  } catch (error) {
    console.error('Error fetching contributors:', error)
    return []
  }
}

export default async function ContributorsPage() {
  const items = await getContributors()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-violet-900 via-violet-800 to-violet-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contributors
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto">
              Meet the maintainers and contributors who make NovaCMS possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Contributors Yet</h2>
              <p className="text-gray-500">
                Contributors will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <ContributorCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
