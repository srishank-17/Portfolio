import { lazy, Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { MagneticButton } from './MagneticButton'

const Globe = lazy(async () => ({ default: (await import('./Globe')).Globe }))

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  const handlePointerMove: React.PointerEventHandler<HTMLElement> = (event) => {
    if (event.pointerType !== 'mouse' || !heroRef.current) return
    const bounds = heroRef.current.getBoundingClientRect()
    heroRef.current.style.setProperty('--hero-pointer-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`)
    heroRef.current.style.setProperty('--hero-pointer-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`)
  }

  return (
    <section id="top" ref={heroRef} className="hero" aria-labelledby="hero-title" onPointerMove={handlePointerMove} onPointerLeave={() => {
      heroRef.current?.style.setProperty('--hero-pointer-x', '72%')
      heroRef.current?.style.setProperty('--hero-pointer-y', '28%')
    }}>
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
          <span className="gradient-text">{portfolioData.firstName}.</span>
        </motion.h1>
        <motion.div
          className="hero__intro"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p>{portfolioData.heroStatement}</p>
          <ArrowDownRight aria-hidden="true" size={24} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <MagneticButton href="#projects">View projects <ArrowUpRight size={16} /></MagneticButton>
          <MagneticButton href="#contact" variant="secondary">Contact me <ArrowUpRight size={16} /></MagneticButton>
        </motion.div>
      </div>
      <motion.div
        className="hero__visual-wrap"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="hero__visual-field" aria-hidden="true" />
        <Suspense fallback={<span className="hero__globe-fallback" aria-hidden="true" />}>
          <Globe />
        </Suspense>
        <span className="hero__coordinate hero__coordinate--one">SYS / 26</span>
        <span className="hero__coordinate hero__coordinate--two">AI / ML</span>
        <span className="hero__coordinate hero__coordinate--three">BUILD / 01</span>
      </motion.div>
      <div className="hero__footer">
        <div className="hero__meta">
          <p>Based in {portfolioData.location}</p>
          <p className="hero__availability"><span aria-hidden="true" /> {portfolioData.availability}</p>
        </div>
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
