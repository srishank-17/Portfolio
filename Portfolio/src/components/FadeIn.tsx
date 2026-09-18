import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type FadeInProps = PropsWithChildren<{
  className?: string
  delay?: number
  duration?: number
  x?: number
  y?: number
}>

export function FadeIn({ children, className, delay = 0, duration = 0.7, x = 0, y = 30 }: FadeInProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
