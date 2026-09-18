import type { MouseEventHandler, PropsWithChildren } from 'react'
import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

type MagneticButtonProps = PropsWithChildren<
  HTMLMotionProps<'a'> & {
    variant?: 'primary' | 'secondary' | 'quiet'
  }
>

export function MagneticButton({ children, className = '', variant = 'primary', onMouseMove, onMouseLeave, ...props }: MagneticButtonProps) {
  const elementRef = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()

  const handleMove: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (!reduceMotion && elementRef.current) {
      const bounds = elementRef.current.getBoundingClientRect()
      const x = (event.clientX - bounds.left - bounds.width / 2) / 7
      const y = (event.clientY - bounds.top - bounds.height / 2) / 7
      elementRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    onMouseMove?.(event)
  }

  const handleLeave: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (elementRef.current) elementRef.current.style.transform = 'translate3d(0, 0, 0)'
    onMouseLeave?.(event)
  }

  return (
    <motion.a
      ref={elementRef}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
