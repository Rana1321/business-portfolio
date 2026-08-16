import { motion, MotionConfig } from 'motion/react'
import { about } from '../data/about'

const NOISE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/></filter><rect width="120" height="120" filter="url(#n)" opacity="0.5"/></svg>'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

function BlockLabel({ index, children }) {
  return (
    <p className="flex items-center gap-2.5 eyebrow">
      <span aria-hidden="true" className="font-mono text-primary">
        {index}
      </span>
      <span aria-hidden="true" className="h-px w-6 bg-border" />
      {children}
    </p>
  )
}

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        aria-label="About me"
        className="relative overflow-x-clip border-b pb-24 pt-16 md:pb-32 md:pt-28 lg:pb-40 lg:pt-36"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_65%)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")` }}
          />
        </div>

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
              {about.eyebrow}
            </motion.p>
            <motion.h2 variants={item} className="heading-2 mt-4 lg:text-5xl">
              {about.statement.before}{' '}
              <span className="font-serif italic text-primary">{about.statement.accent}</span>
              {about.statement.after}
            </motion.h2>
            <motion.p variants={item} className="body-lg mt-6 max-w-2xl">
              {about.intro}
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-12 lg:gap-8">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-7"
            >
              <div className="relative h-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-2 rounded-2xl border bg-muted/60"
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-card">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_30%_20%,black,transparent)]"
                  />
                  <div className="relative flex flex-col gap-12 p-8 sm:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-5">
                        <span
                          aria-hidden="true"
                          className="flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-primary/10 font-serif italic text-xl text-primary"
                        >
                          {about.monogram}
                        </span>
                        <div>
                          <p className="eyebrow">{about.visual.label}</p>
                          <p className="mt-3 font-serif italic text-3xl leading-tight text-foreground sm:text-4xl">
                            {about.visual.line}
                          </p>
                        </div>
                      </div>
                      <span className="hidden shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground sm:inline-flex">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        {about.availability}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t pt-6">
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {about.visual.meta}
                      </p>
                      <dl className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
                        {[
                          ['Name', about.name],
                          ['Based in', about.location],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-baseline gap-2">
                            <dt className="body-sm">{label}</dt>
                            <dd className="text-sm font-medium text-foreground">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-5 lg:border-l lg:pl-8"
            >
              <BlockLabel index={about.whoIAm.index}>{about.whoIAm.title}</BlockLabel>
              <h3 className="heading-3 mt-4">{about.whoIAm.heading}</h3>
              <div className="mt-6 space-y-4">
                {about.whoIAm.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-8 font-serif italic text-lg text-foreground">— {about.name}</p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-8">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-5"
            >
              <BlockLabel index={about.whatIDo.index}>{about.whatIDo.title}</BlockLabel>
              <p className="body mt-6 max-w-sm">{about.whatIDo.note}</p>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-8 lg:col-span-7 lg:mt-0 lg:border-l lg:pl-8"
            >
              <ul>
                {about.whatIDo.items.map((service, serviceIndex) => (
                  <li
                    key={service.title}
                    className="group flex gap-6 border-t py-5 first:border-t-0 sm:gap-8"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                    >
                      0{serviceIndex + 1}
                    </span>
                    <div>
                      <h4 className="heading-4 transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h4>
                      <p className="body-sm mt-1.5">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-5"
            >
              <BlockLabel index={about.experience.index}>{about.experience.title}</BlockLabel>
              <p className="body mt-6 max-w-sm">{about.experience.note}</p>
              <ul className="mt-8">
                {about.experience.items.map((exp) => (
                  <li key={exp.title} className="flex items-start gap-4 border-t py-5 first:border-t-0">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <div>
                      <h4 className="heading-4">{exp.title}</h4>
                      <p className="body-sm mt-1.5">{exp.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="lg:col-span-7 lg:border-l lg:pl-8"
            >
              <BlockLabel index={about.philosophy.index}>{about.philosophy.title}</BlockLabel>
              <ul className="mt-8">
                {about.philosophy.items.map((principle, principleIndex) => (
                  <li
                    key={principle.title}
                    className="group border-t py-6 first:border-t-0 lg:py-7"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span
                        aria-hidden="true"
                        className="font-serif italic text-4xl leading-none text-primary/70 transition-colors duration-300 group-hover:text-primary sm:text-5xl"
                      >
                        0{principleIndex + 1}
                      </span>
                      <div>
                        <h4 className="heading-3">{principle.title}</h4>
                        <p className="body mt-2">{principle.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  )
}
