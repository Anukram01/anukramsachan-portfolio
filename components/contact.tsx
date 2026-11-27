import { Mail } from 'lucide-react'
import { LinkedInIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading" eyebrow="Get in touch" title="Contact" />
      <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-card/80 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Open to Data Analyst and BI roles. If you have a dataset that needs answers, I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:anukramsachan101@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/anukram-sachan-582917290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
