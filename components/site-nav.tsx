'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const circleButton =
  'inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function SiteNav() {
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const isDark = resolvedTheme === 'dark'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-end px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2" ref={menuRef}>
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={circleButton}
            aria-label="Toggle dark mode"
          >
            <Sun className="size-4 dark:hidden" aria-hidden="true" />
            <Moon className="hidden size-4 dark:block" aria-hidden="true" />
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={circleButton}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </button>
            <div
              id="site-menu"
              className={cn(
                'absolute right-0 mt-2 w-44 origin-top-right rounded-2xl border border-border bg-popover p-1.5 shadow-lg transition-all',
                open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0',
              )}
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="block rounded-xl px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
