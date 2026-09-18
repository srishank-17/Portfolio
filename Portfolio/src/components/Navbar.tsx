import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className="site-nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a className="site-nav__brand" href="#top" aria-label={`${portfolioData.name} - back to top`}>
        KS<span>.</span>
      </a>
      <nav className="site-nav__links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="site-nav__contact" href="#contact">
        Let's talk <span aria-hidden="true">↗</span>
      </a>
      <button
        className="site-nav__menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <div id="mobile-navigation" className={`site-nav__mobile ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={closeMenu} style={{ transitionDelay: `${index * 45}ms` }}>
              {link.label}
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
