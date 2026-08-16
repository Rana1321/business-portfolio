import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from '../components/ui/Button'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function WorkTogetherCTA() {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="mt-24 md:mt-32"
    >
      <div className="relative overflow-hidden rounded-2xl border bg-card px-6 py-16 text-center shadow-card sm:px-10 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:44px_44px] opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow flex items-center justify-center gap-2.5">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            Have a project in mind?
          </p>
          <h2 className="heading-2 mt-4">
            Let's turn your idea into{' '}
            <span className="font-serif italic text-primary">something people want to use</span>.
          </h2>
          <p className="body-lg mt-5">
            Whether you're starting a new product, building a SaaS platform, or improving an
            existing digital experience.
          </p>
          <Link
            to="/contact"
            className={cn(
              'group mt-9 inline-flex',
              buttonVariants({ variant: 'primary', size: 'lg' }),
            )}
          >
            Let's Work Together
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
