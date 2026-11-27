'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

const stats = [
  { value: 5, suffix: '+', label: 'End-to-End Analytics Projects' },
  { value: 2, suffix: 'x', label: 'IBM Certified (Data & AI)' },
  { value: 1, suffix: '', label: 'Published AI Research Paper' },
  { value: 100, suffix: '%', label: 'Data-Driven Focus' },
]

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(to)
      return
    }
    const controls = animate(0, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export function StatsStrip() {
  return (
    <section id="impact" aria-label="Impact metrics" className="scroll-mt-24">
      <dl className="grid grid-cols-2 divide-border overflow-hidden rounded-2xl border border-border/70 bg-card/50 shadow-sm backdrop-blur-xl sm:grid-cols-4 sm:divide-x">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse items-center gap-1 px-4 py-6 text-center ${i < 2 ? 'border-b border-border sm:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-border sm:border-r-0' : ''}`}
          >
            <dt className="text-pretty text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</dt>
            <dd className="bg-gradient-to-br from-emerald-600 to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl dark:from-emerald-400 dark:to-cyan-300">
              <CountUp to={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
