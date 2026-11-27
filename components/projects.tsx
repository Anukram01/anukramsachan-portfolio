'use client'

import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { MiniBars } from '@/components/sparkline'
import { ProjectModal } from '@/components/project-modal'
import { projectFilters, projects, type Project, type ProjectFilter } from '@/lib/projects-data'

const actionLink =
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [active, setActive] = useState<Project | null>(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.group === filter)

  return (
    <section id="projects" className="scroll-mt-24" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" eyebrow="Selected work" title="Featured Projects" />

      <LayoutGroup>
        <div role="tablist" aria-label="Filter projects" className="mt-6 flex flex-wrap gap-2">
          {projectFilters.map((f) => {
            const selected = f === filter
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(f)}
                className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  selected
                    ? 'border-transparent text-background'
                    : 'border-border bg-card/60 text-muted-foreground backdrop-blur hover:text-foreground'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-foreground"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            )
          })}
        </div>

        <motion.ul layout className="mt-6 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              >
                <ProjectCard project={project} onOpen={() => setActive(project)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="gradient-border relative flex h-full flex-col rounded-2xl border border-border/70 bg-card/55 p-5 shadow-sm backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
          {project.category}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 py-1 pl-2.5 pr-2 font-mono text-[11px] text-muted-foreground">
          {project.metric}
          <MiniBars values={project.trend} />
        </span>
      </div>
      <h3 className="mt-3 font-semibold leading-snug text-card-foreground">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
        <button
          type="button"
          onClick={onOpen}
          className={`${actionLink} bg-emerald-600 text-white hover:bg-emerald-700`}
        >
          <Sparkles className="size-3.5" aria-hidden="true" />
          View Insights
          <span className="sr-only">for {project.title}</span>
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionLink} border border-border text-foreground hover:bg-muted`}
        >
          <GitHubIcon className="size-3.5" />
          GitHub Code
          <span className="sr-only">for {project.title} (opens in new tab)</span>
        </a>
      </div>
    </article>
  )
}
