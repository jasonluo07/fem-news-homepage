import { Logo } from './icons'
import { MobileMenu } from './mobile-menu'

export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'New', href: '#' },
  { label: 'Popular', href: '#' },
  { label: 'Trending', href: '#' },
  { label: 'Categories', href: '#' },
] as const

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between">
      <a
        href="#"
        className="text-navy-950 hover:opacity-70 focus-visible:opacity-70"
      >
        <Logo className="h-7 w-auto lg:h-10" />
        <span className="sr-only">W. news home</span>
      </a>

      {/* Desktop navigation; below the desktop breakpoint the same links
          live in the slide-in menu. */}
      <nav aria-label="Primary" className="hidden lg:block">
        <ul className="flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-preset-6 text-navy-600 hover:text-red-500 focus-visible:text-red-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <MobileMenu links={NAV_LINKS} />
    </header>
  )
}
