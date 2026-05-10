# Heyron Docs - Component Library & New Pages
## Based on Catherine's MockHeyron (https://github.com/catherinebb272/MockHeyron)

---

## 🎨 DESIGN TOKENS (CSS Variables)

Extract into `/src/styles/design-system.css`:

```css
:root {
  /* Colors */
  --bg-page: #07090C;
  --bg-panel: #0F141C;
  --bg-panel-2: #161B23;
  --border-muted: #1C222B;
  --border-strong: #2D333B;
  --brand-primary: #273957;
  --brand-secondary: #546E8F;
  --accent: #22D3EE;
  --accent-soft: rgba(34,211,238,0.12);
  --accent-edge: rgba(34,211,238,0.50);
  --text-primary: #e6edf3;
  --text-secondary: #8B9CB5;
  --text-muted: #8b949e;
  --text-tertiary: #6E7E94;
  --success: #34D399;
  --warning: #F59E0B;
  --error: #DC2626;
  
  /* Border Radius */
  --r-sm: 8px;
  --r-md: 10px;
  --r-lg: 14px;
  --r-xl: 20px;
}
```

---

## 🧱 REUSABLE COMPONENTS TO BUILD

### 1. SpaceScene
**Purpose:** Hero background with floating ship and raccoon
**Location:** `/src/components/hero/SpaceScene.jsx`
**Props:** `shipPosition?, raccoonPosition?, animationDuration?`
**Assets needed:** ship.png, raccoon.png (or raccoonspace.png), bg-space.png
**States:** Default (animated), static (no animation for reduced motion)

### 2. PageHeader  
**Purpose:** Logo + nav header
**Location:** `/src/components/layout/PageHeader.jsx`
**Props:** `title?, slogan?, navLinks?`
**Variants:** 
- Default (with nav)
- Minimal (logo only)
- With user avatar

### 3. FooterNav
**Purpose:** Fixed bottom navigation bar
**Location:** `/src/components/layout/FooterNav.jsx`
**Props:** `items: Array<{label, icon, href}>`

### 4. StatCard
**Purpose:** Metric display with optional sparkline
**Location:** `/src/components/ui/StatCard.jsx`
**Props:** `title, value, trend?, sparklineData?`
**Variants:** Small (compact), Large (with graph)

### 5. QuickCard
**Purpose:** Clickable card with icon, title, description
**Location:** `/src/components/ui/QuickCard.jsx`
**Props:** `icon, title, description, href?, onClick?`
**States:** Default, Hover (glow + lift), Active, Disabled

### 6. IconCard
**Purpose:** Grid card with icon for support/tools
**Location:** `/src/components/ui/IconCard.jsx`
**Props:** `icon, title, description, buttonText?, buttonHref?`

### 7. RonPanel
**Purpose:** Ron avatar chat panel with dumpster button
**Location:** `/src/components/ui/RonPanel.jsx`
**Props:** `message?, showDumpster?, onDumpsterClick?`
**Includes:** Ron avatar, text bubble, satellite dish, dumpster button

### 8. DumpsterModal
**Purpose:** Password-protected moderator modal
**Location:** `/src/components/ui/DumpsterModal.jsx`
**Props:** `isOpen, onClose, onSubmit`
**States:** Closed, Open, Loading, Error

### 9. WorkflowBar
**Purpose:** Horizontal step indicator (Support workflow)
**Location:** `/src/components/ui/WorkflowBar.jsx`
**Props:** `steps: Array<{icon, label, href?}>`

### 10. Card Grid Container
**Purpose:** Responsive grid wrapper
**Location:** `/src/components/ui/CardGrid.jsx`
**Props:** `columns?: 2 | 3 | 4, gap?, children`

### 11. Panel
**Purpose:** Content container with gradient background
**Location:** `/src/components/ui/Panel.jsx`
**Props:** `children, className?`
**Variants:** Default, Elevated (with glow), Compact

### 12. Button variants
**Location:** `/src/components/ui/Button.jsx`
**Variants:**
- Primary (cyan bg, dark text)
- Ghost (transparent, border)
- Link (text only, pill shape)
- Icon (square, icon only)

