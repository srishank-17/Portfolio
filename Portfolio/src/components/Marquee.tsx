import { portfolioData } from '../data/portfolio'

const technologies = [
  'Python',
  'Java',
  'JavaScript',
  'ReactJS',
  'NodeJS',
  'MongoDB',
  'SQL',
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
  'WebRTC',
  'Socket.io',
] as const

function Track({ reverse = false }: { reverse?: boolean }) {
  const items = [...technologies, ...technologies]
  return (
    <div className={`tech-track ${reverse ? 'tech-track--reverse' : ''}`} aria-hidden="true">
      <div className="tech-track__inner">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            <i /> {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <section className="marquee-section" aria-label={`${portfolioData.name}'s technology stack`}>
      <Track />
      <Track reverse />
    </section>
  )
}
