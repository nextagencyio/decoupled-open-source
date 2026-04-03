
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalFeature extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface FeatureTeaserData {
  nodeFeatures: {
    nodes: DrupalFeature[]
  }
}

export interface DrupalContributor extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  githubUrl?: string
  role?: string
  photo?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ContributorData {
  nodeContributors: {
    nodes: DrupalContributor[]
  }
}

export interface DrupalRelease extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  version?: string
  releaseDate?: {
    timestamp: number
  }
  downloadUrl?: string
  breakingChanges?: boolean
}

export interface ReleaseData {
  nodeReleases: {
    nodes: DrupalRelease[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeatureItem[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeatureItem {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

export interface ContributorsData {
  nodeContributors: {
    nodes: DrupalContributor[]
  }
}

export interface ReleasesData {
  nodeReleases: {
    nodes: DrupalRelease[]
  }
}
