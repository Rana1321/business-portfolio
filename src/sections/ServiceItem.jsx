import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

function FlowStack({ flow }) {
  return (
    <div className="flex flex-col">
      {flow.map((step, index) => (
        <div key={step} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 size-2 shrink-0 rounded-full border',
                index === 0 ? 'border-primary bg-primary' : 'border-border bg-card',
              )}
            />
            {index < flow.length - 1 && (
              <span aria-hidden="true" className="w-px flex-1 bg-border" />
            )}
          </div>
          <span
            className={cn(
              'pb-4 font-mono text-[11px] uppercase tracking-widest',
              index === 0 ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ServiceItem({ service, featured = false }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="h-full"
    >
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-ring/50 hover:shadow-lg sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <span aria-hidden="true" className="font-serif italic text-2xl leading-none text-primary/70">
            {service.number}
          </span>
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary"
          >
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <div
          className={cn(
            'mt-8',
            featured && 'lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12',
          )}
        >
          <div className="min-w-0">
            <h3 className={featured ? 'heading-3' : 'heading-4'}>{service.title}</h3>
            <p className="body mt-3 max-w-xl">{service.description}</p>
            <ul className="mt-6 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                >
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          {featured && (
            <div className="mt-10 hidden lg:mt-2 lg:block lg:pt-1">
              <FlowStack flow={service.flow} />
            </div>
          )}
        </div>

        {!featured && (
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t pt-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Flow
            </span>
            {service.flow.map((step, index) => (
              <span key={step} className="flex items-center gap-3">
                {index > 0 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3 shrink-0 text-muted-foreground/40"
                    strokeWidth={1.5}
                  />
                )}
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {step}
                </span>
              </span>
            ))}
          </div>
        )}
      </article>
    </motion.div>
  )
}
