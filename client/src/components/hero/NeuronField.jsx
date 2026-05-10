import { useEffect, useRef, useState } from 'react'
import './NeuronField.css'

export default function NeuronField({ dotCount = 40, animationSpeed = 1 }) {
  const canvasRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handler = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const dots = []
    const cols = Math.ceil(Math.sqrt(dotCount * 2))
    const rows = Math.ceil(dotCount / cols)
    
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        baseX: Math.random() * canvas.offsetWidth,
        baseY: Math.random() * canvas.offsetHeight,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5
      })
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      
      ctx.clearRect(0, 0, w, h)
      
      time += 0.01 * animationSpeed

      dots.forEach((dot, i) => {
        const offsetX = Math.sin(time * dot.speed + dot.phase) * 20
        const offsetY = Math.cos(time * dot.speed * 0.7 + dot.phase) * 15
        
        dot.x = dot.baseX + offsetX
        dot.y = dot.baseY + offsetY

        const pulse = (Math.sin(time * 2 + dot.phase) + 1) / 2
        const alpha = 0.3 + pulse * 0.4

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 3 + pulse * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`
        ctx.fill()

        // Draw connections to nearby dots
        dots.slice(i + 1).forEach(other => {
          const dx = other.x - dot.x
          const dy = other.y - dot.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / 100) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [dotCount, animationSpeed, reducedMotion])

  return (
    <canvas 
      ref={canvasRef} 
      className="neuron-field"
      style={{ display: reducedMotion ? 'none' : 'block' }}
    />
  )
}