import { motion, MotionConfig } from 'motion/react'
import { Link } from 'react-router'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from '../components/ui/Button'
import { hero } from '../data/hero'
import HeroVisual from './HeroVisual'
import fahadPhoto from '../assets/ChatGPT Image Aug 16, 2026, 04_34_07 PM.png'

const NOISE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/></filter><rect width="120" height="120" filter="url(#n)" opacity="0.5"/></svg>'

const left = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const photo = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-label="Introduction"
        className="relative overflow-x-clip border-b pb-24 pt-16 md:pb-32 md:pt-28 lg:pb-40 lg:pt-36"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")` }}
          />
        </div>

        <div className="container-page">
          <motion.div
            variants={left}
            initial="hidden"
            animate="show"
            className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"
          >
            <div className="max-w-2xl lg:col-span-7">
              <motion.p
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-3.5 py-1.5"
              >
                <span aria-hidden="true" className="relative flex size-2">
                  <motion.span
                    className="absolute inline-flex size-full rounded-full bg-emerald-500"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {hero.availability}
                </span>
              </motion.p>

              <motion.p variants={item} className="mt-5 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{hero.name}</span>
                <span aria-hidden="true" className="mx-2 text-muted-foreground/50">
                  ·
                </span>
                {hero.role}
              </motion.p>

              <motion.h1 variants={item} className="heading-1 mt-6 leading-[1.05]">
                {hero.headline.before}{' '}
                <span className="font-serif italic text-primary">{hero.headline.accent}</span>{' '}
                {hero.headline.after}
                <span className="text-primary">.</span>
              </motion.h1>

              <motion.p variants={item} className="body-lg mt-6 max-w-xl">
                {hero.description}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  to={hero.primary.href}
                  className={cn(
                    'group w-full sm:w-auto',
                    buttonVariants({ variant: 'primary', size: 'lg' }),
                  )}
                >
                  {hero.primary.label}
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to={hero.secondary.href}
                  className={cn(
                    'w-full sm:w-auto',
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                  )}
                >
                  {hero.secondary.label}
                </Link>
              </motion.div>

              <motion.p
                variants={item}
                className="body-sm mt-12 max-w-md border-t pt-6 text-muted-foreground"
              >
                <Code2
                  aria-hidden="true"
                  className="mr-2 inline-block size-4 -translate-y-0.5 text-muted-foreground"
                />
                {hero.tech.join(' · ')}
              </motion.p>
            </div>

            <motion.div variants={photo} className="mt-14 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <img
                  src={fahadPhoto}
                  alt="Fahad Khan — Web Developer"
                  className="aspect-[2/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%),linear-gradient(to_bottom,black_72%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_15%),linear-gradient(to_bottom,black_72%,transparent)] [-webkit-mask-composite:source-in] [mask-composite:intersect]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="container-page relative z-0 mt-16 md:mt-20"
        >
          <HeroVisual />
        </motion.div>
      </section>
    </MotionConfig>
  )
}
