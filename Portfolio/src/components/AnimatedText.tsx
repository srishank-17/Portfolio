import { useMemo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function AnimatedCharacter({ character, index, length }: { character: string; index: number; length: number }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const from = Math.max(0, index / length - 0.18)
  const to = Math.min(1, index / length + 0.18)
  const opacity = useTransform(scrollYProgress, [from, to], [0.22, 1])

  return (
    <motion.span ref={ref} className="animated-character" style={{ opacity: reduceMotion ? 1 : opacity }}>
      {character === ' ' ? '\u00a0' : character}
    </motion.span>
  )
}

export function AnimatedText({ text }: { text: string }) {
  const characters = useMemo(() => Array.from(text), [text])

  return (
    <p className="animated-text" aria-label={text}>
      {characters.map((character, index) => (
        <AnimatedCharacter key={`${character}-${index}`} character={character} index={index} length={characters.length} />
      ))}
    </p>
  )
}
