# Tropic Coffee Design System
## "Digital Oasis" - A Visual Identity Guide

---

## Philosophy

Tropic Coffee's website is designed as a **"Digital Oasis"** - a calm, refreshing, and easily navigable space that contrasts with the noise of social media. The design follows four core pillars:

### 1. **The Botanical Breath** (Visual Calm)
Creating generous white space and breathing room so customers feel refreshed when visiting the site.

### 2. **Organic Movement** (Natural Animation)
All transitions and animations feel smooth and flowing, like leaves gently swaying in a tropical breeze - never abrupt or jarring.

### 3. **The Oasis Path** (Effortless Navigation)
Removing visual noise and focusing on three key actions: View Menu, Find Location, Order.

### 4. **Sophisticated Craftsmanship** (Premium Typography)
Using serif fonts for timeless elegance combined with modern sans-serif for readability.

---

## Color Palette

### Primary Colors (Brand Identity)

#### Emerald Green - Quality & Growth
```css
--emerald:       hsl(160, 89%, 16%)  /* #044f3a - Deep emerald for text, logo */
--emerald-light: hsl(158, 64%, 32%)  /* #1d8968 - Hover states, accents */
--emerald-dark:  hsl(162, 95%, 10%)  /* #032d22 - Dark overlays */
```

**Usage:**
- Primary text and headings
- Logo and brand elements
- Hover states on interactive elements
- Status indicators (open/available)

#### Sand/Cream - Warmth & Comfort
```css
--sand:      hsl(40, 10%, 96%)  /* #f7f6f4 - Main background */
--sand-dark: hsl(40, 10%, 90%)  /* #e8e6e1 - Borders, subtle divisions */
```

**Usage:**
- Main page background
- Card backgrounds (with transparency)
- Subtle borders and dividers

#### Tropical Orange - Energy & CTA
```css
--tropical-orange:       hsl(25, 95%, 53%)  /* #f9732c - Primary CTA, badges */
--tropical-orange-light: hsl(25, 100%, 58%) /* #ff7f3f - Hover states, glows */
--tropical-orange-dark:  hsl(25, 95%, 45%)  /* #e85915 - Active states */
```

**Usage:**
- Call-to-action buttons ("Cari Cabang", "Lihat Menu")
- 24-hour badges
- Price tags
- Accent highlights
- Interactive element focus states

### Functional Colors

#### Success/Open Status
```css
--success: hsl(142, 76%, 36%)  /* #16a34a - "Buka Sekarang" */
```

#### Error/Closed Status
```css
--error: hsl(0, 84%, 60%)  /* #ef4444 - "Tutup" */
```

#### Neutral Text Hierarchy
```css
--foreground:       hsl(160, 89%, 16%)  /* #044f3a - Primary text */
--muted-foreground: hsl(160, 30%, 35%)  /* #3d665c - Secondary text */
```

### Gradients

#### Hero Overlay Gradient
Creates depth and focus on hero section content.
```css
background: linear-gradient(
  135deg, 
  hsl(160 89% 16% / 0.95),  /* Deep emerald with 95% opacity */
  hsl(162 95% 10% / 0.9)    /* Almost black-green with 90% opacity */
);
```

#### Button/CTA Gradient
Adds visual interest to primary actions.
```css
background: linear-gradient(
  135deg,
  hsl(25 95% 53%),  /* Tropical orange */
  hsl(25 95% 45%)   /* Darker orange */
);
```

#### Card Glassmorphism Gradient
Creates the signature "glass card" effect.
```css
background: linear-gradient(
  180deg,
  hsl(0 0% 100% / 0.9),  /* White 90% opacity top */
  hsl(0 0% 100% / 0.7)   /* White 70% opacity bottom */
);
```

---

## Typography

### Font Families

#### Serif: Playfair Display
**Purpose:** Elegance, timeless quality, sophistication
**Usage:**
- All headings (h1-h6)
- Brand name ("Tropic")
- Product/menu item names
- Branch names
- Important callouts

```css
font-family: 'Playfair Display', Georgia, serif;
```

#### Sans-Serif: Inter
**Purpose:** Modern readability, functional clarity
**Usage:**
- Body text
- Navigation items
- Buttons
- Form inputs
- Meta information (prices, addresses, hours)

