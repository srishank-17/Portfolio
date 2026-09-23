import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../data/portfolio'

export function OrbitalObject({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`orbital-object__anchor ${className}`} aria-hidden="true">
      <motion.div
        className="orbital-object"
        animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="orbital-object__halo" />
        <span className="orbital-object__sphere" />
        <span className="orbital-object__ring orbital-object__ring--one" />
        <span className="orbital-object__ring orbital-object__ring--two" />
        <span className="orbital-object__glint" />
      </motion.div>
    </div>
  )
}

export function ProjectVisual({ project }: { project: Project }) {
  const visualRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const rotateX = useSpring(useTransform(targetY, [-0.5, 0.5], [4.5, -4.5]), { stiffness: 140, damping: 22 })
  const rotateY = useSpring(useTransform(targetX, [-0.5, 0.5], [-5.5, 5.5]), { stiffness: 140, damping: 22 })

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse' || !visualRef.current) return
    const bounds = visualRef.current.getBoundingClientRect()
    targetX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    targetY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  return (
    <motion.div
      ref={visualRef}
      className={`project-visual project-visual--${project.visual}`}
      data-cursor-active
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { targetX.set(0); targetY.set(0) }}
      style={{ rotateX, rotateY, transformPerspective: 820 }}
      aria-hidden="true"
    >
      <div className="project-visual__grid" />
      <div className="project-visual__glow" />
      {project.visual === 'genesis' && (
        <>
          <svg className="visual-network" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 18 67 Q 38 35 52 50 T 86 29" /><path d="M 13 31 Q 42 71 55 50 T 89 74" /><path d="M 31 17 Q 50 40 52 50 T 72 90" /><circle cx="18" cy="67" r="2" /><circle cx="52" cy="50" r="2.8" /><circle cx="86" cy="29" r="1.7" /><circle cx="89" cy="74" r="1.7" /><circle cx="31" cy="17" r="1.5" /><circle className="visual-packet" cx="18" cy="67" r="1.1" /></svg>
          <span className="visual-orbit visual-orbit--large" />
          <span className="visual-orbit visual-orbit--small" />
          <span className="visual-core" />
          <span className="visual-label">LEARN / ADAPT / GROW</span>
        </>
      )}
      {project.visual === 'intellmeet' && (
        <>
          <svg className="visual-network visual-network--meeting" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 29 34 Q 51 50 70 69" /><path d="M 29 34 Q 55 21 76 25" /><path d="M 76 25 Q 79 48 70 69" /><circle className="visual-packet visual-packet--one" cx="29" cy="34" r="1.1" /><circle className="visual-packet visual-packet--two" cx="76" cy="25" r="1.1" /></svg>
          <span className="visual-meeting visual-meeting--one" />
          <span className="visual-meeting visual-meeting--two" />
          <span className="visual-meeting visual-meeting--three" />
          <span className="visual-connection" />
          <span className="visual-label">SPEAK / ALIGN / ACT</span>
        </>
      )}
      {project.visual === 'igris' && (
        <>
          <span className="visual-listening-grid" />
          <span className="visual-spectrum"><i /><i /><i /><i /><i /><i /><i /></span>
          <span className="visual-wave visual-wave--one" />
          <span className="visual-wave visual-wave--two" />
          <span className="visual-wave visual-wave--three" />
          <span className="visual-mic" />
          <span className="visual-label">LISTENING...</span>
        </>
      )}
      {project.visual === 'kartx' && (
        <>
          <span className="visual-speed-lines"><i /><i /><i /><i /></span>
          <span className="visual-hud">LAP / 01 <b>172</b></span>
          <span className="visual-track visual-track--one" />
          <span className="visual-track visual-track--two" />
          <span className="visual-kart" />
          <span className="visual-label">APEX / DRIFT / GO</span>
        </>
      )}
      {project.visual === 'royal' && (
        <>
          <span className="visual-ui-card visual-ui-card--one"><i /><i /><i /></span>
          <span className="visual-ui-card visual-ui-card--two"><i /><i /></span>
          <span className="visual-plate" />
          <span className="visual-cloche" />
          <span className="visual-steam visual-steam--one" />
          <span className="visual-steam visual-steam--two" />
          <span className="visual-label">ORDER / ENJOY</span>
        </>
      )}
    </motion.div>
  )
}
