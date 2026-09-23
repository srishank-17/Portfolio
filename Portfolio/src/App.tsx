import { useState } from 'react'
import { About } from './components/About'
import { BootLoader } from './components/BootLoader'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {!booted && <BootLoader onComplete={() => setBooted(true)} />}
      <ScrollProgress />
      <CustomCursor />
      <main className={booted ? 'site-content is-booted' : 'site-content'} aria-busy={!booted}>
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
