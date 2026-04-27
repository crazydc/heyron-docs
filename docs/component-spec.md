# Heyron UI Component Specification

This document details all UI components needed for the Heyron platform redesign.

---

## 📚 Related Documentation

- **[Main Plan](./heyron-modernization-plan.md)** - Overview
- **[Task Breakdown](./task-breakdown.md)** - Tasks
- **[User Flows](./user-flows.md)** - Paths
- **[Design Requirements](./design-requirements.md)** - Design requirements

---

## Table of Contents

1. [Layout Components](#layout-components)
2. [Navigation Components](#navigation-components)
3. [Form Components](#form-components)
4. [Display Components](#display-components)
5. [Interactive Components](#interactive-components)
6. [Feedback Components](#feedback-components)
7. [Component Variants by Page](#component-variants-by-page)

---

## Color & Design Tokens

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0c1018` | Page backgrounds |
| `--bg-secondary` | `#111822` | Section backgrounds |
| `--bg-card` | `#182230` | Card/component backgrounds |
| `--text-primary` | `#e8edf2` | Headings, primary text |
| `--text-secondary` | `#8a9bb0` | Subtitles, descriptions |
| `--text-muted` | `#5a6a7a` | Hints, timestamps |
| `--border` | `#243040` | Borders, dividers |
| `--accent` | `#5ec4d4` | Primary buttons, links |
| `--accent-hover` | `#4ab0c0` | Button hover states |
| `--success` | `#4ade80` | Success states |
| `--warning` | `#eab308` | Warnings, beta notices |
| `--error` | `#f87171` | Error states |
| `--discord` | `#5865F2` | Discord branding |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 (Hero) | DM Sans | 52px | 800 |
| H1 (Section) | DM Sans | 26px | 700 |
| H2 | DM Sans | 20-24px | 700 |
| H3 | DM Sans | 15-18px | 600 |
| Body | DM Sans | 14-16px | 400-500 |
| Small | DM Sans | 11-13px | 400 |
| Button | DM Sans | 14-15px | 600 |

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight spacing |
| `--space-sm` | 8px | Small gaps |
| `--space-md` | 16px | Standard gaps |
| `--space-lg` | 24px | Section padding |
| `--space-xl` | 48px | Large section gaps |
| `--radius-sm` | 8px | Buttons, inputs |
| `--radius-md` | 12px | Cards |
| `--radius-lg` | 20px | Large containers |
| `--radius-full` | 100px | Badges, avatars |

---

# Layout Components

## 1. PageLayout

**Description:** Wrapper component that provides consistent page structure

**Structure:**
```jsx
<PageLayout>
  <Header />
  <main>{children}</main>
  <Footer />
</PageLayout>
```

**Props:**
- `children: ReactNode` - Page content
- `fullWidth?: boolean` - Skip container max-width
- `background?: 'primary' | 'secondary'` - Background variant

---

## 2. Header

**Description:** Top navigation bar (sticky)

**Structure:**
```jsx
<header className="header">
  <div className="container">
    <Logo />
    <nav>{navLinks}</nav>
    <HeaderCTA />
  </div>
</header>
```

**States:**
| State | Left | Center | Right |
|-------|------|--------|-------|
| Unauthenticated | Logo | - | "Sign In" button |
| Authenticated | Logo | Nav links | Profile dropdown |

**Styling:**
- Height: ~60px
- Background: `rgba(12, 16, 24, 0.98)`
- Border-bottom: 1px solid `--border`
- Backdrop-filter: blur(12px)
- Sticky position at top

---

## 3. Logo

**Structure:**
```jsx
<a href="/" className="logo">
  <img src="/logo-icon.png" className="logo-icon" />
  <span className="logo-text">heyron.ai</span>
</a>
```

**Styling:**
- Icon: 32x32px, border-radius 8px
- Text: 20px, font-weight 700, color `--text-primary`

---

## 4. Navigation

**Description:** Main nav links

**Items (Authenticated):**
- Mission Control
- Account
- Sign Out

**Styling:**
- Links: color `--text-secondary`, hover `--text-primary`
- Active: color `--accent`

---

## 5. Footer

**Structure:**
```jsx
<footer className="footer">
  <div className="container">
    <FooterLinks />
    <SocialIcons />
    <Copyright />
  </div>
</footer>
```

**Styling:**
- Background: `--bg-secondary`
- Border-top: 1px solid `--border`
- Padding: 48px 0

---

# Navigation Components

## 6. NavLink

**Description:** Navigation link component

```jsx
<NavLink to="/path" active={boolean}>
  Label
</NavLink>
```

**Props:**
- `to: string` - URL path
- `active?: boolean` - Active state
- `children: ReactNode` - Link label

---

## 7. AuthButton

**Description:** Sign In / Sign Out button in header

**Variants:**
| Variant | Label | Style |
|---------|-------|-------|
| Unauthenticated | "Sign In" | Text link, color `--accent` |
| Authenticated | Avatar + dropdown | Profile icon |

---

## 8. Breadcrumb

**Description:** Path indicator for nested pages

```jsx
<Breadcrumb>
  <Link to="/">Home</Link>
  <span>/</span>
  <span>Account</span>
</Breadcrumb>
```

---

# Form Components

## 9. TextInput

**Description:** Standard text input field

**Structure:**
```jsx
<div className="input-group">
  <label htmlFor="field">Label</label>
  <input 
    id="field"
    type="text|email|password"
    placeholder="Placeholder"
    value={value}
    onChange={handler}
  />
  <span className="hint">Helper text</span>
</div>
```

**Props:**
- `label: string` - Field label
- `name: string` - Input name
- `type: 'text' | 'email' | 'password'` - Input type
- `placeholder?: string` - Placeholder text
- `required?: boolean` - Required field
- `error?: string` - Error message
- `hint?: string` - Helper text

**States:**
| State | Border Color | Background |
|-------|--------------|------------|
| Default | `--border` | transparent |
| Focus | `--accent` | transparent |
| Error | `--error` | `rgba(248,113,113,0.1)` |
| Disabled | `--border` | `rgba(255,255,255,0.05)` |

**Styling:**
- Height: 44px
- Border-radius: 8px
- Padding: 0 16px
- Border: 1px solid

---

## 10. Button

**Description:** Primary action button

**Variants:**
| Variant | Background | Text Color | Border |
|---------|------------|------------|--------|
| Primary | `--accent` | `#0c1018` | none |
| Primary Hover | `--accent-hover` | - | - |
| Secondary | `--bg-card` | `--text-primary` | `--border` |
| Secondary Hover | - | - | `--text-secondary` |
| Ghost | transparent | `--text-secondary` | none |
| Danger | `--error` | white | none |

**Props:**
- `variant?: 'primary' | 'secondary' | 'ghost' | 'danger'`
- `size?: 'sm' | 'md' | 'lg'`
- `loading?: boolean` - Show spinner
- `disabled?: boolean`
- `fullWidth?: boolean`
- `type?: 'button' | 'submit' | 'reset'`

**Sizes:**
| Size | Padding | Font Size |
|------|---------|-----------|
| sm | 8px 16px | 13px |
| md | 14px 28px | 15px |
| lg | 16px 32px | 16px |

---

## 11. Checkbox

**Description:** Checkbox with label

```jsx
<Checkbox 
  id="terms"
  label="I agree to terms"
  checked={checked}
  onChange={handler}
/>
```

---

## 12. Select

**Description:** Dropdown select

**Structure:**
```jsx
<Select
  label="Server"
  value={selected}
  onChange={handler}
  options={[
    { value: 'c1', label: 'Server c1' },
    // ...
  ]}
/>
```

---

## 13. Toggle

**Description:** On/off toggle switch

```jsx
<Toggle
  label="Enable feature"
  checked={enabled}
  onChange={handler}
/>
```

**Styling:**
- Track: 44px x 24px
- Knob: 20px circle
- Off: `--border` background
- On: `--accent` background

---

## 14. Tooltip

**Description:** Hover tooltip for extra info

**Usage:** Discord ID helper, refund explanation

```jsx
<Tooltip content="Refunds only possible within 5 days of service">
  <Icon />
</Tooltip>
```

---

## 15. Modal

**Description:** Overlay dialog

**Structure:**
```jsx
<Modal isOpen={boolean} onClose={handler}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>Actions</ModalFooter>
</Modal>
```

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `title?: string`

**Styling:**
- Overlay: `rgba(0,0,0,0.7)`
- Modal: `--bg-card`, radius 12px
- Max-width: 480px
- Padding: 24px

---

## 16. FormWizard

**Description:** Multi-step form container (for onboarding)

**Structure:**
```jsx
<FormWizard
  steps={['Step 1', 'Step 2', 'Step 3']}
  currentStep={1}
  onNext={handler}
  onBack={handler}
>
  <StepContent />
</FormWizard>
```

**Features:**
- Progress indicator (step dots/numbers)
- Back/Next navigation
- Step validation before proceeding

---

# Display Components

## 17. Card

**Description:** Generic card container

```jsx
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Actions</CardFooter>
</Card>
```

**Props:**
- `variant?: 'default' | 'accent' | 'success' | 'warning'`
- `padding?: 'sm' | 'md' | 'lg'`

**Styling:**
- Background: `--bg-card`
- Border: 1px solid `--border`
- Border-radius: 12px
- Padding: 18-24px

---

## 18. Badge

**Description:** Status indicator badge

**Variants:**
| Variant | Background | Text |
|---------|------------|------|
| Default | `--bg-card` | `--text-secondary` |
| Success | `rgba(74,222,128,0.1)` | `--success` |
| Warning | `rgba(234,179,8,0.1)` | `--warning` |
| Error | `rgba(248,113,113,0.1)` | `--error` |
| Beta | `rgba(234,179,8,0.08)` | `--warning` |

**Sizes:** sm (font 11px), md (13px), lg (14px)

---

## 19. StatsCard

**Description:** Dashboard statistic display

```jsx
<StatsCard
  value="56"
  label="Hosts Online"
  icon={<Icon />}
/>
```

**Styling:**
- Background: `rgba(94,196,212,0.04)`
- Border: `rgba(94,196,212,0.15)`
- Value: 28px, font-weight 800, color `--accent`
- Label: 11px, uppercase, letter-spacing

---

## 20. Avatar

**Description:** User avatar image

```jsx
<Avatar 
  src={url} 
  name="User Name" 
  size="md"
/>
```

**Sizes:**
| Size | Dimensions |
|------|------------|
| xs | 24px |
| sm | 28px |
| md | 36px |
| lg | 48px |
| xl | 64px |

**Fallback:** Initials on gradient background

---

## 21. ServerCard

**Description:** Display server/agent status (Mission Control)

```jsx
<ServerCard
  name="c1"
  status="online"
  uptime="2h 34m"
  lastPing="Just now"
/>
```

**Status Colors:**
| Status | Indicator |
|--------|-----------|
| Online | `--success` dot |
| Offline | `--error` dot |
| Loading | `--warning` pulsing dot |

---

## 22. PaymentRow

**Description:** Single payment history entry

```jsx
<PaymentRow
  date="2026-04-27"
  amount="£9.99"
  method="Card ending 4242"
  status="paid"
/>
```

---

## 23. ProgressBar

**Description:** Linear progress indicator

```jsx
<ProgressBar value={75} max={100} />
```

**Styling:**
- Track: `--bg-card`, height 8px, radius 4px
- Fill: `--accent`, animate width

---

## 24. StepIndicator

**Description:** Multi-step progress for onboarding

```jsx
<StepIndicator
  steps={['Connect', 'Configure', 'Launch']}
  current={1}
  completed={0}
/>
```

**Styling:**
- Horizontal step dots/numbers
- Completed: `--success` checkmark
- Current: `--accent` filled
- Upcoming: `--border` outline

---

## 25. EmptyState

**Description:** Placeholder when no data

```jsx
<EmptyState
  icon={<Icon />}
  title="No servers yet"
  description="Add your first server to get started"
  action={<Button>Add Server</Button>}
/>
```

---

# Interactive Components

## 26. TabGroup

**Description:** Tab navigation within a page

```jsx
<Tabs>
  <Tab label="Overview" active>
    Content
  </Tab>
  <Tab label="Settings">
    Content
  </Tab>
</Tabs>
```

---

## 27. Dropdown

**Description:** Menu dropdown

```jsx
<Dropdown
  trigger={<Button>Menu</Button>}
  items={[
    { label: 'Item 1', onClick: handler },
    { label: 'Item 2', onClick: handler },
  ]}
/>
```

---

## 28. Accordion

**Description:** Collapsible content sections

```jsx
<Accordion>
  <AccordionItem title="Section 1">
    Content...
  </AccordionItem>
  <AccordionItem title="Section 2">
    Content...
  </AccordionItem>
</Accordion>
```

---

## 29. Toast / Notification

**Description:** Temporary notification popups

**Types:** success, error, warning, info

```jsx
<Toast type="success" message="Changes saved!" />
```

---

## 30. LoadingSpinner

**Description:** Loading indicator

**Variants:**
- Small (16px) - inline
- Medium (24px) - buttons
- Large (48px) - page loading

---

## 31. Skeleton

**Description:** Loading placeholder

```jsx
<Skeleton width={200} height={20} />
```

---

# Feedback Components

## 32. Alert

**Description:** Inline alert message

```jsx
<Alert type="warning">
  Your subscription expires in 3 days
</Alert>
```

**Types:** success, warning, error, info

---

## 33. Banner

**Description:** Full-width alert at top of page

**Usage:** Beta notice, maintenance warning

```jsx
<Banner type="warning" dismissible>
  This is a beta feature
</Banner>
```

---

## 34. ConfirmDialog

**Description:** Confirmation modal

```jsx
<ConfirmDialog
  title="Cancel Subscription?"
  message="This action cannot be undone"
  confirmLabel="Yes, cancel"
  cancelLabel="Keep subscription"
  onConfirm={handler}
  onCancel={handler}
/>
```

---

# Component Variants by Page

## Landing Page

| Component | Usage |
|-----------|-------|
| PageLayout | Page wrapper |
| Header | Logo + Sign In |
| Hero | Main headline + CTAs |
| Badge | "Live" indicator |
| Card | Beta notice |
| Button | Primary/Secondary CTAs |
| StatsCard | User count, etc. |
| Step | How it works |
| Footer | Links |

## Sign Up Page

| Component | Usage |
|-----------|-------|
| PageLayout | Page wrapper |
| Header | Simple (logo only) |
| TextInput | Name, Email, Discord ID |
| Button | Submit |
| Tooltip | Discord ID helper |
| Modal | Discord ID instructions |
| Checkbox | Terms acceptance |
| Alert | Validation errors |

## Onboarding Wizard

| Component | Usage |
|-----------|-------|
| PageLayout | Full-width |
| FormWizard | Step container |
| StepIndicator | Progress |
| Select | Server selection |
| TextInput | SSH key, etc. |
| Toggle | Options |
| Button | Back/Next/Complete |
| Card | Instructions |

## Mission Control

| Component | Usage |
|-----------|-------|
| PageLayout | Page wrapper |
| Header | Authenticated nav |
| TabGroup | Overview/Settings |
| ServerCard | Server list |
| StatsCard | Status stats |
| EmptyState | No servers |
| Button | Actions |
| Modal | Server details |

## Account Page

| Component | Usage |
|-----------|-------|
| PageLayout | Page wrapper |
| TabGroup | Profile/Payments/Subscription |
| TextInput | Edit fields |
| Button | Save changes |
| PaymentRow | Payment history |
| Badge | Payment status |
| Tooltip | Refund info |
| ConfirmDialog | Cancel confirmation |
| Alert | Status messages |

---

# Implementation Notes

## Component Library Recommendation

Use **shadcn/ui** as base (built on Radix UI):
- Already uses similar design language
- Accessible by default
- Easy to customize tokens
- React + TypeScript

## File Structure

```
src/components/
├── ui/                    # Base components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Modal.tsx
│   ├── ...
│   └── index.ts
├── layout/
│   ├── Layout.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── index.ts
└── features/              # Page-specific
    ├── auth/
    ├── onboarding/
    ├── dashboard/
    └── account/
```

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Single column, stacked nav |
| Tablet | 640-1024px | Fluid layouts |
| Desktop | > 1024px | Fixed max-width 660px |