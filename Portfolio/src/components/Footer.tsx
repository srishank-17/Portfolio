import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer__inner">
        <div className="footer__identity">
          <p>© 2026 {portfolioData.name}</p>
          <p className="footer__story">Designed &amp; built from a resume-led story.</p>
        </div>
        <div className="footer__utility">
          <p>All rights reserved.</p>
          <nav className="footer__links" aria-label="Footer navigation">
            <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
            <a href="#top" aria-label="Back to top">Back to top <ArrowUp size={15} /></a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
