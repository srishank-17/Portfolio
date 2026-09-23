import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { MagneticButton } from './MagneticButton'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
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
