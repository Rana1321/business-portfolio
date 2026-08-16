import { motion, MotionConfig } from 'motion/react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import WorkTogetherCTA from './WorkTogetherCTA'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function FeaturedWork() {
  const [featured, ...rest] = projects

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-label="Selected work"
        className="border-b pb-24 pt-16 md:pb-32 md:pt-28 lg:pb-40 lg:pt-36"
      >
        <div className="container-page">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <motion.div variants={item} className="max-w-2xl">
              <p className="eyebrow flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                Selected Work
              </p>
              <h2 className="heading-2 mt-4">
                A selection of products and{' '}
                <span className="font-serif italic text-primary">digital experiences</span> I've
                designed and built.
              </h2>
            </motion.div>
            <motion.p variants={item} className="body-sm max-w-xs md:text-right">
              Index 01–03 — each project links to its own case study.
            </motion.p>
          </motion.div>

          <div className="mt-16 space-y-6 md:mt-20 lg:space-y-8">
            <ProjectCard project={featured} featured />
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <WorkTogetherCTA />
        </div>
      </section>
    </MotionConfig>
  )
}
