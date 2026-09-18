import { Compass, GraduationCap, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { AnimatedText } from './AnimatedText'
import { FadeIn } from './FadeIn'
import { MagneticButton } from './MagneticButton'

export function About() {
  return (
    <section id="about" className="about section-dark" aria-labelledby="about-title">
      <div className="about__grid" aria-hidden="true" />
      <div className="about__decor about__decor--disc" aria-hidden="true" />
      <div className="about__decor about__decor--cube" aria-hidden="true" />
      <div className="section-shell about__content">
        <FadeIn>
          <p className="eyebrow">01 / About</p>
          <h2 id="about-title" className="display-title gradient-text">A curious builder<br />in constant motion.</h2>
        </FadeIn>
        <div className="about__body">
          <AnimatedText text={portfolioData.about} />
          <FadeIn delay={0.1}>
            <div className="about__facts">
              <div>
                <GraduationCap size={18} aria-hidden="true" />
                <span>{portfolioData.education.degree}</span>
                <small>{portfolioData.education.period}</small>
              </div>
              <div>
                <MapPin size={18} aria-hidden="true" />
                <span>{portfolioData.education.institution}</span>
                <small>{portfolioData.education.score}</small>
              </div>
              <div>
                <Compass size={18} aria-hidden="true" />
                <span>Focused on clear systems and useful experiences</span>
              </div>
            </div>
            <MagneticButton href="#contact" variant="secondary">Start a conversation</MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
