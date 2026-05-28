import { useEffect, useRef } from 'react'
import type P5 from 'p5'

type Particle = {
  x: number
  y: number
  seed: number
  radius: number
  drift: number
}

type FlowLine = {
  baseY: number
  seed: number
  amplitude: number
  speed: number
}

type AccentOrb = {
  x: number
  y: number
  radius: number
  seed: number
  hue: 'sky' | 'cyan' | 'indigo'
}

type P5Constructor = new (sketch: (p: P5) => void) => P5

const PARTICLE_COUNT_DESKTOP = 88
const PARTICLE_COUNT_MOBILE = 46
const FLOW_LINE_COUNT_DESKTOP = 8
const FLOW_LINE_COUNT_MOBILE = 5

function GenerativeBackdrop(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particles: Particle[] = []
    const flowLines: FlowLine[] = []
    const accentOrbs: AccentOrb[] = []

    let instance: P5 | undefined
    let disposed = false

    const createSketch = (P5Class: P5Constructor): void => {
      const sketch = (p: P5): void => {
        const resetParticles = (): void => {
          particles.length = 0
          flowLines.length = 0
          accentOrbs.length = 0
          const count = window.innerWidth < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
          const flowLineCount = window.innerWidth < 768 ? FLOW_LINE_COUNT_MOBILE : FLOW_LINE_COUNT_DESKTOP

          for (let i = 0; i < count; i += 1) {
            particles.push({
              x: p.random(),
              y: p.random(),
              seed: p.random(1000),
              radius: p.random(1.4, 4.8),
              drift: p.random(0.08, 0.28)
            })
          }

          for (let i = 0; i < flowLineCount; i += 1) {
            flowLines.push({
              baseY: (i + 0.5) / flowLineCount,
              seed: p.random(1000),
              amplitude: p.random(28, 84),
              speed: p.random(0.45, 0.95)
            })
          }

          accentOrbs.push(
            { x: 0.18, y: 0.24, radius: 220, seed: p.random(1000), hue: 'cyan' },
            { x: 0.78, y: 0.36, radius: 280, seed: p.random(1000), hue: 'sky' },
            { x: 0.42, y: 0.78, radius: 240, seed: p.random(1000), hue: 'indigo' }
          )
        }

        const drawRadialWash = (): void => {
          const context = p.drawingContext as CanvasRenderingContext2D
          const gradient = context.createRadialGradient(
            p.width * 0.82,
            p.height * 0.12,
            0,
            p.width * 0.82,
            p.height * 0.12,
            Math.max(p.width, p.height) * 0.82
          )

          gradient.addColorStop(0, 'rgba(14, 165, 233, 0.16)')
          gradient.addColorStop(0.45, 'rgba(125, 211, 252, 0.08)')
          gradient.addColorStop(1, 'rgba(248, 250, 252, 0)')
          context.fillStyle = gradient
          context.fillRect(0, 0, p.width, p.height)
        }

        const drawBlueprintGrid = (scroll: number): void => {
          const gridSize = window.innerWidth < 768 ? 56 : 72
          const offsetY = -((scroll * 0.18) % gridSize)

          p.strokeWeight(1)

          for (let x = -gridSize; x < p.width + gridSize; x += gridSize) {
            p.stroke(14, 165, 233, x % (gridSize * 3) === 0 ? 16 : 7)
            p.line(x, 0, x, p.height)
          }

          for (let y = offsetY - gridSize; y < p.height + gridSize; y += gridSize) {
            p.stroke(14, 165, 233, Math.round(y / gridSize) % 3 === 0 ? 14 : 6)
            p.line(0, y, p.width, y)
          }
        }

        const drawAccentOrbs = (time: number, scroll: number): void => {
          const context = p.drawingContext as CanvasRenderingContext2D

          accentOrbs.forEach((orb) => {
            const wobbleX = (p.noise(orb.seed, time * 1.8) - 0.5) * 54
            const wobbleY = (p.noise(orb.seed + 20, time * 1.8) - 0.5) * 44 - scroll * 0.035
            const x = orb.x * p.width + wobbleX
            const y = orb.y * p.height + wobbleY
            const radius = orb.radius * (window.innerWidth < 768 ? 0.72 : 1)
            const gradient = context.createRadialGradient(x, y, 0, x, y, radius)
            const color =
              orb.hue === 'indigo'
                ? '99, 102, 241'
                : orb.hue === 'cyan'
                  ? '34, 211, 238'
                  : '14, 165, 233'

            gradient.addColorStop(0, `rgba(${color}, 0.14)`)
            gradient.addColorStop(0.48, `rgba(${color}, 0.06)`)
            gradient.addColorStop(1, `rgba(${color}, 0)`)
            context.fillStyle = gradient
            context.fillRect(x - radius, y - radius, radius * 2, radius * 2)
          })
        }

        const drawFlowLines = (time: number, scroll: number): void => {
          p.noFill()

          flowLines.forEach((line, index) => {
            p.beginShape()
            p.stroke(index % 2 === 0 ? 14 : 2, index % 2 === 0 ? 165 : 132, index % 2 === 0 ? 233 : 199, 30)
            p.strokeWeight(index % 3 === 0 ? 1.6 : 1)

            for (let x = -80; x <= p.width + 80; x += 28) {
              const normalizedX = x / Math.max(p.width, 1)
              const noiseOffset = (p.noise(line.seed + normalizedX * 2.7, time * line.speed) - 0.5) * line.amplitude
              const wave = p.sin(normalizedX * p.TWO_PI * 1.35 + time * 8 + line.seed) * line.amplitude * 0.22
              const y = line.baseY * p.height + noiseOffset + wave - scroll * 0.05
              p.vertex(x, y)
            }

            p.endShape()
          })
        }

        p.setup = () => {
          const canvas = p.createCanvas(window.innerWidth, window.innerHeight)
          canvas.parent(container)
          p.pixelDensity(Math.min(window.devicePixelRatio, 2))
          resetParticles()

          if (prefersReducedMotion) {
            p.noLoop()
          }
        }

        p.draw = () => {
          p.clear()

          const time = p.millis() * 0.00012
          const scroll = window.scrollY
          const pointerX = p.mouseX >= 0 && p.mouseX <= p.width ? p.mouseX : p.width * 0.72
          const pointerY = p.mouseY >= 0 && p.mouseY <= p.height ? p.mouseY : p.height * 0.28

          drawRadialWash()
          drawAccentOrbs(time, scroll)
          drawBlueprintGrid(scroll)
          drawFlowLines(time, scroll)

          const positions = particles.map((particle) => {
            const noiseX = (p.noise(particle.seed, time) - 0.5) * 120
            const noiseY = (p.noise(particle.seed + 50, time) - 0.5) * 90
            const travelHeight = p.height + 180
            const parallaxY = (((particle.y * p.height - scroll * particle.drift) % travelHeight) + travelHeight) % travelHeight - 90
            const distanceToPointer = p.dist(particle.x * p.width, parallaxY, pointerX, pointerY)
            const pull = p.constrain(1 - distanceToPointer / 360, 0, 1)

            return {
              x: particle.x * p.width + noiseX + (pointerX - p.width / 2) * 0.018 * pull,
              y: parallaxY + noiseY + (pointerY - p.height / 2) * 0.014 * pull,
              radius: particle.radius + pull * 1.8
            }
          })

          p.noFill()
          p.strokeWeight(1)

          for (let i = 0; i < positions.length; i += 1) {
            for (let j = i + 1; j < positions.length; j += 1) {
              const distance = p.dist(positions[i].x, positions[i].y, positions[j].x, positions[j].y)

              if (distance < 132) {
                const alpha = p.map(distance, 0, 132, 58, 0)
                p.stroke(14, 165, 233, alpha)
                p.line(positions[i].x, positions[i].y, positions[j].x, positions[j].y)
              }
            }
          }

          positions.forEach((position, index) => {
            const shimmer = p.sin(time * 18 + particles[index].seed) * 0.35 + 0.65

            p.noStroke()
            p.fill(14, 165, 233, 36 * shimmer)
            p.circle(position.x, position.y, position.radius * 5.4)
            p.fill(2, 132, 199, 88 * shimmer)
            p.circle(position.x, position.y, position.radius)
          })

          p.noFill()
          p.stroke(14, 165, 233, 18)
          p.strokeWeight(1)

          for (let ring = 0; ring < 4; ring += 1) {
            const size = 220 + ring * 74 + p.sin(time * 6 + ring) * 18
            p.ellipse(p.width * 0.88, p.height * 0.22, size, size * 0.62)
          }

          p.noStroke()
          p.fill(14, 165, 233, 18)
          for (let marker = 0; marker < 5; marker += 1) {
            const x = p.width * (0.12 + marker * 0.19)
            const y = p.height * 0.92 + p.sin(time * 10 + marker) * 12
            p.rect(x, y, 42, 2, 999)
          }
        }

        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight)
          resetParticles()

          if (prefersReducedMotion) {
            p.redraw()
          }
        }
      }

      if (!disposed) {
        instance = new P5Class(sketch)
      }
    }

    void import('p5').then(({ default: P5Constructor }) => {
      createSketch(P5Constructor)
    })

    return () => {
      disposed = true
      instance?.remove()
    }
  }, [])

  return <div ref={containerRef} className="generative-backdrop" aria-hidden="true" />
}

export default GenerativeBackdrop
