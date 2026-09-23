import { ArrowUpRight, BriefcaseBusiness, UsersRound } from 'lucide-react'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'

function TimelineList() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 42%'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="experience__timeline">
      <span className="experience__timeline-base" aria-hidden="true" />
      <motion.span className="experience__timeline-progress" style={{ scaleY: reduceMotion ? 1 : scaleY }} aria-hidden="true" />
      {portfolioData.experience.map((item, index) => (
        <FadeIn key={item.role} y={28} delay={index * 0.08}>
          <article className="timeline-card">
            <span className="timeline-card__node" aria-hidden="true" />
            <div className="timeline-card__topline"><BriefcaseBusiness size={18} aria-hidden="true" /><span>{item.period}</span></div>
            <h3>{item.role}</h3>
            <p className="timeline-card__company">{item.company}</p>
            <ul>
              {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="tag-list tag-list--dark">
              {item.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="experience section-dark" aria-labelledby="experience-title">
      <div className="section-shell">
        <FadeIn className="section-heading">
          <p className="eyebrow">04 / Experience</p>
          <h2 id="experience-title" className="display-title">In the<br />real world.</h2>
        </FadeIn>
        <div className="experience__grid">
          <TimelineList />
          <FadeIn delay={0.12} y={28}>
            <aside className="responsibility-card">
              <div className="responsibility-card__icon"><UsersRound size={20} /></div>
              <p className="eyebrow">Beyond the code</p>
              <h3>Community & coordination</h3>
              <ul>
                {portfolioData.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
              <a href="#contact">Connect with me <ArrowUpRight size={16} /></a>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
