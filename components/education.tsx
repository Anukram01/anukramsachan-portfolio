import { ArrowUpRight, Award, BookOpen, GraduationCap, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Credential = {
  type: string
  title: string
  issuer: string
  Icon: LucideIcon
  verifyUrl?: string
}

const credentials: Credential[] = [
  {
    type: 'Postgraduate',
    title: 'Master of Computer Applications (MCA) in Data Science & AI',
    issuer: 'Babu Banarsi Das University',
    Icon: GraduationCap,
  },
  {
    type: 'Undergraduate',
    title: 'Bachelor of Computer Applications (BCA)',
    issuer: 'Maharana Pratap College of Professional Studies',
    Icon: GraduationCap,
  },
  {
    type: 'Certification',
    title: 'IBM Certified Data Analyst & AI Analyst',
    issuer: 'IBM Developer Skills Network',
    Icon: Award,
    verifyUrl: 'https://courses.bbdu.skillsnetwork.site/certificates/06f224da02784b60af88af6e331c2b79',
  },
  {
    type: 'Publication',
    title: 'Published Research Paper on AI in Healthcare',
    issuer: 'IJSREM / IJEDR',
    Icon: BookOpen,
  },
]

const cardClass =
  'flex h-full gap-4 rounded-2xl border border-border bg-card/80 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/5'

function CredentialBody({ type, title, issuer, Icon, verifyUrl }: Credential) {
  return (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{type}</p>
        <h3 className="mt-1 font-semibold leading-snug text-card-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{issuer}</p>
        {verifyUrl && (
          <span className="mt-3 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 transition-colors group-hover:border-emerald-500/60 group-hover:bg-emerald-500/15 dark:text-emerald-400">
            Verify Credential
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </>
  )
}

export function Education() {
  return (
    <section id="education" className="scroll-mt-24" aria-labelledby="education-heading">
      <SectionHeading id="education-heading" eyebrow="Background" title="Education & Credentials" />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {credentials.map((credential) => (
          <li key={credential.title}>
            {credential.verifyUrl ? (
              <a
                href={credential.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${cardClass} hover:border-emerald-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60`}
              >
                <CredentialBody {...credential} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <div className={cardClass}>
                <CredentialBody {...credential} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