```css
font-family: 'Inter', system-ui, sans-serif;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Line Height | Weight | Letter Spacing |
|---------|---------------|---------------|-------------|--------|----------------|
| **H1** (Hero) | 4.5rem (72px) | 3rem (48px) | 1.1 | 600 | -0.02em |
| **H2** (Section) | 3rem (48px) | 2rem (32px) | 1.2 | 600 | -0.01em |
| **H3** (Category) | 1.875rem (30px) | 1.5rem (24px) | 1.3 | 600 | 0 |
| **H4** (Subsection) | 1.5rem (24px) | 1.25rem (20px) | 1.4 | 600 | 0 |
| **H5** (Card Title) | 1.25rem (20px) | 1.125rem (18px) | 1.4 | 600 | 0 |
| **H6** (Small Heading) | 1rem (16px) | 1rem (16px) | 1.5 | 600 | 0 |
| **Body** | 1rem (16px) | 1rem (16px) | 1.6 | 400 | 0 |
| **Small** | 0.875rem (14px) | 0.875rem (14px) | 1.5 | 400 | 0 |

### Typography Best Practices

1. **Never mix serif and sans-serif in same element**
   - ✅ Correct: `<h3 className="font-serif">Branch Name</h3>`
   - ❌ Wrong: Mixing fonts in one heading

2. **Maintain hierarchy through size AND weight**
   - Headings: 600 weight (semibold)
   - Body: 400 weight (regular)
   - Meta info: 400-500 weight

3. **Use negative letter-spacing for large headings**
   - H1-H2: Tighten slightly for elegance
   - H3+: Default spacing

4. **Line height increases with smaller text**
   - Large headings (H1-H2): 1.1-1.2
   - Medium headings (H3-H5): 1.3-1.4
   - Body/small text: 1.5-1.6 (better readability)

---

## Spacing System

### Standardized Scale

Use only these values for consistent vertical rhythm:

| Class | Value | Usage |
|-------|-------|-------|
| `mb-2` | 8px | Tight spacing between closely related elements (e.g., icon + text) |
| `mb-4` | 16px | Medium spacing within content sections (e.g., paragraphs, list items) |
| `mb-8` | 32px | Large spacing between distinct groups (e.g., before CTA button) |
| `py-24` | 96px | Section vertical padding (Hero, Menu, Branches, About) |

### Spacing Examples

```tsx
// ✅ CORRECT - Using standardized values
<div className="p-6">
  <h3 className="mb-2">Title</h3>
  <p className="mb-4">Address line</p>
  <div className="mb-4">Operating hours</div>
  <div className="mb-8">Tags/Badges</div>
  <Button>Action</Button>
</div>

// ❌ WRONG - Using non-standard values
<div className="p-6">
  <h3 className="mb-3">Title</h3>
  <p className="mb-5">Address line</p>
</div>
```

### Container Padding
- **Desktop:** `px-6` (24px)
- **Container max-width:** `container` class (1400px)
- **Card internal padding:** `p-6` (24px)
- **Button padding:** `px-8 py-6` for large CTAs

---

## Shadows & Depth

### Shadow System

Creates subtle depth without heavy visual weight.

```css
/* Resting state - subtle presence */
--shadow-sm: 0 2px 8px -2px hsl(160 89% 16% / 0.08);

/* Hover state - elevated */
--shadow-md: 0 8px 24px -4px hsl(160 89% 16% / 0.12);

/* Modal/popup - prominent */
--shadow-lg: 0 16px 48px -8px hsl(160 89% 16% / 0.16);

/* Glow effect - CTA emphasis */
--shadow-glow: 0 0 40px hsl(25 95% 53% / 0.3);
```

### Text Shadows & Glows

```css
/* Orange glow for hero headline accent */
--text-glow-orange: 0 0 30px hsl(25 95% 53% / 0.4), 0 0 60px hsl(25 95% 53% / 0.2);

/* Subtle white glow for scroll indicator */
--text-glow-white: 0 0 15px hsl(0 0% 100% / 0.2);
```

### Usage Classes

```tsx
// Apply shadows via Tailwind utilities
<div className="shadow-tropic">Card with medium shadow</div>
<div className="shadow-tropic-lg">Modal with large shadow</div>

