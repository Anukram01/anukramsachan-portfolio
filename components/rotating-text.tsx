'use client'

import { useEffect, useState } from 'react'

export function RotatingText({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="inline-flex items-center rounded-full border border-emerald-500/25 bg-white/50 px-3.5 py-1 font-semibold shadow-[0_0_24px_-6px] shadow-emerald-500/40 backdrop-blur-md dark:border-emerald-400/20 dark:bg-white/5">
      <span className="sr-only">{words.join(', ')}</span>
      <span
        key={index}
        aria-hidden="true"
        className="animate-word-in inline-block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(16,185,129,0.35)] dark:from-emerald-300 dark:to-cyan-300"
      >
        {words[index]}
      </span>
    </span>
  )
}
