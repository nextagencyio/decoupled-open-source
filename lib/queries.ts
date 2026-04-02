// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_FEATURE_TEASERS = gql`
  query GetFeatureTeasers($first: Int = 10) {
    nodeFeatures(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeFeature {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed summary }
        statsItems { ... on ParagraphStatItem { id title description { processed } icon } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed summary }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeFeature {
            id
            title
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeContributor {
            id
            title
            body {
              processed
            }
            githubUrl
            role
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeRelease {
            id
            title
            body {
              processed
            }
            version
            releaseDate {
              timestamp
            }
            downloadUrl
            breakingChanges
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuresTitle
            featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description {
                  processed
                }
                icon
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_CONTRIBUTORS = gql`
  query GetContributors($first: Int = 10) {
    nodeContributors(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeContributor {
          body { processed summary }
          role
          githubUsername
          contributionsCount
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_CONTRIBUTOR_BY_PATH = gql`
  query GetContributorByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeContributor {
            id
            title
            path
          body { processed summary }
          role
          githubUsername
          contributionsCount
          photo { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_RELEASES = gql`
  query GetReleases($first: Int = 10) {
    nodeReleases(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeRelease {
          body { processed summary }
          versionNumber
          releaseDate { timestamp }
          releaseType
          downloadUrl
          isLatest
        }
      }
    }
  }
`

export const GET_RELEASE_BY_PATH = gql`
  query GetReleaseByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeRelease {
            id
            title
            path
          body { processed summary }
          versionNumber
          releaseDate { timestamp }
          releaseType
          downloadUrl
          isLatest
          }
        }
      }
    }
  }
`
