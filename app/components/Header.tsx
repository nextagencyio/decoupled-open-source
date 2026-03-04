'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { name: 'Features', href: '/features' },
  { name: 'Contributors', href: '/contributors' },
  { name: 'Releases', href: '/releases' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const banner = document.querySelector('[data-demo-banner]') as HTMLElement | null
    if (banner) {
      setBannerHeight(banner.offsetHeight)
      const observer = new MutationObserver(() => {
        setBannerHeight(banner.offsetHeight)
      })
      observer.observe(banner, { attributes: true, childList: true, subtree: true })
      return () => observer.disconnect()
    }
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header
      className="fixed w-full z-50 bg-white/80 backdrop-blur-sm"
      style={{ top: bannerHeight }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading text-lg tracking-tight text-gray-900 hover:text-accent-500 transition-colors">
            OpenForge
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-gray-900'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
