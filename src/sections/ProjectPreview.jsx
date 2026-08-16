import { Package, Shirt, Watch } from 'lucide-react'
import { cn } from '../lib/utils'

const BARS = [40, 65, 50, 80, 60, 90, 70, 85, 55]
const NAV = ['Overview', 'Operations', 'Workflows', 'Customers', 'Settings']
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const SCHEDULE = [
  { time: '09:00', subject: 'Mathematics', active: true, progress: 70 },
  { time: '11:30', subject: 'Science', active: false, progress: 45 },
  { time: '14:00', subject: 'Literature', active: false, progress: 30 },
]
const PRODUCTS = [Shirt, Watch, Package]
const PRODUCT_LABELS = ['Essentials', 'Precision', 'Everyday']

function Chrome({ url, badge }) {
  return (
    <div className="flex items-center justify-between border-b px-3.5 py-2.5">
      <div className="flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="size-2.5 rounded-full bg-primary" />
      </div>
      <span className="font-mono text-[10px] text-muted-foreground">{url}</span>
      <span className="flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
        <span className="size-1 rounded-full bg-primary" />
        {badge}
      </span>
    </div>
  )
}

function NexaPreview() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/40 p-4 sm:p-6">
      <div className="w-full overflow-hidden rounded-xl border bg-background shadow-sm">
        <Chrome url="app.nexa.io" badge="Live" />
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.3fr)]">
          <div className="hidden border-r p-3 sm:flex sm:flex-col sm:gap-1">
            <span className="mb-2 flex size-6 items-center justify-center rounded-md bg-primary/10 font-serif italic text-[11px] text-primary">
              N
            </span>
            {NAV.map((label, index) => (
              <span
                key={label}
                className={cn(
                  'rounded-md px-2 py-1 text-[11px] font-medium',
                  index === 0 ? 'bg-muted text-foreground' : 'text-muted-foreground',
                )}
              >
                {label}
              </span>
            ))}
            <div className="mt-auto flex items-center gap-2 rounded-md bg-muted/60 p-2">
              <span className="size-5 rounded-full bg-muted" />
              <span className="h-2 w-10 rounded-full bg-muted" />
            </div>
          </div>
          <div className="space-y-3 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className={cn(
                    'space-y-2 rounded-lg border p-2.5',
                    item === 0 && 'border-primary/30 bg-primary/5',
                  )}
                >
                  <div className="h-1.5 w-3/5 rounded-full bg-muted" />
                  <div className="h-1.5 w-4/5 rounded-full bg-muted" />
                  <div className="h-1.5 w-2/5 rounded-full bg-muted/60" />
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1 rounded-lg border p-2.5">
              {BARS.map((height, index) => (
                <div
                  key={index}
                  className={cn('flex-1 rounded-sm', index === 4 || index === 7 ? 'bg-primary' : 'bg-muted')}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="hidden space-y-2 sm:block">
              {[0, 1].map((row) => (
                <div key={row} className="flex items-center gap-2.5 rounded-lg border p-2.5">
                  <span className="size-4 shrink-0 rounded-full bg-muted" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-1.5 w-2/5 rounded-full bg-muted" />
                    <div className="h-1.5 w-3/5 rounded-full bg-muted/70" />
                  </div>
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-[9px] font-medium',
                      row === 0 ? 'bg-primary/10 text-primary' : 'border text-muted-foreground',
                    )}
                  >
                    {row === 0 ? 'Active' : 'Draft'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AtlasPreview() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/40 p-4 sm:p-6">
      <div className="w-full overflow-hidden rounded-xl border bg-background shadow-sm">
        <Chrome url="atlas.edu" badge="Term 3" />
        <div className="space-y-3 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-foreground">This week</span>
            <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              Schedule
            </span>
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {DAYS.map((day, index) => (
              <div
                key={index}
                className={cn(
                  'flex aspect-square items-center justify-center rounded-lg border text-[11px] font-medium',
                  index === 2
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground',
                )}
              >
                {day}
              </div>
            ))}
          </div>
          {SCHEDULE.map(({ time, subject, active, progress }) => (
            <div
              key={subject}
              className={cn('rounded-lg border p-3', active && 'border-primary/30 bg-primary/5')}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-muted-foreground">{time}</span>
                <span className="text-[11px] font-medium text-foreground">{subject}</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((student) => (
                    <span
                      key={student}
                      className={cn(
                        'size-4 rounded-full border',
                        student === 0
                          ? active
                            ? 'border-primary/40 bg-primary/20'
                            : 'border'
                          : '',
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-muted" />
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-muted">
                  <div
                    className={cn('h-full rounded-full', active ? 'bg-primary' : 'bg-muted-foreground/40')}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-mono text-[9px] text-muted-foreground">{progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FormaPreview() {
  return (
    <div className="flex h-full items-center justify-center bg-muted/40 p-4 sm:p-6">
      <div className="w-full overflow-hidden rounded-xl border bg-background shadow-sm">
        <Chrome url="forma.store" badge="New" />
        <div className="space-y-3 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-foreground">New arrivals</span>
            <span className="font-mono text-[10px] text-muted-foreground">Featured</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {PRODUCTS.map((Icon, index) => (
              <div
                key={index}
                className={cn(
                  'flex flex-col items-center gap-2 rounded-lg border bg-card p-2.5 sm:p-3',
                  index === 1 && '-translate-y-1 border-primary/40',
                )}
              >
                <span
                  className={cn(
                    'flex size-8 items-center justify-center rounded-md sm:size-10',
                    index === 1 ? 'bg-primary/10' : 'bg-muted',
                  )}
                >
                  <Icon
                    className={cn('size-3.5 sm:size-4', index === 1 ? 'text-primary' : 'text-muted-foreground')}
                  />
                </span>
                <span className="text-[10px] font-medium text-foreground">{PRODUCT_LABELS[index]}</span>
                <span className="h-1.5 w-3/4 rounded-full bg-muted" />
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[9px] font-medium',
                    index === 1 ? 'bg-primary text-primary-foreground' : 'border text-muted-foreground',
                  )}
                >
                  Add
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectPreview({ id }) {
  if (id === 'nexa') return <NexaPreview />
  if (id === 'atlas') return <AtlasPreview />
  if (id === 'forma') return <FormaPreview />
  return null
}
