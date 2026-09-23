import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useReducedMotion } from 'framer-motion'

type OrbitingPoint = {
  mesh: THREE.Mesh
  radius: number
  speed: number
  phase: number
  tilt: number
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount

function arcBetween(start: THREE.Vector3, end: THREE.Vector3, lift: number) {
  const midpoint = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(lift)
  return new THREE.CatmullRomCurve3([start, midpoint, end])
}

export function Globe() {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const compact = window.matchMedia('(max-width: 700px)').matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.set(0, 0, 6.15)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !compact, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.25 : 1.7))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    host.appendChild(renderer.domElement)

    const world = new THREE.Group()
    const planet = new THREE.Group()
    const rings = new THREE.Group()
    const satellites = new THREE.Group()
    scene.add(world)
    world.add(planet, rings, satellites)

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.58, compact ? 40 : 64, compact ? 28 : 48),
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#10252a'),
        roughness: 0.4,
        metalness: 0.5,
        transparent: true,
        opacity: 0.98,
        clearcoat: 0.9,
        clearcoatRoughness: 0.28,
      }),
    )
    planet.add(core)

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.605, compact ? 16 : 23, compact ? 11 : 17)),
      new THREE.LineBasicMaterial({ color: '#9be888', transparent: true, opacity: 0.15 }),
    )
    planet.add(wire)

    const nodeCount = compact ? 62 : 125
    const nodePositions = new Float32Array(nodeCount * 3)
    for (let index = 0; index < nodeCount; index += 1) {
      const golden = Math.PI * (3 - Math.sqrt(5))
      const y = 1 - (index / (nodeCount - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = golden * index
      const scale = 1.637
      nodePositions[index * 3] = Math.cos(theta) * radius * scale
      nodePositions[index * 3 + 1] = y * scale
      nodePositions[index * 3 + 2] = Math.sin(theta) * radius * scale
    }
    const nodeGeometry = new THREE.BufferGeometry()
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))
    const nodeMaterial = new THREE.PointsMaterial({ color: '#d4ffbd', size: compact ? 0.028 : 0.035, transparent: true, opacity: 0.78, sizeAttenuation: true })
    planet.add(new THREE.Points(nodeGeometry, nodeMaterial))

    const networkMaterial = new THREE.LineBasicMaterial({ color: '#abf9b7', transparent: true, opacity: 0.18 })
    for (let index = 0; index < (compact ? 10 : 19); index += 1) {
      const first = (index * 7) % nodeCount
      const second = (first + 16 + (index % 5) * 7) % nodeCount
      const start = new THREE.Vector3(nodePositions[first * 3], nodePositions[first * 3 + 1], nodePositions[first * 3 + 2])
      const end = new THREE.Vector3(nodePositions[second * 3], nodePositions[second * 3 + 1], nodePositions[second * 3 + 2])
      const curve = arcBetween(start, end, 1.9 + (index % 3) * 0.16)
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(18))
      planet.add(new THREE.Line(geometry, networkMaterial.clone()))
    }

    const ringMaterial = new THREE.MeshBasicMaterial({ color: '#beffb1', transparent: true, opacity: 0.3, side: THREE.DoubleSide })
    const ringSpecs = [
      [2.18, 0.008, -0.44, 0.18],
      [2.52, 0.006, 0.7, -0.32],
      [2.88, 0.004, -1.06, 0.38],
    ] as const
    ringSpecs.forEach(([radius, thickness, rotation, tilt]) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, thickness, 5, compact ? 54 : 88), ringMaterial.clone())
      ring.rotation.set(tilt, rotation, 0)
      rings.add(ring)
    })

    const outerCount = compact ? 46 : 92
    const outerPositions = new Float32Array(outerCount * 3)
    for (let index = 0; index < outerCount; index += 1) {
      const theta = (index * 2.399) % (Math.PI * 2)
      const phi = Math.acos(1 - 2 * ((index * 31) % outerCount) / outerCount)
      const radius = 2.18 + (index % 8) * 0.13
      outerPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      outerPositions[index * 3 + 1] = radius * Math.cos(phi)
      outerPositions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    const outerGeometry = new THREE.BufferGeometry()
    outerGeometry.setAttribute('position', new THREE.BufferAttribute(outerPositions, 3))
    const outerMaterial = new THREE.PointsMaterial({ color: '#b9e2ff', size: compact ? 0.018 : 0.025, transparent: true, opacity: 0.45 })
    world.add(new THREE.Points(outerGeometry, outerMaterial))

    const satelliteGeometry = new THREE.SphereGeometry(0.046, 9, 9)
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: '#dffff2', transparent: true, opacity: 0.86 })
    const orbiting: OrbitingPoint[] = Array.from({ length: compact ? 5 : 10 }, (_, index) => {
      const mesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial)
      satellites.add(mesh)
      return { mesh, radius: 2.1 + (index % 3) * 0.33, speed: 0.18 + index * 0.028, phase: index * 1.82, tilt: -0.5 + index * 0.19 }
    })

    const keyLight = new THREE.PointLight('#d8ffc7', 3.4, 12)
    keyLight.position.set(-2.8, 2.2, 4)
    const rimLight = new THREE.PointLight('#8ab6ec', 2.8, 11)
    rimLight.position.set(3.5, -1.5, -1.4)
    scene.add(new THREE.AmbientLight('#6e97a4', 1.1), keyLight, rimLight)

    let width = 1
    let height = 1
    const resize = () => {
      const bounds = host.getBoundingClientRect()
      width = Math.max(bounds.width, 1)
      height = Math.max(bounds.height, 1)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    resize()

    const pointer = { x: 0, y: 0, proximity: 0, targetX: 0, targetY: 0, targetProximity: 0 }
    const pointerMove = (event: PointerEvent) => {
      if (reduceMotion || event.pointerType !== 'mouse') return
      const bounds = host.getBoundingClientRect()
      const normalizedX = (event.clientX - bounds.left) / bounds.width * 2 - 1
      const normalizedY = -((event.clientY - bounds.top) / bounds.height * 2 - 1)
      const distance = Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY)
      pointer.targetX = clamp(normalizedX, -1, 1)
      pointer.targetY = clamp(normalizedY, -1, 1)
      pointer.targetProximity = clamp(1 - distance / 1.32, 0, 1)
    }
    const pointerLeave = () => {
      pointer.targetX = 0
      pointer.targetY = 0
      pointer.targetProximity = 0
    }
    const pointerClick = () => { pulseStartedAt = performance.now() }
    host.addEventListener('pointermove', pointerMove, { passive: true })
    host.addEventListener('pointerleave', pointerLeave, { passive: true })
    host.addEventListener('click', pointerClick)

    let frame = 0
    let pulseStartedAt = -1000
    const timer = new THREE.Timer()
    timer.connect(document)
    const render = (now: number) => {
      timer.update(now)
      const elapsed = timer.getElapsed()
      pointer.x = lerp(pointer.x, pointer.targetX, 0.055)
      pointer.y = lerp(pointer.y, pointer.targetY, 0.055)
      pointer.proximity = lerp(pointer.proximity, pointer.targetProximity, 0.05)
      const pulse = Math.max(0, 1 - (performance.now() - pulseStartedAt) / 650)
      const focus = pointer.proximity + pulse * 0.3

      if (!reduceMotion) {
        planet.rotation.y += 0.00125 + focus * 0.0009
        planet.rotation.x = lerp(planet.rotation.x, pointer.y * 0.21, 0.04)
        planet.rotation.z = lerp(planet.rotation.z, -pointer.x * 0.17, 0.04)
        rings.rotation.x = lerp(rings.rotation.x, pointer.y * 0.28, 0.035)
        rings.rotation.z = lerp(rings.rotation.z, -pointer.x * 0.25, 0.035)
        world.rotation.y += 0.00035
        orbiting.forEach((satellite) => {
          const angle = elapsed * satellite.speed * (1 + focus * 1.65) + satellite.phase
          satellite.mesh.position.set(
            Math.cos(angle) * satellite.radius,
            Math.sin(angle) * satellite.radius * 0.32 * Math.cos(satellite.tilt),
            Math.sin(angle) * satellite.radius * Math.sin(satellite.tilt),
          )
        })
      }

      const targetScale = 1 + pointer.proximity * 0.115 + pulse * 0.075
      planet.scale.setScalar(lerp(planet.scale.x, targetScale, 0.055))
      keyLight.position.x = lerp(keyLight.position.x, -2.8 + pointer.x * 2.2, 0.05)
      keyLight.position.y = lerp(keyLight.position.y, 2.2 + pointer.y * 1.9, 0.05)
      keyLight.intensity = 3.4 + focus * 1.8
      nodeMaterial.opacity = 0.72 + focus * 0.26
      outerMaterial.opacity = 0.38 + focus * 0.33
      rings.children.forEach((ring) => {
        const material = (ring as THREE.Mesh).material as THREE.MeshBasicMaterial
        material.opacity = 0.25 + focus * 0.22
      })
      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    render(performance.now())

    return () => {
      cancelAnimationFrame(frame)
      timer.dispose()
      resizeObserver.disconnect()
      host.removeEventListener('pointermove', pointerMove)
      host.removeEventListener('pointerleave', pointerLeave)
      host.removeEventListener('click', pointerClick)
      scene.traverse((object) => {
        if ('geometry' in object && object.geometry instanceof THREE.BufferGeometry) object.geometry.dispose()
        if ('material' in object) {
          const material = object.material as THREE.Material | THREE.Material[]
          ;(Array.isArray(material) ? material : [material]).forEach((item) => item.dispose())
        }
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [reduceMotion])

  return (
    <div className="globe" ref={hostRef} data-cursor-active role="img" aria-label="An interactive computational globe. Move the pointer nearby to focus the network; click to pulse it." />
  )
}
