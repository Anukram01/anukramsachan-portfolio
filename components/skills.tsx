import { BarChart3, BrainCircuit, Database } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    name: 'Data Analysis & BI',
    Icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Excel', 'Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    name: 'Machine Learning & AI',
    Icon: BrainCircuit,
    skills: ['Python', 'Scikit-Learn', 'Whisper API', 'Streamlit'],
  },
  {
    name: 'Databases & Tools',
    Icon: Database,
    skills: ['SQL', 'SQLite', 'Git'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24" aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading" eyebrow="Toolkit" title="Technical Skills" />
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {groups.map(({ name, Icon, skills }) => (
          <li
            key={name}
            className="gradient-border relative flex flex-col rounded-2xl border border-border/70 bg-card/55 p-5 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                <Icon className="size-4.5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">{name}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${name} skills`}>
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded-full border border-border bg-background/70 px-3.5 py-1 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-700 hover:shadow-[0_0_18px_-2px] hover:shadow-emerald-500/40 dark:hover:text-emerald-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
