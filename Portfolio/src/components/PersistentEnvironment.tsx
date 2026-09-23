import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useReducedMotion } from 'framer-motion'
import { BrandMark } from './BrandMark'

type PathLayer = {
  curve: THREE.CatmullRomCurve3
  lineMaterial: THREE.LineBasicMaterial
  node: THREE.Mesh
  anchor: THREE.Vector2
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount

export function PersistentEnvironment() {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const compact = window.matchMedia('(max-width: 700px)').matches
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2('#020604', 0.14)

    const camera = new THREE.PerspectiveCamera(compact ? 38 : 34, 1, 0.1, 30)
    camera.position.set(0, 0, 5.3)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !compact, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.1 : 1.55))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    host.prepend(renderer.domElement)

    const environment = new THREE.Group()
    environment.position.x = compact ? 0.62 : 0.86
    scene.add(environment)

    const textureMaterial = new THREE.MeshBasicMaterial({
      color: '#3dff91',
      transparent: true,
      opacity: 0.52,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const textureGeometry = new THREE.PlaneGeometry(compact ? 5 : 6.1, compact ? 5 : 6.1, compact ? 18 : 30, compact ? 18 : 30)
    const vertices = textureGeometry.attributes.position
    for (let index = 0; index < vertices.count; index += 1) {
      const x = vertices.getX(index)
      const y = vertices.getY(index)
      vertices.setZ(index, -0.12 * Math.cos(x * 1.1) * Math.cos(y * 1.2) - Math.hypot(x, y) * 0.028)
    }
    vertices.needsUpdate = true
    textureGeometry.computeVertexNormals()
    const architecturePlane = new THREE.Mesh(textureGeometry, textureMaterial)
    architecturePlane.rotation.set(-0.06, -0.16, 0.03)
    architecturePlane.position.z = -0.32
    environment.add(architecturePlane)

    let released = false
    const loader = new THREE.TextureLoader()
    loader.load('/architecture-reference.png', (texture) => {
      if (released) {
        texture.dispose()
        return
      }
      texture.colorSpace = THREE.SRGBColorSpace
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
      textureMaterial.map = texture
      textureMaterial.needsUpdate = true
    })

    const depthPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(compact ? 5.7 : 7.1, compact ? 5.7 : 7.1),
      new THREE.MeshBasicMaterial({ color: '#075a30', transparent: true, opacity: 0.055, blending: THREE.AdditiveBlending, depthWrite: false }),
    )
    depthPlane.position.set(0.12, -0.07, -0.85)
    depthPlane.rotation.set(0.08, 0.12, -0.04)
    environment.add(depthPlane)

    const coreMask = new THREE.Mesh(
      new THREE.CircleGeometry(compact ? 0.34 : 0.42, 48),
      new THREE.MeshBasicMaterial({ color: '#020604', transparent: true, opacity: 0.95, depthWrite: false }),
    )
    coreMask.position.set(0.07, 0.02, 0.1)
    environment.add(coreMask)

    const ring = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(new THREE.EllipseCurve(0.07, 0.02, compact ? 0.48 : 0.58, compact ? 0.48 : 0.58, 0, Math.PI * 2, false, 0).getPoints(64).map((point) => new THREE.Vector3(point.x, point.y, 0.13))),
      new THREE.LineBasicMaterial({ color: '#72ffae', transparent: true, opacity: 0.38 }),
    )
    environment.add(ring)

    const pathSpecs = [
      [new THREE.Vector3(-2.7, 1.38, 0), new THREE.Vector3(-1.1, 1.04, 0.06), new THREE.Vector3(-0.28, 0.27, 0.14), new THREE.Vector3(0.07, 0.02, 0.16)],
      [new THREE.Vector3(-2.85, -1.22, 0), new THREE.Vector3(-1.25, -0.92, 0.05), new THREE.Vector3(-0.42, -0.3, 0.12), new THREE.Vector3(0.07, 0.02, 0.16)],
      [new THREE.Vector3(2.5, 1.3, 0), new THREE.Vector3(1.26, 0.96, 0.05), new THREE.Vector3(0.45, 0.32, 0.12), new THREE.Vector3(0.07, 0.02, 0.16)],
      [new THREE.Vector3(2.72, -1.16, 0), new THREE.Vector3(1.24, -0.78, 0.05), new THREE.Vector3(0.44, -0.24, 0.12), new THREE.Vector3(0.07, 0.02, 0.16)],
    ]
    const anchors = [new THREE.Vector2(-0.62, 0.36), new THREE.Vector2(-0.62, -0.36), new THREE.Vector2(0.62, 0.36), new THREE.Vector2(0.62, -0.36)]
    const paths: PathLayer[] = pathSpecs.map((points, index) => {
      const curve = new THREE.CatmullRomCurve3(points)
      const lineMaterial = new THREE.LineBasicMaterial({ color: '#38ff8d', transparent: true, opacity: 0.13 })
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(compact ? 24 : 42)), lineMaterial)
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(compact ? 0.032 : 0.04, 10, 10),
        new THREE.MeshBasicMaterial({ color: '#a6ffd0', transparent: true, opacity: 0.78 }),
      )
      node.position.copy(points[0])
      environment.add(line, node)
      return { curve, lineMaterial, node, anchor: anchors[index] }
    })

    const packet = new THREE.Mesh(
      new THREE.SphereGeometry(compact ? 0.045 : 0.058, 12, 12),
      new THREE.MeshBasicMaterial({ color: '#dcffe9', transparent: true, opacity: 0.92 }),
    )
    environment.add(packet)
    const packetLight = new THREE.PointLight('#66ff9f', compact ? 0.55 : 0.85, 2.4)
    packet.add(packetLight)

    scene.add(new THREE.AmbientLight('#0b3b23', 1.3))

    const resize = () => {
      const bounds = host.getBoundingClientRect()
      renderer.setSize(Math.max(bounds.width, 1), Math.max(bounds.height, 1), false)
      camera.aspect = Math.max(bounds.width, 1) / Math.max(bounds.height, 1)
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    resize()

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, focus: 0, targetFocus: 0, activePath: 0, targetPath: 0 }
    const move = (event: PointerEvent) => {
      if (reduceMotion || compact || event.pointerType !== 'mouse') return
      const x = event.clientX / window.innerWidth * 2 - 1
      const y = -(event.clientY / window.innerHeight * 2 - 1)
      pointer.targetX = clamp(x, -1, 1)
      pointer.targetY = clamp(y, -1, 1)
      let nearestPath = 0
      let nearestDistance = Infinity
      paths.forEach((path, index) => {
        const distance = Math.hypot(x - path.anchor.x, y - path.anchor.y)
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestPath = index
        }
      })
      pointer.targetPath = nearestPath
      pointer.targetFocus = clamp(1 - nearestDistance / 0.82, 0, 1)
    }
    const leave = () => {
      pointer.targetX = 0
      pointer.targetY = 0
      pointer.targetFocus = 0
    }
    let scrollTarget = 0
    const scroll = () => {
      const range = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      scrollTarget = clamp(window.scrollY / range, 0, 1)
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerleave', leave, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    scroll()

    const timer = new THREE.Timer()
    timer.connect(document)
    let frame = 0
    let smoothedScroll = scrollTarget
    const render = (now: number) => {
      timer.update(now)
      const elapsed = timer.getElapsed()
      pointer.x = lerp(pointer.x, pointer.targetX, 0.045)
      pointer.y = lerp(pointer.y, pointer.targetY, 0.045)
      pointer.focus = lerp(pointer.focus, pointer.targetFocus, 0.05)
      smoothedScroll = lerp(smoothedScroll, scrollTarget, 0.035)
      pointer.activePath = pointer.targetPath
      const breath = reduceMotion ? 0 : Math.sin(elapsed * 0.42) * 0.012
      const contactFocus = Math.max(0, (smoothedScroll - 0.82) / 0.18)
      const energy = pointer.focus + contactFocus * 0.28

      environment.rotation.x = lerp(environment.rotation.x, pointer.y * 0.07, 0.035)
      environment.rotation.y = lerp(environment.rotation.y, -0.16 - pointer.x * 0.09, 0.035)
      environment.rotation.z = lerp(environment.rotation.z, (smoothedScroll - 0.5) * 0.06, 0.03)
      environment.position.y = lerp(environment.position.y, (0.5 - smoothedScroll) * 0.18, 0.03)
      environment.scale.setScalar(1 + breath + energy * 0.038)
      architecturePlane.material.opacity = 0.47 + energy * 0.19
      depthPlane.material.opacity = 0.045 + contactFocus * 0.04
      ring.rotation.z += reduceMotion ? 0 : 0.0014
      ring.material.opacity = 0.3 + energy * 0.34

      paths.forEach((path, index) => {
        const active = index === pointer.activePath
        path.lineMaterial.opacity = 0.105 + (active ? energy * 0.62 : 0)
        const nodeScale = 1 + (active ? energy * 0.85 : 0)
        path.node.scale.setScalar(nodeScale)
      })
      const activePath = paths[pointer.activePath]
      const travel = (elapsed * (0.075 + energy * 0.13) + pointer.activePath * 0.21) % 1
      activePath.curve.getPointAt(travel, packet.position)
      packet.scale.setScalar(0.75 + energy * 0.6)
      packet.visible = !reduceMotion && (energy > 0.08 || !compact)
      renderer.render(scene, camera)
      frame = requestAnimationFrame(render)
    }
    render(performance.now())

    return () => {
      released = true
      cancelAnimationFrame(frame)
      timer.dispose()
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
      window.removeEventListener('scroll', scroll)
      scene.traverse((object) => {
        if ('geometry' in object && object.geometry instanceof THREE.BufferGeometry) object.geometry.dispose()
        if ('material' in object) {
          const materials = object.material as THREE.Material | THREE.Material[]
          ;(Array.isArray(materials) ? materials : [materials]).forEach((material) => {
            if ('map' in material && material.map instanceof THREE.Texture) material.map.dispose()
            material.dispose()
          })
        }
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [reduceMotion])

  return (
    <div ref={hostRef} className="persistent-environment" aria-hidden="true">
      <span className="persistent-environment__veil" />
      <span className="persistent-environment__core"><BrandMark /></span>
    </div>
  )
}
