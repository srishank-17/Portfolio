import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type NetworkNode = {
  id: string
  label: string
  x: number
  y: number
  accent?: boolean
}

const nodes: NetworkNode[] = [
  { id: 'systems', label: 'SOFTWARE / AI / ML', x: 50, y: 50, accent: true },
  { id: 'python', label: 'Python', x: 18, y: 22 },
  { id: 'react', label: 'ReactJS', x: 80, y: 20 },
  { id: 'java', label: 'Java', x: 16, y: 74 },
  { id: 'node', label: 'NodeJS', x: 81, y: 76 },
  { id: 'ml', label: 'Machine Learning', x: 43, y: 13 },
  { id: 'data', label: 'MongoDB / SQL', x: 52, y: 88 },
  { id: 'tensor', label: 'TensorFlow', x: 88, y: 48 },
]

const connections: Array<[string, string]> = [
  ['systems', 'python'], ['systems', 'react'], ['systems', 'java'], ['systems', 'node'],
  ['systems', 'ml'], ['systems', 'data'], ['systems', 'tensor'], ['python', 'ml'],
  ['react', 'node'], ['node', 'data'], ['ml', 'tensor'], ['java', 'data'],
]

const byId = Object.fromEntries(nodes.map((node) => [node.id, node])) as Record<string, NetworkNode>

export function SkillNetwork() {
  const [activeId, setActiveId] = useState('systems')
  const reduceMotion = useReducedMotion()

  return (
    <div className="skill-network" aria-label="Interactive technology network">
      <div className="skill-network__caption"><span>TECHNOLOGY MAP</span><span>HOVER / FOCUS TO TRACE</span></div>
      <div className="skill-network__stage">
        <svg className="skill-network__paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {connections.map(([fromId, toId], index) => {
            const from = byId[fromId]
            const to = byId[toId]
            const active = activeId === fromId || activeId === toId
            const controlX = (from.x + to.x) / 2 + (index % 2 === 0 ? 3 : -3)
            const controlY = (from.y + to.y) / 2 + (index % 3 === 0 ? -5 : 3)
            const path = `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`
            return (
              <g key={`${fromId}-${toId}`} className={active ? 'is-active' : ''}>
                <path d={path} />
                {!reduceMotion && active && (
                  <motion.circle
                    r="0.7"
                    animate={{ cx: [from.x, controlX, to.x], cy: [from.y, controlY, to.y], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.45, delay: index * 0.05, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </g>
            )
          })}
        </svg>
        {nodes.map((node, index) => {
          const connected = node.id === activeId || connections.some(([from, to]) => (from === activeId && to === node.id) || (to === activeId && from === node.id))
          return (
            <button
              key={node.id}
              type="button"
              className={`skill-network__node ${node.accent ? 'skill-network__node--core' : ''} ${connected ? 'is-connected' : ''}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onPointerEnter={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              onClick={() => setActiveId(node.id)}
              aria-pressed={activeId === node.id}
            >
              <motion.i
                animate={reduceMotion ? undefined : { scale: node.accent ? [1, 1.11, 1] : [1, 1.2, 1] }}
                transition={{ duration: node.accent ? 3 : 3.8 + index * 0.14, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span>{node.label}</span>
            </button>
          )
        })}
      </div>
      <p className="skill-network__readout">{byId[activeId].label} <b>/ ACTIVE</b></p>
    </div>
  )
}
