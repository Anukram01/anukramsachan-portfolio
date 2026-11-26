import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { StatsStrip } from '@/components/stats-strip'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { CursorSpotlight } from '@/components/cursor-spotlight'
import { Reveal } from '@/components/reveal'

export default function Page() {
  return (
    <div className="relative min-h-dvh">
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
      <CursorSpotlight />
      <SiteNav />
      <main className="mx-auto flex max-w-4xl flex-col gap-24 px-4 pb-24 sm:px-6">
        <Hero />
        <Reveal>
          <StatsStrip />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Anukram Sachan
      </footer>
    </div>
  )
}
