import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from './ui/Button'
import { navbar } from '../data/navbar'
import fahadPhoto from '../assets/ChatGPT Image Aug 16, 2026, 04_34_07 PM.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (href) => {
    if (href.includes('#')) return pathname === '/'
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <img
            src={fahadPhoto}
            alt=""
            aria-hidden="true"
            className="w-8 aspect-[2/3] rounded-lg object-cover"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{navbar.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navbar.links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'rounded-md text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
                isActive(link.href) ? 'text-foreground' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={navbar.cta.href}
            className={cn('hidden md:inline-flex', buttonVariants({ variant: 'primary', size: 'sm' }))}
          >
            {navbar.cta.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-9 items-center justify-center rounded-lg border text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t bg-background md:hidden"
        >
          <div className="container-page py-4">
            <ul className="space-y-1">
              {navbar.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
                      isActive(link.href) ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to={navbar.cta.href}
                  onClick={() => setOpen(false)}
                  className={cn('w-full', buttonVariants({ variant: 'primary', size: 'md' }))}
                >
                  {navbar.cta.label}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
