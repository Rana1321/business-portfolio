import { motion, MotionConfig } from 'motion/react'
import { Link } from 'react-router'
import { ArrowUpRight, Mail } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from '../components/ui/Button'
import { cta } from '../data/cta'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function FinalCTA() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-label="Start a project" className="border-b">
        <div className="container-page">
          <div className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32 lg:py-40">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
            />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="relative mx-auto max-w-3xl text-center"
            >
              <motion.p variants={item} className="flex items-center justify-center gap-2.5 eyebrow">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                {cta.eyebrow}
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
              </motion.p>

              <motion.h2 variants={item} className="heading-2 mt-6 sm:text-5xl lg:text-6xl">
                {cta.headingBefore}{' '}
                <span className="font-serif italic text-primary">{cta.headingAccent}</span>
              </motion.h2>

              <motion.p variants={item} className="body-lg mx-auto mt-6 max-w-2xl">
                {cta.description}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  to={cta.primary.href}
                  className={cn(
                    'group w-full sm:w-auto',
                    buttonVariants({ variant: 'primary', size: 'lg' }),
                  )}
                >
                  {cta.primary.label}
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href={cta.secondary.href}
                  className={cn(
                    'group w-full sm:w-auto',
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                  )}
                >
                  <Mail className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                  {cta.secondary.label}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
