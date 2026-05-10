import { useEffect, useState } from 'react'
import './SpaceScene.css'

export default function SpaceScene({ 
  shipPosition = { x: 70, y: 30 },
  raccoonPosition = { x: 25, y: 60 },
  animationDuration = 20 
}) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handler = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="space-scene">
      <img src={baseUrl + "/assets/bg-space.png"} alt="" className="space-scene__bg-img" />
      
      {/* Stars layer */}
      <div className="space-scene__stars">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="space-scene__star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`
            }}
          />
        )}
      </div>

      {/* Ship */}
      <div 
        className={`space-scene__ship ${reducedMotion ? '' : 'space-scene__ship--floating'}`}
        style={{ 
          left: `${shipPosition.x}%`, 
          top: `${shipPosition.y}%` 
        }}
      >
        <div className="space-scene__ship-glow" />
        <img src={baseUrl + "/assets/ship.png"} alt="Spaceship" className="space-scene__ship-img" />
      </div>

      {/* Raccoon */}
      <div 
        className={`space-scene__raccoon ${reducedMotion ? '' : 'space-scene__raccoon--floating'}`}
        style={{ 
          left: `${raccoonPosition.x}%`, 
          top: `${raccoonPosition.y}%` 
        }}
      >
        <div className="space-scene__raccoon-glow" />
        <img src={baseUrl + "/assets/raccoon.png"} alt="Ron" className="space-scene__raccoon-img" />
      </div>
    </div>
  )
}