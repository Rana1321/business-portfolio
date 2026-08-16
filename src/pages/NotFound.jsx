import { motion, MotionConfig } from 'motion/react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from '../components/ui/Button'

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function NotFound() {
  return (
    <main className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_65%)]" />
      <div className="container-page">
        <MotionConfig reducedMotion="user">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="py-32 text-center md:py-44 lg:py-56"
          >
            <p className="eyebrow">Error 404</p>
            <h1 className="heading-2 mt-4 sm:text-5xl lg:text-6xl">
              This page <span className="font-serif italic text-primary">doesn't exist</span>.
            </h1>
            <p className="body-lg mx-auto mt-6 max-w-xl">
              The page you're looking for may have moved, or the link is out of date. Let's get you
              back on track.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className={cn('group w-full sm:w-auto', buttonVariants({ variant: 'primary', size: 'lg' }))}
              >
                Back home
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/projects"
                className={cn('w-full sm:w-auto', buttonVariants({ variant: 'outline', size: 'lg' }))}
              >
                View my work
              </Link>
            </div>
          </motion.div>
        </MotionConfig>
      </div>
    </main>
  )
}
