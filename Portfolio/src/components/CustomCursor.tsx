import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const xTarget = useMotionValue(-100)
  const yTarget = useMotionValue(-100)
  const x = useSpring(xTarget, { stiffness: 540, damping: 38, mass: 0.18 })
  const y = useSpring(yTarget, { stiffness: 540, damping: 38, mass: 0.18 })

  useEffect(() => {
    const pointer = window.matchMedia('(min-width: 701px) and (hover: hover) and (pointer: fine)')
    const update = () => setEnabled(pointer.matches && !reduceMotion)
    update()
    pointer.addEventListener('change', update)
    return () => pointer.removeEventListener('change', update)
  }, [reduceMotion])

  useEffect(() => {
    if (!enabled) return
    const move = (event: PointerEvent) => {
      xTarget.set(event.clientX)
      yTarget.set(event.clientY)
    }
    const over = (event: PointerEvent) => {
      setActive(Boolean((event.target as Element | null)?.closest('a, button, [data-cursor-active]')))
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [enabled, xTarget, yTarget])

  if (!enabled) return null

  return (
    <motion.div className={`cursor-system ${active ? 'is-active' : ''}`} style={{ x, y }} aria-hidden="true">
      <span className="cursor-system__dot" />
      <span className="cursor-system__ring" />
    </motion.div>
  )
}
