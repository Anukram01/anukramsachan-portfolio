'use client'

import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { Sparkles, ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { MiniBars } from '@/components/sparkline'
import { ProjectModal } from '@/components/project-modal'
import { projectFilters, projects, type Project, type ProjectGroup } from '@/lib/projects-data'

const actionLink =
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors'

export function Projects() {
  const [filter, setFilter] = useState<ProjectGroup>('All')
  const [active, setActive] = useState<Project | null>(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.group === filter)

  return (
    <section id="projects" className="scroll-mt-24" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" eyebrow="Selected work" title="Projects" />

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
                className={`relative rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  selected
                    ? 'border-transparent text-background'
                    : 'border-border bg-card/60 text-muted-foreground hover:text-foreground'
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
    <article className="gradient-border relative flex h-full flex-col justify-between rounded-2xl bg-card/70 p-6 backdrop-blur-sm">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-primary">{project.category}</span>
          <span className="rounded-full border border-border bg-background/70 px-2.5 py-0.5 font-mono text-[11px] text-foreground">
            {project.metric}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/80 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <MiniBars data={project.trend} />

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/70 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionLink} border border-border bg-background/60 text-foreground hover:border-primary/40`}
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${actionLink} bg-primary text-primary-foreground hover:opacity-90`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live App
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onOpen}
            className={`${actionLink} text-muted-foreground hover:text-foreground`}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Case Study
          </button>
        </div>
      </div>
    </article>
  )
}
