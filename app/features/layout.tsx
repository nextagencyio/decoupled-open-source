import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore the powerful features of OpenForge: plugin system, CLI tools, GraphQL API, testing framework, and more.',
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
