import { ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { SkillNetwork } from './SkillNetwork'

export function Skills() {
  return (
    <section id="skills" className="skills section-light" aria-labelledby="skills-title">
      <div className="section-shell">
        <FadeIn className="section-heading section-heading--light">
          <p className="eyebrow">02 / What I do</p>
          <h2 id="skills-title" className="display-title">Build, learn,<br />iterate.</h2>
          <p className="section-heading__note">A blend of engineering fundamentals, product-minded web development, and AI/ML exploration.</p>
        </FadeIn>
        <FadeIn delay={0.08} y={18}>
          <SkillNetwork />
        </FadeIn>
        <div className="skill-list">
          {portfolioData.skills.map((skill, index) => (
            <FadeIn key={skill.number} delay={index * 0.07} y={24}>
              <article className="skill-row">
                <span className="skill-row__number">{skill.number}</span>
                <div className="skill-row__copy">
                  <div className="skill-row__title"><h3>{skill.title}</h3><ArrowUpRight size={21} aria-hidden="true" /></div>
                  <p>{skill.description}</p>
                  <div className="tag-list tag-list--dark">
                    {skill.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
