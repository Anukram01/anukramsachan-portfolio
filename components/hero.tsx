import Image from 'next/image'
import { ArrowDown, Download } from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { RotatingText } from '@/components/rotating-text'
import { ContactPills } from '@/components/contact-pills'

const roles = [
  'Data Analytics Solutions',
  'Power BI Dashboards',
  'Predictive ML Models',
  'SQL & Python Pipelines',
]

const socials = [
  { href: 'https://github.com/Anukram01', label: 'GitHub', icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/anukram-sachan-582917290', label: 'LinkedIn', icon: LinkedInIcon },
]

export function Hero() {
  return (
    <section id="about" className="flex scroll-mt-24 flex-col items-center text-center">
      <div className="relative mx-auto mt-6">
        <div className="hero-spotlight pointer-events-none absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <TiltCard className="relative">
          <div className="size-40 overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl sm:size-44">
            <Image
              src="/images/profile.webp"
              alt="Portrait of Anukram Sachan"
              width={352}
              height={352}
              priority
              className="size-full object-cover object-[50%_35%]"
            />
          </div>
          <span className="absolute -right-3 -top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-zinc-950/90 px-3 py-1 text-xs font-medium text-emerald-400 shadow-lg backdrop-blur">
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute -inset-1 animate-[pulse_2.2s_ease-in-out_infinite] rounded-full bg-emerald-400/50" />
              <span className="relative size-1.5 rounded-full bg-white" />
            </span>
            Online
            <span
              className="pointer-events-none absolute -inset-0.5 animate-ping rounded-full border border-emerald-400/30"
              aria-hidden="true"
            />
          </span>
        </TiltCard>
      </div>

      <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        Anukram Sachan
      </h1>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg text-muted-foreground sm:text-xl">
        <span>I build</span>
        <RotatingText words={roles} />
      </p>

      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Data Analyst specializing in Python, SQL, Power BI, and Machine Learning. MCA in Data Science from Babu Banarasi Das University · IBM Certified Data Analyst · Published AI in Healthcare Researcher.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            <Icon className="size-4" />
            {label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
        >
          <Download className="size-4" aria-hidden="true" />
          Download Resume
        </a>
      </div>

      <div className="mt-6">
        <ContactPills />
      </div>

      <a
        href="#impact"
        className="group mt-16 inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
      >
        Scroll to explore
        <span className="flex h-8 w-5 justify-center rounded-full border border-border/80 pt-1.5">
          <ArrowDown className="size-3 animate-[scroll-hint_1.8s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  )
}
