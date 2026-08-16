import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, MotionConfig } from 'motion/react'
import { Link } from 'react-router'
import { ArrowLeft, CheckCircle2, ChevronDown, Send } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from '../components/ui/Button'
import { contact } from '../data/contact'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  projectType: z.string().min(1, 'Select a project type'),
  budget: z.string().min(1, 'Select a budget'),
  timeline: z.string().min(1, 'Select a timeline'),
  details: z.string().min(10, 'Please include a few details (10+ characters)'),
})

const inputClass =
  'w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-ring/50'

const selectClass = cn(inputClass, 'appearance-none pr-10')

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      budget: '',
      timeline: '',
      details: '',
    },
  })

  if (submitted) {
    return (
      <main>
        <section className="container-page pb-24 pt-16 md:pt-24 lg:pb-32 lg:pt-28">
          <MotionConfig reducedMotion="user">
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-xl rounded-2xl border bg-card p-8 text-center shadow-card sm:p-10"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/10">
                <CheckCircle2 aria-hidden="true" className="size-6 text-emerald-500" />
              </div>
              <h1 className="heading-3 mt-6">Inquiry submitted</h1>
              <p className="body mt-4">
                Thanks, <span className="font-medium text-foreground">{submitted.name}</span>.
                I've received your project details and will reply to{' '}
                <span className="font-medium text-foreground">{submitted.email}</span> within
                1–2 business days.
              </p>
              <ol className="mt-8 space-y-3 text-left">
                {contact.steps.map((step, index) => (
                  <li key={step.label} className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {step.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">{step.note}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => {
                    reset()
                    setSubmitted(null)
                  }}
                  className={cn('w-full sm:w-auto', buttonVariants({ variant: 'outline', size: 'lg' }))}
                >
                  Send another inquiry
                </button>
                <Link to="/" className={cn('w-full sm:w-auto', buttonVariants({ variant: 'primary', size: 'lg' }))}>
                  Back home
                </Link>
              </div>
            </motion.div>
          </MotionConfig>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="container-page overflow-x-clip pb-24 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28">
        <MotionConfig reducedMotion="user">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              className="max-w-xl lg:col-span-5"
            >
              <Link
                to="/"
                className={cn(
                  'group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                )}
              >
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back home
              </Link>
              <p className="eyebrow mt-10">{contact.eyebrow}</p>
              <h1 className="heading-2 mt-4">{contact.title}</h1>
              <p className="body-lg mt-5">{contact.description}</p>
              <ol className="mt-10 space-y-4 border-t pt-8">
                {contact.steps.map((step, index) => (
                  <li key={step.label} className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {step.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">{step.note}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.form
              variants={fade}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit((values) => setSubmitted(values))}
              noValidate
              className="mt-14 rounded-2xl border bg-card p-6 shadow-card sm:p-8 lg:col-span-7 lg:mt-0"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={cn(inputClass, errors.name && 'border-destructive')}
                    {...register('name')}
                  />
                  <FieldError id="name-error" message={errors.name?.message} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={cn(inputClass, errors.email && 'border-destructive')}
                    {...register('email')}
                  />
                  <FieldError id="email-error" message={errors.email?.message} />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-foreground">
                    Project type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      aria-invalid={errors.projectType ? true : undefined}
                      aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                      className={cn(selectClass, errors.projectType && 'border-destructive')}
                      {...register('projectType')}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {contact.projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    />
                  </div>
                  <FieldError id="projectType-error" message={errors.projectType?.message} />
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-foreground">
                    Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      aria-invalid={errors.budget ? true : undefined}
                      aria-describedby={errors.budget ? 'budget-error' : undefined}
                      className={cn(selectClass, errors.budget && 'border-destructive')}
                      {...register('budget')}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {contact.budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    />
                  </div>
                  <FieldError id="budget-error" message={errors.budget?.message} />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-foreground">
                  Timeline
                </label>
                <div className="relative">
                  <select
                    id="timeline"
                    aria-invalid={errors.timeline ? true : undefined}
                    aria-describedby={errors.timeline ? 'timeline-error' : undefined}
                    className={cn(selectClass, errors.timeline && 'border-destructive')}
                    {...register('timeline')}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {contact.timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  />
                </div>
                <FieldError id="timeline-error" message={errors.timeline?.message} />
              </div>

              <div className="mt-4">
                <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-foreground">
                  Project details
                </label>
                <textarea
                  id="details"
                  rows={5}
                  aria-invalid={errors.details ? true : undefined}
                  aria-describedby={errors.details ? 'details-error' : undefined}
                  className={cn(inputClass, 'resize-y', errors.details && 'border-destructive')}
                  {...register('details')}
                />
                <FieldError id="details-error" message={errors.details?.message} />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className={cn('group w-full sm:w-auto', buttonVariants({ variant: 'primary', size: 'lg' }))}
                >
                  Send inquiry
                  <Send className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <p className="text-xs text-muted-foreground">I typically reply within 1–2 business days.</p>
              </div>
            </motion.form>
          </div>
        </MotionConfig>
      </section>
    </main>
  )
}
