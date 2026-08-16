import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'
import ProjectPreview from './ProjectPreview'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="h-full"
    >
      <Link
        to={project.slug}
        aria-label={`View case study for ${project.name}`}
        className={cn(
          'group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-ring/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden bg-muted/40',
            featured ? 'aspect-[16/9] sm:aspect-[16/8]' : 'aspect-[16/10]',
          )}
        >
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectPreview id={project.id} />
          </div>
        </div>

        <div
          className={cn(
            'flex flex-1 flex-col p-6 sm:p-8',
            featured && 'md:flex-row md:items-start md:gap-12',
          )}
        >
          <div className={cn('min-w-0', featured && 'md:flex-1')}>
            <p className="eyebrow">
              {project.number} · {project.category}
            </p>
            <h3 className="heading-4 mt-4">
              {project.name}{' '}
              <span className="font-normal text-muted-foreground">— {project.title}</span>
            </h3>
            <p className={cn('body mt-3', featured && 'md:max-w-lg')}>{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className={cn('shrink-0', featured ? 'md:mt-0 md:self-end' : 'mt-auto pt-8')}>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              View Case Study
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
