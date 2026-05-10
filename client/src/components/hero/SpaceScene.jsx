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

  return (
    <div className="space-scene">
      <div className="space-scene__bg" />
      
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
        ))}
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
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <path d="M30 5L45 35H15L30 5Z" fill="url(#shipGrad)" stroke="#22D3EE" strokeWidth="1"/>
          <circle cx="30" cy="20" r="5" fill="#22D3EE" opacity="0.8"/>
          <defs>
            <linearGradient id="shipGrad" x1="30" y1="5" x2="30" y2="35">
              <stop stopColor="#546E8F"/>
              <stop offset="1" stopColor="#273957"/>
            </linearGradient>
          </defs>
        </svg>
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
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Simple raccoon face */}
          <circle cx="25" cy="25" r="20" fill="#4a4a4a"/>
          <ellipse cx="25" cy="28" rx="12" ry="10" fill="#e0e0e0"/>
          <circle cx="18" cy="20" r="3" fill="#1a1a1a"/>
          <circle cx="32" cy="20" r="3" fill="#1a1a1a"/>
          <ellipse cx="25" cy="26" rx="4" ry="3" fill="#1a1a1a"/>
          {/* Ears */}
          <circle cx="10" cy="12" r="6" fill="#4a4a4a"/>
          <circle cx="40" cy="12" r="6" fill="#4a4a4a"/>
        </svg>
      </div>
    </div>
  )
}