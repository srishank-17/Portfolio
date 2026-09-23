import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { MagneticButton } from './MagneticButton'
import { ContactObject } from './ContactObject'

export function Contact() {
  return (
    <section id="contact" className="contact section-light" aria-labelledby="contact-title">
      <div className="contact__orb contact__orb--one" aria-hidden="true" />
      <div className="contact__orb contact__orb--two" aria-hidden="true" />
      <ContactObject />
      <div className="section-shell contact__content">
        <FadeIn>
          <p className="eyebrow">06 / Contact</p>
          <h2 id="contact-title" className="display-title">Let&apos;s build<br /><em>something useful.</em></h2>
          <p className="contact__message">{portfolioData.contactMessage}</p>
        </FadeIn>
        <FadeIn className="contact__actions" delay={0.12}>
          <MagneticButton href={`mailto:${portfolioData.email}`}>
            <Mail size={17} /> Send an email <ArrowUpRight size={17} />
          </MagneticButton>
          <div className="contact__links">
            <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a>
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </FadeIn>
        <FadeIn className="contact__email" delay={0.18}>
          <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
          <span>{portfolioData.phone}</span>
        </FadeIn>
      </div>
    </section>
  )
}
