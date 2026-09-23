import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export function ContactObject() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const rotateX = useSpring(useTransform(targetY, [-0.5, 0.5], [9, -9]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(targetX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 })
  const scale = useSpring(useMotionValue(1), { stiffness: 150, damping: 20 })

  const pointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    targetX.set(x)
    targetY.set(y)
    scale.set(1.035 + Math.max(0, 0.08 - Math.hypot(x, y) * 0.1))
  }

  return (
    <motion.div
      ref={ref}
      className="contact-system"
      data-cursor-active
      onPointerMove={pointerMove}
      onPointerLeave={() => { targetX.set(0); targetY.set(0); scale.set(1) }}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      aria-hidden="true"
    >
      <span className="contact-system__atmosphere" />
      <span className="contact-system__ring contact-system__ring--one" />
      <span className="contact-system__ring contact-system__ring--two" />
      <span className="contact-system__core" />
      <span className="contact-system__satellite contact-system__satellite--one" />
      <span className="contact-system__satellite contact-system__satellite--two" />
    </motion.div>
  )
}
