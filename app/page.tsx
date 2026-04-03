import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA, GET_FEATURE_TEASERS, GET_CONTRIBUTORS, GET_RELEASES } from '@/lib/queries'

export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'NovaCMS - The Open Source CMS for the Modern Web'
  const description = 'NovaCMS is a headless content management system built for developers who demand performance, extensibility, and freedom. Ship faster with a CMS that gets out of your way.'

  return {
    title,
    description,
    keywords: ['Open Source', 'Headless CMS', 'GraphQL', 'Developer Tools', 'Community', 'TypeScript', 'Plugins'],
    openGraph: {
      title: `${title}`,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title}`,
      description,
    },
  }
}

export default async function Home() {
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()
  let homepageContent = null
  let features: any[] = []
  let contributors: any[] = []
  let releases: any[] = []

  try {
    const [homepageData, featuresData, contributorsData, releasesData] = await Promise.all([
      client.raw(GET_HOMEPAGE_DATA),
      client.raw(GET_FEATURE_TEASERS, { first: 6 }),
      client.raw(GET_CONTRIBUTORS, { first: 6 }),
      client.raw(GET_RELEASES, { first: 4 }),
    ])
    homepageContent = homepageData?.nodeHomepages?.nodes?.[0] || null
    features = featuresData?.nodeFeatures?.nodes || []
    contributors = contributorsData?.nodeContributors?.nodes || []
    releases = releasesData?.nodeReleases?.nodes || []
  } catch (error) {
    console.error('Error fetching homepage:', error)
  }

  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer
    homepageContent={homepageContent}
    features={features}
    contributors={contributors}
    releases={releases}
  />
}
