import { motion } from 'motion/react'
import { Zap } from 'lucide-react'
import { cn } from '../lib/utils'

const BARS = [45, 70, 55, 85, 60, 95, 75, 65, 88]
const NAV = ['Overview', 'Products', 'Customers', 'Settings']

export default function HeroVisual() {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-0 mx-auto w-full max-w-4xl"
    >
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_70%)]" />

      <div className="absolute inset-0 translate-y-4 rounded-2xl border bg-muted/60" />

      <div className="relative overflow-hidden rounded-2xl border bg-card shadow-card">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted" />
            <span className="size-2.5 rounded-full bg-muted" />
            <span className="size-2.5 rounded-full bg-primary" />
          </div>
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 font-serif italic text-[11px] text-primary">
              FK
            </span>
            <span className="font-mono text-xs text-muted-foreground">fahadkhan.dev</span>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground sm:inline-flex">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Production
          </span>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-6 p-5 sm:p-6">
          <nav className="hidden flex-col gap-1 border-r pr-5 sm:flex">
            {NAV.map((label, index) => (
              <span
                key={label}
                className={cn(
                  'rounded-md px-2.5 py-1.5 text-xs font-medium',
                  index === 0 ? 'bg-muted text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            ))}
          </nav>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-xl bg-primary/10 px-4 py-3">
              <div className="space-y-2">
                <div className="h-2 w-24 rounded-full bg-muted" />
                <div className="h-2 w-32 rounded-full bg-muted" />
              </div>
              <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
                Ship
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="space-y-2 rounded-lg border p-3">
                  <div className="h-2 w-3/4 rounded-full bg-muted" />
                  <div className="h-2 w-1/2 rounded-full bg-muted" />
                </div>
              ))}
            </div>

            <div className="flex h-16 items-end gap-1.5 pt-2">
              {BARS.map((height, index) => (
                <div
                  key={index}
                  className={cn('flex-1 rounded-sm', index === 5 ? 'bg-primary' : 'bg-muted')}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -top-5 flex size-10 items-center justify-center rounded-xl border bg-card shadow-card sm:-right-6">
        <Zap className="size-4 text-primary" />
      </div>

      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border bg-card px-4 py-2 text-xs font-medium shadow-card sm:left-8 sm:translate-x-0">
        <span className="size-2 rounded-full bg-emerald-500" />
        <span className="font-mono">Live in production</span>
      </div>
    </motion.div>
  )
}