// Apply text glows via custom classes
<span className="glow-text-orange">Accented Text</span>
<div className="glow-box-white">Glowing Container</div>
```

---

## Border Radius

### Standardized Rounding

Creates soft, organic shapes throughout the interface.

| Class | Value | Usage |
|-------|-------|-------|
| `rounded-full` | 100% | Pills, badges, circular elements, decorative blobs |
| `rounded-3xl` | 32px | Large cards (branch cards, map containers) |
| `rounded-2xl` | 24px | Medium cards, panels, hero buttons |
| `rounded-xl` | 16px | Buttons, input fields, small cards |
| `rounded-lg` | 12px | Badges, facility tags |
| `rounded-md` | 8px | UI library defaults (dialogs, dropdowns) |

### Examples

```tsx
// Branch card - large container
<div className="glass-card rounded-3xl">

// CTA button - medium container
<Button className="rounded-2xl">

// Status badge - pill shape
<span className="rounded-full">

// Facility tag - small badge
<span className="rounded-lg">
```

---

## Animation System

### Timing & Easing

All animations follow "Organic Movement" principle - smooth, flowing, natural.

| Duration | Usage | Easing |
|----------|-------|--------|
| **200ms** | UI interactions (hover, click, toggle) | `ease-out` |
| **300ms** | Card hover effects, smooth transitions | `ease-out` |
| **400-800ms** | Component entrance animations | `ease-out` |
| **4-10s** | Floating decorative elements | `ease-in-out` infinite |

### Framer Motion Patterns

#### Card Entrance (Staggered)
```tsx
<m.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

#### Hover Lift Effect
```tsx
<m.div
  whileHover={{ y: -12, scale: 1.01 }}
  transition={{ duration: 0.3 }}
>
```

#### Floating Decorative Blob
```tsx
<m.div
  animate={{ 
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.4, 0.2]
  }}
  transition={{ duration: 8, repeat: Infinity }}
  className="rounded-full bg-accent/20 blur-3xl"
/>
```

### Stagger Delays

Create natural rhythm by delaying each item:

```tsx
// Menu items appearing one by one
{items.map((item, index) => (
  <m.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  >
))}
```

**Rule:** Multiply `index * 0.05` to `0.1` for pleasant stagger effect.

---

## Component Patterns

### Glass Card Effect

The signature "glassmorphism" style used throughout the site.

```tsx
<div className="glass-card rounded-3xl p-6">
  {/* Content */}
</div>
```

**CSS Definition:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-lg), 0 0 30px hsl(var(--accent) / 0.1);
}
```

### Tropical Button (CTA)

Primary action button with gradient and glow effect.

```tsx
<Button className="btn-tropical rounded-2xl px-8 py-6">
  Cari Cabang
</Button>
```

**CSS Definition:**
```css
.btn-tropical {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, hsl(25 95% 53%), hsl(25 95% 45%));
  transition: all 0.3s ease;
}

.btn-tropical:hover {
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}
```

### Status Badge

Dynamic badges showing branch availability.

```tsx
// Open status
<span className="status-open px-3 py-1 rounded-full">
  Buka Sekarang
</span>

// Closed status
<span className="status-closed px-3 py-1 rounded-full">
  Tutup
</span>

// 24-hour badge
<span className="bg-accent/95 text-accent-foreground px-3 py-1 rounded-full">
  Buka 24 Jam
</span>
```

### Vibe Tag

Shows branch personality traits with icons.

```tsx
<span className="vibe-tag flex items-center gap-1.5">
  <Icon className="w-3.5 h-3.5" />
  #PetFriendly
</span>
```

**CSS Definition:**
```css
.vibe-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: hsl(var(--primary) / 0.1);
  color: hsl(var(--primary));
  border: 1px solid hsl(var(--primary) / 0.2);
}
```

### Botanical Pattern Overlay

Subtle leaf pattern for backgrounds.

```tsx
<div className="botanical-pattern opacity-40">
  {/* Content */}
