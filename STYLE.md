# Heyron Mission Control - Style Guide

## Design Philosophy

Build it like a futuristic command center floating in a digital void.

## Look & Feel

- **Dark by default** — Deep navy / black backgrounds
- **Luminous cyan** as primary accent
- **Glassy dark panels** with subtle glow
- **Monospace data readouts** mixed with clean modern UI text
- **Subtle grid / "system" texture** in background
- **Motion should signal state, not just decorate**

## Primary Colors

| Role | Color | Hex |
|------|-------|-----|
| Background | Deep void | `#07090C` |
| Card/Panel | Dark panel | `#0F141C` |
| Primary | Cyan | `#22D3EE` |
| Success | Mint | `#34D399` |
| Warning | Amber | `#F59E0B` |
| Special | Violet | `#A78BFA` |
| Destructive/Error | Crimson | `#DC2626` |

## Derived Neutrals

| Role | Color | Approx Hex |
|------|-------|------------|
| Secondary surface | Navy | `#161B23` |
| Muted/Border | Dark gray | `#1C222B` |
| Foreground text | Off-white | `#E8EDF1` |

## Typography

- **UI/Body**: Inter (sans-serif)
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
- Restrained dark surfaces with cyan glow on hover/focus

### Status Colors
- Active = cyan
- Success = mint
- Warning = amber
- Special/Lead = violet
- Error = crimson

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
- **live** — active/online state
- **thinking** — processing/loading
- **active** — user interaction
- **warning** — attention needed
- **failure** — error state

**No flashy motion for no reason.**

## Tone of the UI

- Smart
- Calm
- Operational
- Slightly mysterious
- High-trust
- Feels powerful, but not corporate
- Feels like a serious tool with soul

## Avoid

- Bright white layouts
- Generic SaaS gradients
- Playful candy colors
- Overly rounded "cute startup" look
- Cluttered dashboards
- Loud animations
- Sterile enterprise blandness

## Keywords

- Dark void
- Neon cyan
- Mission control
- Luminous edges
- Glass panels
- Operator console
- Monospace telemetry
- Subtle grid
- Premium sci-fi
- Serious but magical