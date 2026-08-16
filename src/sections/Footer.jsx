import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import SocialIcon from '../components/ui/social-icons'
import { footer } from '../data/footer'

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-page pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-serif italic text-2xl text-foreground">{footer.name}</p>
            <p className="body-sm mt-3 max-w-xs">{footer.role}</p>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <p className="eyebrow">{footer.nav.label}</p>
            <ul className="mt-5 space-y-3">
              {footer.nav.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="eyebrow">{footer.social.label}</p>
            <ul className="mt-5 flex items-center gap-4">
              {footer.social.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
                  >
                    <SocialIcon name={link.label} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={footer.emailHref}
              className="group mt-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              {footer.email}
              <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
            <a
              href={footer.phoneHref}
              className="group mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
            >
              {footer.phone}
              <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
            <p className="body-sm mt-3">{footer.location}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="body-sm">{footer.copyright}</p>
          <p className="flex items-center gap-2 body-sm">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
            Available Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