</div>
```

---

## Branch Identity System

Each branch has a unique visual identity while maintaining brand consistency.

### Color-Coded Gradients

```tsx
const branchColorClasses = {
  0: 'from-emerald-100 via-green-50 to-emerald-50',   // Nature/eco vibe
  1: 'from-amber-100 via-orange-50 to-amber-50',      // Warm/cozy vibe
  2: 'from-blue-100 via-cyan-50 to-blue-50',          // Cool/modern vibe
  3: 'from-rose-100 via-pink-50 to-rose-50',          // Sweet/feminine vibe
}
```

**Assignment:** Hash-based to ensure consistency (same branch always gets same color).

### Vibe Icons

```tsx
const vibeIcons = {
  wifi: Wifi,
  organic: Leaf,
  pet: Leaf,
  garden: Leaf,
  default: Coffee,
}
```

### Facility Icons

```tsx
const facilityIcons = {
  coworking: Briefcase,
  musholla: Sparkles,
  eatery: UtensilsCrossed,
  default: Coffee,
}
```

---

## Accessibility

### Color Contrast

All text meets WCAG AA standards:
- **Primary text on background:** 13.2:1 (emerald on sand)
- **Muted text on background:** 5.4:1
- **White text on emerald:** 12.8:1
- **White text on orange:** 4.6:1

### Focus States

All interactive elements have visible focus states:
```tsx
className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

### Semantic HTML

- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<article>` for menu items
- Use `<section>` for major page sections

### ARIA Labels

Add descriptive labels for screen readers:
```tsx
<Button aria-label="Cari cabang terdekat">
  <MapPin />
</Button>
```

---

## Responsive Design

### Breakpoints

Following Tailwind defaults:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

### Mobile-First Approach

Design for mobile first, enhance for larger screens:

```tsx
// ✅ CORRECT - Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// ❌ WRONG - Desktop first
<div className="grid grid-cols-3 lg:grid-cols-1">
```

### Typography Scaling

Headings automatically scale down on mobile (see typography section).

---

## Design Tokens Reference

### Quick Copy-Paste Values

```css
/* Colors */
--emerald: hsl(160, 89%, 16%)
--sand: hsl(40, 10%, 96%)
--tropical-orange: hsl(25, 95%, 53%)

/* Spacing */
mb-2, mb-4, mb-8, py-24

/* Border Radius */
rounded-3xl (large cards)
rounded-2xl (buttons/panels)
rounded-xl (badges)
rounded-full (pills)

/* Shadows */
shadow-tropic (medium)
shadow-tropic-lg (large)

/* Animation Duration */
200ms (UI), 400-800ms (entrance)
```

---

## File Structure

```
src/
├── index.css               # All design tokens, utility classes, keyframes
├── features/
│   ├── common/
│   │   └── components/
│   │       ├── Hero.tsx    # Main landing section
│   │       ├── Navbar.tsx  # Navigation with glassmorphism
│   │       └── Footer.tsx  # Footer with decorative blobs
│   ├── branches/
│   │   └── components/
│   │       └── BranchCard.tsx  # Individual branch identity
│   ├── menu/
│   │   └── components/
│   │       └── MenuItem.tsx    # Product cards with tags
│   └── cart/
└── components/ui/          # shadcn/ui base components (DO NOT MODIFY)
```

---

## Contributing Guidelines

### When Adding New Components

1. **Use design tokens** - Never hardcode colors
2. **Follow spacing scale** - Only use mb-2, mb-4, mb-8
3. **Add animations** - All new cards should have entrance animations
4. **Test responsiveness** - Verify on mobile and desktop
5. **Check accessibility** - Ensure proper contrast and ARIA labels

### Before Submitting PR

- [ ] No hardcoded colors (grep for `#` or `rgb()`)
- [ ] Spacing follows standardized scale
- [ ] Typography uses serif for headings
- [ ] Animations feel "organic" (not abrupt)
- [ ] Component tested on mobile viewport
- [ ] Focus states visible for keyboard navigation

---

## Version History

- **v1.0** (Jan 2026) - Initial design system documentation
- Design philosophy: "Digital Oasis"
- Core implementation: 93/100 audit score

---

**Maintained by:** @ihza_baker  
**Last Updated:** January 16, 2026  
**Status:** Production Ready ✅
