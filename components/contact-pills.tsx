'use client'

import { useState } from 'react'
import { Check, Copy, Mail, MapPin } from 'lucide-react'
import { toast } from 'sonner'

const EMAIL = 'anukramsachan101@gmail.com'

const pill =
  'inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur'

export function ContactPills() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      toast.success('Email copied to clipboard!', { description: EMAIL })
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div id="contact" className="flex scroll-mt-24 flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={copy}
        className={`${pill} transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
        aria-label={`Copy email address ${EMAIL}`}
      >
        <Mail className="size-4" aria-hidden="true" />
        <span>{EMAIL}</span>
        {copied ? (
          <Check className="size-3.5 text-emerald-500" aria-hidden="true" />
        ) : (
          <Copy className="size-3.5" aria-hidden="true" />
        )}
        <span className="sr-only" aria-live="polite">
          {copied ? 'Email copied to clipboard' : ''}
        </span>
      </button>
      <span className={pill}>
        <MapPin className="size-4 text-red-500" aria-hidden="true" />
        Hyderabad, India
      </span>
      <span className={pill}>
        <span className="relative flex size-2.5" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_2px] shadow-emerald-500/60" />
        </span>
        open to work
      </span>
    </div>
  )
}
