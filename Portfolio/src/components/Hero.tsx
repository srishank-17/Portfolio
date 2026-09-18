import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { MagneticButton } from './MagneticButton'
import { OrbitalObject } from './AbstractVisual'

export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 90, damping: 18 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 90, damping: 18 })

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (reduceMotion || !visualRef.current) return
    const bounds = visualRef.current.getBoundingClientRect()
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__aurora hero__aurora--one" aria-hidden="true" />
      <div className="hero__aurora hero__aurora--two" aria-hidden="true" />
      <div className="hero__content">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {portfolioData.headline}
        </motion.p>
        <motion.h1
          id="hero-title"
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span>Hi, I&apos;m</span>
          <span className="gradient-text">Keerthi.</span>
        </motion.h1>
        <motion.div
          className="hero__intro"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p>Building thoughtful digital systems where intelligent ideas meet real-world interaction.</p>
          <ArrowDownRight aria-hidden="true" size={24} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <MagneticButton href="#projects">View projects <ArrowUpRight size={16} /></MagneticButton>
          <MagneticButton href="#contact" variant="secondary">Contact me</MagneticButton>
        </motion.div>
      </div>
      <motion.div
        ref={visualRef}
        className="hero__visual-wrap"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          mouseX.set(0)
          mouseY.set(0)
        }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <OrbitalObject />
        <span className="hero__coordinate hero__coordinate--one">SYS / 26</span>
        <span className="hero__coordinate hero__coordinate--two">AI / ML</span>
        <span className="hero__coordinate hero__coordinate--three">BUILD / 01</span>
      </motion.div>
      <div className="hero__footer">
        <p>Based in {portfolioData.location}</p>
        <div className="hero__socials" aria-label="Professional links">
          <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
        <p className="hero__scroll-cue"><span /> Scroll to explore</p>
      </div>
    </section>
  )
}