### 13. Pill/Badge
**Purpose:** Label tag
**Location:** `/src/components/ui/Pill.jsx`
**Props:** `label, variant?: 'default' | 'accent' | 'success' | 'warning' | 'error'`

### 14. Input/Field
**Location:** `/src/components/ui/Input.jsx`
**Variants:** Text, Password (with show/hide), Textarea, Select
**Includes:** Label, hint text, error state

### 15. Toggle
**Purpose:** On/off switch
**Location:** `/src/components/ui/Toggle.jsx`
**Props:** `checked, onChange, label?, description?`

### 16. OptionCard (selectable)
**Purpose:** Radio/checkbox card for selection flows
**Location:** `/src/components/ui/OptionCard.jsx`
**Props:** `title, description, selected, onClick, tag?`

### 17. Steps Progress
**Purpose:** Multi-step progress indicator
**Location:** `/src/components/ui/StepsProgress.jsx`
**Props:** `steps: Array, currentStep, doneSteps?`

### 18. NeuronField (animated)
**Purpose:** Animated background with pulsing dots
**Location:** `/src/components/hero/NeuronField.jsx`
**Props:** `dotCount?, animationSpeed?`

---

## 📄 NEW PAGES TO CREATE

All pages go behind login (ProtectedRoute). Create new route endpoints.

### Page 1: /launchpad (Agent Launchpad)
**File:** `/src/pages/Launchpad.jsx`
**Based on:** `hello-screen.html` from MockHeyron
**Components needed:** SpaceScene, Panel, OptionCard, Pill, Button
**Notes:** Beginner vs Expert path selection

### Page 2: /launchpad-config (Onboarding Config)
**File:** `/src/pages/LaunchpadConfig.jsx`
**Based on:** `launchpad-final.html` (partial)
**Components needed:** StepsProgress, OptionCard, Input, Toggle, IntegrationCard
**Notes:** Step-by-step agent configuration wizard

### Page 3: /mission-control (New Dashboard)
**File:** `/src/pages/MissionControl.jsx`
**Based on:** `site-dashboard.html`
**Components needed:** SpaceScene, StatCard, QuickCard, RonPanel, FooterNav, NeuronField
**Notes:** Replace existing Dashboard with this new design

### Page 4: /support-new (New Support Page)
**File:** `/src/pages/SupportNew.jsx`
**Based on:** `support.html`
**Components needed:** WorkflowBar, IconCard, RonPanel, DumpsterModal, FAQ accordion
**Notes:** Enhanced support page with new workflow

---

## 🎯 PRIORITY ORDER

1. **Design tokens** — extract CSS variables first (shared foundation)
2. **Layout components** — PageHeader, FooterNav, Panel
3. **Hero components** — SpaceScene, NeuronField
4. **UI primitives** — Button, Pill, Input, Toggle, StatCard
5. **Composite components** — QuickCard, IconCard, OptionCard, RonPanel
6. **Modal components** — DumpsterModal
7. **New pages** — Launchpad, MissionControl, SupportNew
8. **Update App.jsx** — add new routes

---

## ⚠️ CONSTRAINTS

- Keep landing page working (don't break `/`)
- Don't modify existing pages unless replacing
- All new pages behind login (ProtectedRoute)
- Use existing auth flow (Supabase)
- Mobile responsive (follow mockup breakpoints)
- Animation should respect `prefers-reduced-motion`

---

## 📁 DIRECTORY STRUCTURE

```
/src
  /components
    /hero
      SpaceScene.jsx
      NeuronField.jsx
    /layout
      PageHeader.jsx
      FooterNav.jsx
    /ui
      Button.jsx
      Pill.jsx
      Input.jsx
      Toggle.jsx
      StatCard.jsx
      QuickCard.jsx
      IconCard.jsx
      CardGrid.jsx
      Panel.jsx
      OptionCard.jsx
      StepsProgress.jsx
      RonPanel.jsx
      DumpsterModal.jsx
      WorkflowBar.jsx
  /styles
    design-system.css
  /pages
    Launchpad.jsx
    LaunchpadConfig.jsx
    MissionControl.jsx
    SupportNew.jsx
```