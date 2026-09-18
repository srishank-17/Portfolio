import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="projects section-dark" aria-labelledby="projects-title">
      <div className="section-shell">
        <FadeIn className="section-heading projects__heading">
          <p className="eyebrow">03 / Selected work</p>
          <h2 id="projects-title" className="display-title gradient-text">Things I&apos;ve<br />brought to life.</h2>
          <p className="section-heading__note">Five project explorations across AI, real-time collaboration, speech interaction, gaming, and the web.</p>
        </FadeIn>
        <div className="projects__stack">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} total={portfolioData.projects.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
