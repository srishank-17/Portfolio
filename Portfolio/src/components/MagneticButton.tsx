import type { MouseEventHandler, PropsWithChildren } from 'react'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

type MagneticButtonProps = PropsWithChildren<
  HTMLMotionProps<'a'> & {
    variant?: 'primary' | 'secondary' | 'quiet'
  }
>

export function MagneticButton({ children, className = '', variant = 'primary', onMouseMove, onMouseLeave, style, ...props }: MagneticButtonProps) {
  const elementRef = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const [finePointer, setFinePointer] = useState(false)
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const x = useSpring(targetX, { stiffness: 360, damping: 30, mass: 0.35 })
  const y = useSpring(targetY, { stiffness: 360, damping: 30, mass: 0.35 })

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateFinePointer = () => setFinePointer(query.matches)

    updateFinePointer()
    query.addEventListener('change', updateFinePointer)
    return () => query.removeEventListener('change', updateFinePointer)
  }, [])

  const handleMove: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (!reduceMotion && finePointer && elementRef.current) {
      const bounds = elementRef.current.getBoundingClientRect()
      const offsetX = (event.clientX - bounds.left - bounds.width / 2) / 9
      const offsetY = (event.clientY - bounds.top - bounds.height / 2) / 9
      targetX.set(offsetX)
      targetY.set(offsetY)
    }
    onMouseMove?.(event)
  }

  const handleLeave: MouseEventHandler<HTMLAnchorElement> = (event) => {
    targetX.set(0)
    targetY.set(0)
    onMouseLeave?.(event)
  }

  return (
    <motion.a
      ref={elementRef}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ ...style, x, y }}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}
