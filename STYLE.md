# Heyron.ai Official Style Guide

## Design Philosophy
Futuristic command center floating in a digital void — clean, operational, slight.

## Official Colors

| Role | Color | Hex |
|------|-------|-----|
| Background Primary | Deep void | `#0c1018` |
| Background Secondary | Dark navy | `#111822` |
| Card/Panel | Dark panel | `#182230` |
| Text Primary | Off-white | `#e8edf2` |
| Text Secondary | Gray | `#8a9bb0` |
| Text Muted | Muted gray | `#5a6a7a` |
| Border | Dark gray | `#243040` |
| Accent | Cyan | `#5ec4d4` |
| Accent Hover | Cyan dark | `#4ab0c0` |
| Success | Green | `#4ade80` |
| Urgent | Red | `#f87171` |

## Legacy Aliases (for compatibility)
| Role | Color | Hex |
|------|-------|-----|
| void | Deep void | `#0c1018` |
| panel | Dark panel | `#182230` |
| surface | Dark navy | `#111822` |
| cyan | Accent cyan | `#5ec4d4` |
| mint | Success green | `#4ade80` |
| amber | Warning amber | `#f59e0b` |
| violet | Special violet | `#a78bfa` |
| crimson | Error red | `#dc2626` |

## Typography
- **UI/Body**: DM Sans (sans-serif)
- **Code/Data/Metrics**: JetBrains Mono (monospace)

Use monospace for:
- Stats
- Labels
- Model names
- Timestamps
- Dashboards

Use clean sans for everything else.

## Component Styling

### Panels/Cards
- Dark glass, rounded corners, thin luminous borders
- Rounded: 16px (large panels), 12px (normal cards), 10px (buttons/inputs), 6-8px (badges/tags)

### Buttons
- Primary: Cyan background (#5ec4d4), dark text, hover to #4ab0c0
- Secondary: Dark card background, border, light text

### Status Colors
- Active = cyan (#5ec4d4)
- Success = mint (#4ade80)
- Warning = amber (#f59e0b)
- Special/Lead = violet (#a78bfa)
- Error = urgent (#f87171)

### Big Metrics
- Bold
- Monospace
- High contrast
- Feel like operator readouts

Avoid flat bright fills — prefer edge glow and subtle layered depth.

## Spacing
- 4px spacing grid
- Standard panel padding: 16–24px
- Rounded corners: 16px (large), 12px (cards), 10px (buttons), 6-8px (badges)

## Animation Guidelines
Use **slow ambient glow / float / pulse** — keep it subtle.

Animations should communicate:
- **live** — active/online state (pulsing dot)
- **thinking** — processing/loading (typing indicator)
- **active** — user interaction
- **warning** — attention needed
- **failure** — error state

**No flashy motion for no reason.**

## Tone of the UI
- Smart
- Calm
- Operational
- Slight

## Mobile-First
People typically discover via mobile. Design for mobile first, then scale up.

## Notes
- This style is based on the actual heyron.ai website
- See `docs/heyron.ai — Meet Your AI Agent.html` for full reference
- Last updated: 2026-04-26