import { useRef } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { Project } from '../data/portfolio'
import { ProjectVisual } from './AbstractVisual'

export function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const targetScale = 1 - (total - 1 - index) * 0.028
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <article ref={ref} className="project-card-wrap" style={{ '--stack-index': index } as React.CSSProperties}>
      <motion.div className="project-card" style={{ scale: reduceMotion ? 1 : scale }}>
        <header className="project-card__header">
          <div className="project-card__identification">
            <span className="project-card__number">0{index + 1}</span>
            <div>
              <p className="project-card__category">{project.category}</p>
              <h3>{project.name}</h3>
            </div>
          </div>
          <div className="project-card__links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
                <Github size={17} /> <span>GitHub</span>
              </a>
            )}
            <span className="project-card__date">{project.period}</span>
          </div>
        </header>
        <div className="project-card__content">
          <div className="project-card__copy">
            <p>{project.description}</p>
            <p className="project-card__micro-label">Key features</p>
            <ul>
              {project.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <p className="project-card__micro-label">Technologies</p>
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {project.github && (
              <a className="project-card__text-link" href={project.github} target="_blank" rel="noreferrer">
                Explore repository <ArrowUpRight size={16} />
              </a>
            )}
          </div>
          <ProjectVisual project={project} />
        </div>
      </motion.div>
    </article>
  )
}
