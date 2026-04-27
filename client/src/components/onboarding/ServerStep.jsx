import { useState } from 'react'
import './OnboardingSteps.css'

const SERVERS = [
  { id: 'c1', name: 'c1', location: 'London, UK', flag: '🇬🇧' },
  { id: 'c2', name: 'c2', location: 'Frankfurt, DE', flag: '🇩🇪' },
  { id: 'c3', name: 'c3', location: 'Amsterdam, NL', flag: '🇳🇱' },
  { id: 'c4', name: 'c4', location: 'Paris, FR', flag: '🇫🇷' },
  { id: 'c5', name: 'c5', location: 'New York, US', flag: '🇺🇸' },
  { id: 'c6', name: 'c6', location: 'Los Angeles, US', flag: '🇺🇸' },
  { id: 'c7', name: 'c7', location: 'Singapore, SG', flag: '🇸🇬' },
  { id: 'c8', name: 'c8', location: 'Tokyo, JP', flag: '🇯🇵' },
]

export default function ServerStep({ selected, onSelect }) {
  const [showAll, setShowAll] = useState(false)
  const displayServers = showAll ? SERVERS : SERVERS.slice(0, 4)

  return (
    <div className="step-content">
      <h2>Choose your server</h2>
      <p>Select a server closest to you for the best performance.</p>
      
      <div className="server-grid">
        {displayServers.map(server => (
          <button
            key={server.id}
            className={`server-card ${selected === server.id ? 'selected' : ''}`}
            onClick={() => onSelect(server.id)}
          >
            <span className="server-flag">{server.flag}</span>
            <span className="server-name">{server.name}</span>
            <span className="server-location">{server.location}</span>
          </button>
        ))}
      </div>
      
      {!showAll && SERVERS.length > 4 && (
        <button className="show-more-btn" onClick={() => setShowAll(true)}>
          Show all {SERVERS.length} servers
        </button>
      )}
    </div>
  )
}
