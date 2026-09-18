import { motion, useReducedMotion } from 'framer-motion'
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
  return (
    <div className={`project-visual project-visual--${project.visual}`} aria-hidden="true">
      <div className="project-visual__grid" />
      <div className="project-visual__glow" />
      {project.visual === 'genesis' && (
        <>
          <span className="visual-orbit visual-orbit--large" />
          <span className="visual-orbit visual-orbit--small" />
          <span className="visual-core" />
          <span className="visual-label">LEARN / ADAPT / GROW</span>
        </>
      )}
      {project.visual === 'intellmeet' && (
        <>
          <span className="visual-meeting visual-meeting--one" />
          <span className="visual-meeting visual-meeting--two" />
          <span className="visual-meeting visual-meeting--three" />
          <span className="visual-connection" />
          <span className="visual-label">SPEAK / ALIGN / ACT</span>
        </>
      )}
      {project.visual === 'igris' && (
        <>
          <span className="visual-wave visual-wave--one" />
          <span className="visual-wave visual-wave--two" />
          <span className="visual-wave visual-wave--three" />
          <span className="visual-mic" />
          <span className="visual-label">LISTENING...</span>
        </>
      )}
      {project.visual === 'kartx' && (
        <>
          <span className="visual-track visual-track--one" />
          <span className="visual-track visual-track--two" />
          <span className="visual-kart" />
          <span className="visual-label">APEX / DRIFT / GO</span>
        </>
      )}
      {project.visual === 'royal' && (
        <>
          <span className="visual-plate" />
          <span className="visual-cloche" />
          <span className="visual-steam visual-steam--one" />
          <span className="visual-steam visual-steam--two" />
          <span className="visual-label">ORDER / ENJOY</span>
        </>
      )}
    </div>
  )
}
