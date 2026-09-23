import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type BootLoaderProps = {
  onComplete: () => void
}

export function BootLoader({ onComplete }: BootLoaderProps) {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [online, setOnline] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolio-booted') === 'true'
    const duration = reduceMotion ? 120 : hasVisited ? 420 : 1450
    const startedAt = performance.now()
    let frame = 0
    let holdTimer = 0

    const tick = () => {
      const next = Math.min(100, Math.max(0, Math.round(((performance.now() - startedAt) / duration) * 100)))
      setProgress(next)

      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        sessionStorage.setItem('portfolio-booted', 'true')
        setOnline(true)
        holdTimer = window.setTimeout(() => setVisible(false), reduceMotion ? 20 : 260)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(holdTimer)
    }
  }, [reduceMotion])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="boot-loader"
          role="status"
          aria-live="polite"
          aria-label={`System initialization ${progress}% complete`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.62, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="boot-loader__grid" aria-hidden="true" />
          <div className="boot-loader__scan" aria-hidden="true" />
          <div className="boot-loader__topline">
            <span>KEERTHI SRISHANK</span>
            <span>BUILD / 2026.09</span>
          </div>
          <div className="boot-loader__center">
            <p className="boot-loader__eyebrow">SYSTEM INITIALIZING</p>
            <div className="boot-loader__dial" style={{ '--progress': `${progress * 3.6}deg` } as React.CSSProperties}>
              <span className="boot-loader__core" />
              <strong>{String(progress).padStart(3, '0')}</strong>
            </div>
            <div className="boot-loader__progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
            <p className={`boot-loader__status ${online ? 'is-online' : ''}`}>{online ? 'SYSTEM ONLINE' : 'BOOTING INTERFACE'}</p>
          </div>
          <div className="boot-loader__bottomline" aria-hidden="true">
            <span>AI / ML</span><span>SOFTWARE</span><span>SYSTEMS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
