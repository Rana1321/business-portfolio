import { motion, MotionConfig } from 'motion/react'
import { services } from '../data/services'
import ServiceItem from './ServiceItem'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Services() {
  const [primaryOne, primaryTwo, ...supporting] = services.items

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="services"
        aria-label="Services and expertise"
        className="border-b pb-24 pt-16 md:pb-32 md:pt-28 lg:pb-40 lg:pt-36"
      >
        <div className="container-page">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-3xl"
          >
            <motion.p variants={item} className="flex items-center gap-2.5 eyebrow">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
              {services.eyebrow}
            </motion.p>
            <motion.h2 variants={item} className="heading-2 mt-4">
              {services.statement.before}{' '}
              <span className="font-serif italic text-primary">{services.statement.accent}</span>{' '}
              {services.statement.after}
            </motion.h2>
            <motion.p variants={item} className="body-lg mt-6 max-w-2xl">
              {services.intro}
            </motion.p>
          </motion.div>

          <div className="mt-16 space-y-6 md:mt-20 lg:space-y-8">
            <ServiceItem service={primaryOne} featured />
            <ServiceItem service={primaryTwo} featured />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8 lg:gap-8">
            {supporting.map((service) => (
              <ServiceItem key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
