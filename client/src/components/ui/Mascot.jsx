import './Mascot.css'

// Full body mascot with different poses
export function Mascot({ pose = 'greeting', size = 120 }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size * 200 / 160} aria-hidden="true" className="mascot">
      <rect x="0" y="0" width="160" height="200" rx="18" fill="#52525B" opacity="0.30" />
      <path d="M 55 100 L 60 152 L 100 152 L 105 100 Q 92 92 80 94 Q 68 92 55 100 Z" fill="#273957" />
      <path d="M 60 100 L 73 100 L 78 122 Z" fill="#1A2238" />
      <path d="M 100 100 L 87 100 L 82 122 Z" fill="#1A2238" />
      <path d="M 73 100 L 80 125 L 87 100 Z" fill="#F5F5F5" />
      <path d="M 70 113 L 80 118 L 70 123 Z" fill="#546E8F" /><path d="M 90 113 L 80 118 L 90 123 Z" fill="#546E8F" />
      <rect x="77" y="115" width="6" height="6" rx="1" fill="#8B9CB5" />
      
      {/* Eyes */}
      <rect x="62" y="152" width="14" height="22" rx="2" fill="#273957" />
      <rect x="84" y="152" width="14" height="22" rx="2" fill="#273957" />
      <ellipse cx="69" cy="176" rx="9" ry="4" fill="#18181B" />
      <ellipse cx="91" cy="176" rx="9" ry="4" fill="#18181B" />
      
      {/* Ears */}
      <path d="M 52 100 Q 42 116 44 142 Q 46 150 53 148 Q 56 128 60 105 Z" fill="#273957" />
      <ellipse cx="48" cy="146" rx="6" ry="4" fill="#3F3F46" />
      <path d="M 108 100 Q 122 92 128 74 Q 132 62 124 60 Q 118 70 116 84 Q 113 96 105 105 Z" fill="#273957" />
      <circle cx="126" cy="62" r="6" fill="#3F3F46" />
    </svg>
  )
}

// Small head mascot for companion bubble
export function HeadMascot({ size = 22 }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true" className="head-mascot">
      <circle cx="20" cy="22" r="13" fill="#D4D4D8" />
      <path d="M 10 15 L 12 7 L 17 13 Z" fill="#3F3F46" />
      <path d="M 30 15 L 28 7 L 23 13 Z" fill="#3F3F46" />
      <path d="M 12 12 L 13 9 L 15 12 Z" fill="#18181B" />
      <path d="M 28 12 L 27 9 L 25 12 Z" fill="#18181B" />
      <path d="M 9 21 Q 14 18 20 20 Q 26 18 31 21 Q 28 26 24 24 Q 22 22 20 23 Q 18 22 16 24 Q 12 26 9 21 Z" fill="#18181B" />
      <circle cx="15" cy="21" r="1.3" fill="#F5F5F5" />
      <circle cx="25" cy="21" r="1.3" fill="#F5F5F5" />
      <ellipse cx="20" cy="27" rx="4" ry="3" fill="#F5F5F5" />
      <ellipse cx="20" cy="26" rx="1.3" ry="1" fill="#18181B" />
    </svg>
  )
}
