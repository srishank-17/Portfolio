import { useMemo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

function AnimatedCharacter({ character, index, length, progress, reduceMotion }: { character: string; index: number; length: number; progress: MotionValue<number>; reduceMotion: boolean | null }) {
  const from = Math.max(0, index / length - 0.18)
  const to = Math.min(1, index / length + 0.18)
  const opacity = useTransform(progress, [from, to], [0.46, 1])

  return (
    <motion.span className="animated-character" style={{ opacity: reduceMotion ? 1 : opacity }}>
      {character === ' ' ? '\u00a0' : character}
    </motion.span>
  )
}

export function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const characters = useMemo(() => Array.from(text), [text])
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.3'] })

  return (
    <p ref={ref} className="animated-text" aria-label={text}>
      {characters.map((character, index) => (
        <AnimatedCharacter key={`${character}-${index}`} character={character} index={index} length={characters.length} progress={scrollYProgress} reduceMotion={reduceMotion} />
      ))}
    </p>
  )
}
