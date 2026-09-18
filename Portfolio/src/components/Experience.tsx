import { ArrowUpRight, BriefcaseBusiness, UsersRound } from 'lucide-react'
import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'

export function Experience() {
  return (
    <section id="experience" className="experience section-light" aria-labelledby="experience-title">
      <div className="section-shell">
        <FadeIn className="section-heading section-heading--light">
          <p className="eyebrow">04 / Experience</p>
          <h2 id="experience-title" className="display-title">In the<br />real world.</h2>
        </FadeIn>
        <div className="experience__grid">
          <div className="experience__timeline">
            {portfolioData.experience.map((item) => (
              <FadeIn key={item.role} y={28}>
                <article className="timeline-card">
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
