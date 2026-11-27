import Image from 'next/image'
import { ArrowDown, Download } from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { RotatingText } from '@/components/rotating-text'
import { ContactPills } from '@/components/contact-pills'

const roles = ['Data Analytics Solutions', 'Power BI Dashboards', 'Predictive ML Models', 'Business Intelligence Tools']

const socials = [
  { href: 'https://github.com/Anukram01', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/anukram-sachan-582917290', label: 'LinkedIn', Icon: LinkedInIcon },
]

export function Hero() {
  return (
    <section id="about" className="flex scroll-mt-24 flex-col items-center pt-32 text-center sm:pt-40">
      <div className="relative mx-auto mt-4">
        <div className="hero-spotlight pointer-events-none absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-[28rem]" aria-hidden="true" />
        <TiltCard className="relative">
          <div className="size-40 overflow-hidden rounded-[2rem] border-4 border-white shadow-xl shadow-emerald-900/10 ring-1 ring-border sm:size-44">
            <Image
              src="/images/profile.webp"
              alt="Portrait of Anukram Sachan"
              width={352}
              height={352}
              priority
              className="size-full object-cover object-[50%_35%]"
            />
          </div>
          <span className="absolute -right-3 -top-3 z-10 inline-flex items-center gap-1.5 rounded-full border-2 border-background bg-emerald-500 px-2.5 py-0.5 text-xs font-semibold text-white shadow-md [transform:translateZ(30px)]">
            <span className="relative flex size-1.5" aria-hidden="true">
              <span className="absolute -inset-1 animate-[soft-pulse_2.2s_ease-out_infinite] rounded-full ring-2 ring-emerald-200" />
              <span className="relative size-1.5 rounded-full bg-white" />
            </span>
            Online
            <span
              className="pointer-events-none absolute -inset-0.5 animate-[soft-pulse_2.2s_ease-out_infinite] rounded-full ring-4 ring-emerald-400/40"
              aria-hidden="true"
            />
          </span>
        </TiltCard>
      </div>

      <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Anukram Sachan</h1>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg text-muted-foreground">
        <span>I build</span>
        <RotatingText words={roles} />
      </p>

      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Data Analyst specializing in Python, SQL, Power BI, and Machine Learning. MCA in Data Science &amp; AI from Babu
        Banarsi Das University · IBM Certified Data Analyst · Published AI Researcher.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Icon className="size-4" />
            {label}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1TIHM-b2s5RVk_VDw-kq9aR7Hm1HpLRl6/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
        className="group mt-16 inline-flex flex-col items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Scroll to explore
        <span className="flex h-8 w-5 justify-center rounded-full border border-border pt-1.5" aria-hidden="true">
          <ArrowDown className="size-3 animate-[scroll-hint_1.8s_ease-in-out_infinite] text-emerald-600 dark:text-emerald-400" />
        </span>
      </a>
    </section>
  )
}
