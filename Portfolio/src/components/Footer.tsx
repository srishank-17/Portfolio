import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer__inner">
        <p>© {new Date().getFullYear()} {portfolioData.name}</p>
        <p>Designed & built from a resume-led story.</p>
        <a href="#top" aria-label="Back to top">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  )
}
