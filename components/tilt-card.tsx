'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 18 })

  return (
    <div className="[perspective:800px]">
      <motion.div
        className={className}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.03 }}
        onPointerMove={(e) => {
          if (reduce) return
          const rect = e.currentTarget.getBoundingClientRect()
          x.set((e.clientX - rect.left) / rect.width - 0.5)
          y.set((e.clientY - rect.top) / rect.height - 0.5)
        }}
        onPointerLeave={() => {
          x.set(0)
          y.set(0)
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
