export function MiniBars({ values }: { values: number[] }) {
  const max = Math.max(...values)
  return (
    <span className="flex h-5 items-end gap-0.5" aria-hidden="true">
      {values.map((v, i) => (
        <span
          key={i}
          className="w-1 rounded-sm bg-gradient-to-t from-emerald-500 to-cyan-400 opacity-80"
          style={{ height: `${Math.max(20, (v / max) * 100)}%` }}
        />
      ))}
    </span>
  )
}
