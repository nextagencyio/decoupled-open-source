// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeContributor {
  id: string;
  body: { value: string; summary?: string };
  githubUrl: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  role: string;
  title: string;
}

export interface NodeFeature {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuresItems: any[];
  featuresSubtitle: string;
  featuresTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  title: string;
}

export interface ParagraphFeatureItem {
  id: string;
  description: { value: string };
  icon: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeRelease {
  id: string;
  body: { value: string; summary?: string };
  breakingChanges: boolean;
  downloadUrl: string;
  path: string;
  releaseDate: { time: string };
  title: string;
  version: string;
}
