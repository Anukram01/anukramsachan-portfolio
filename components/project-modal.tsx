'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Target, Wrench, X } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/projects-data'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const previous = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close case study"
            tabIndex={-1}
            onClick={onClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ y: 48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 48, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative max-h-[88dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-8"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border sm:hidden" aria-hidden="true" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  {project.category}
                </span>
                <h3 id="case-study-title" className="mt-3 text-balance text-xl font-bold tracking-tight sm:text-2xl">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              <CaseBlock icon={Target} title="Problem Statement">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              </CaseBlock>

              <CaseBlock icon={Wrench} title="Methodology & Tools">
                <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-muted-foreground">
                  {project.methodology.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock icon={CheckCircle2} title="Key Analytical Findings">
                <ul className="flex flex-col gap-2">
                  {project.findings.map((finding) => (
                    <li
                      key={finding}
                      className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-2.5 text-sm leading-relaxed"
                    >
                      {finding}
                    </li>
                  ))}
                </ul>
              </CaseBlock>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <GitHubIcon className="size-4" />
                View GitHub Code
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CaseBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
        <Icon className="size-4" aria-hidden="true" />
        {title}
      </h4>
      <div className="mt-2.5">{children}</div>
    </section>
  )
}
