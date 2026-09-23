import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'

function MetricValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(match ? 0 : value)

  useEffect(() => {
    if (!match || !inView) return
    if (reduceMotion) {
      setDisplay(Number(match[1]))
      return
    }
    const total = Number(match[1])
    const startedAt = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / 760, 1)
      setDisplay(Math.round(total * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, match, reduceMotion])

  return <strong><span ref={ref}>{match ? `${display}${match[2]}` : value}</span></strong>
}

export function Credentials() {
  return (
    <section className="credentials section-dark" aria-labelledby="credentials-title">
      <div className="section-shell">
        <FadeIn className="section-heading credentials__heading">
          <p className="eyebrow">05 / Credentials</p>
          <h2 id="credentials-title" className="display-title gradient-text">Proof of<br />practice.</h2>
        </FadeIn>
        <div className="credentials__content">
          <div className="certification-list">
            <h3><BadgeCheck size={20} aria-hidden="true" /> Certifications</h3>
            {portfolioData.certifications.map((certificate, index) => {
              const link = 'link' in certificate ? certificate.link : undefined

              return (
                <FadeIn key={certificate.title} delay={index * 0.08} y={20}>
                  <article className="certificate-row">
                    <span>0{index + 1}</span>
                    <div>
                      <h4>{certificate.title}</h4>
                      <p>{certificate.issuer} · {certificate.type}</p>
                    </div>
                    {link ? (
                      <a href={link} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}><ArrowUpRight size={20} /></a>
                    ) : <i aria-hidden="true" />}
                  </article>
                </FadeIn>
              )
            })}
          </div>
          <div className="achievement-block">
            <h3><Award size={20} aria-hidden="true" /> Highlights</h3>
            <div className="achievement-grid">
              {portfolioData.achievements.map((achievement, index) => (
                <FadeIn key={achievement.label} delay={index * 0.08} y={20}>
                  <article>
                    <MetricValue value={achievement.value} />
                    <h4>{achievement.label}</h4>
                    <p>{achievement.detail}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
        <FadeIn className="course-strip" delay={0.1}>
          <p className="eyebrow">Core coursework</p>
          <div>
            {portfolioData.courses.map((course) => <span key={course}>{course}</span>)}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
