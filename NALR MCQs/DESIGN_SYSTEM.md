# 🎨 DESIGN_SYSTEM.md — NALR Design System & Component Guidelines

The **NALR Masterclass** design system blends Apple's minimalist frosted glass aesthetic with a warm, editorial sand palette tailored for prolonged academic study and clear mathematical comprehension.

---

## 1. Color Palette & Token Architecture

All global color values are declared as CSS Custom Properties in `main.css`:

### 1.1 Core Brand & Background Tokens
| Token Name | Light Theme | Dark Theme (`[data-theme="dark"]`) | Description |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#fdfbf7` (Alabaster Warm White) | `#0a0e17` (Deep Obsidian Midnight) | Application background |
| `--card-bg` | `#ffffff` (Pure White) | `#141b2d` (Navy Midnight) | Elevated card surface |
| `--card-sub-bg` | `#f4efe6` (Warm Sand Subsurface) | `#1a2138` (Muted Slate Navy) | Secondary grouping background |
| `--active-sand` | `#e6dcbc` (Warm Sand Accent) | `rgba(230, 220, 188, 0.18)` | Selected subtab highlight |
| `--border-color` | `#dcd4c3` (Desert Sand Border) | `rgba(255, 255, 255, 0.12)` | Component borders |
| `--border-subtle`| `rgba(220, 212, 195, 0.45)` | `rgba(255, 255, 255, 0.06)` | Inner dividers & guides |

### 1.2 Typography Ink Tokens
| Token Name | Light Theme | Dark Theme | Purpose |
| :--- | :--- | :--- | :--- |
| `--ink-primary` | `#181e30` (Deep Ink) | `#f1f5f9` (Bright Slate White) | Headings, main question text |
| `--ink-secondary`| `#5e667e` (Cool Slate) | `#94a3b8` (Muted Blue Slate) | Explanations, sub-labels |
| `--ink-muted` | `#8790a8` (Muted Charcoal) | `#64748b` (Subtle Grey Slate) | Metadata, timestamps, counts |

### 1.3 Semantic & Functional Accents
- **Primary Accent (`--primary-blue`)**: `#2563eb` (Royal Blue) | Background: `#eff6ff`
- **Success / Correct (`--success-green`)**: `#059669` (Emerald) | Background: `#ecfdf5`
- **Danger / Incorrect (`--danger-red`)**: `#dc2626` (Crimson) | Background: `#fef2f2`
- **Warning / Review (`--warning-amber`)**: `#d97706` (Amber) | Background: `#fffbeb`
- **PowerPoint Brand**: `#d24726` (Terracotta PPT Red) | Hover: `#ea580c`

---

## 2. Typography Hierarchy

The platform uses a triad of modern Google Fonts:
1. **Primary Interface & Prose**: `'Manrope'`, sans-serif (Weights: `500`, `600`, `700`, `800`, `900`).
2. **Display Headings & Badges**: `'Space Grotesk'`, sans-serif (Weights: `600`, `700`, `800`).
3. **Monospace, Formulas & Codes**: `'JetBrains Mono'`, monospace (Weights: `500`, `700`).

### Scale & Weight Rules:
- **H1 Header**: `22px / 900` weight, `-0.03em` letter-spacing.
- **Topic Title**: `19px / 900` weight, `-0.02em` letter-spacing.
- **Question Body**: `15.5px / 650` weight, `1.55` line-height.
- **Code & Numbers**: `13px / 750` weight, `'JetBrains Mono'`.
- **Badges & Tags**: `10px - 11px / 850` weight, uppercase tracking `+0.05em`.

---

## 3. Apple Minimalist Glass Effect (`.glass-apple`)

Used across the header, navigation bars, subtabs, and floating control bars:
```css
.apple-glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

[data-theme="dark"] .apple-glass {
  background: rgba(20, 27, 45, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}
```

---

## 4. Component Primitives

### 4.1 Topic Header Box (`.current-topic-banner`)
- Flexbox container (`display: flex; justify-content: space-between; align-items: center; gap: 16px;`).
- Houses the module prefix and topic heading on the left.
- Houses the `#btnModulePPT` presentation trigger button on the right.

### 4.2 Presentation Viewer Button (`.btn-ppt-banner`)
- Rounded pill geometry (`border-radius: 999px; height: 38px; padding: 0 16px;`).
- Displays the official vector PowerPoint logo SVG (`#d24726` with white `P`) and `"PPT"`.
- Micro-interactions: `transform: translateY(-1.5px); box-shadow: 0 4px 12px rgba(210, 71, 38, 0.16);`.

### 4.3 Question Option Cards (`.option-item`)
- Rounded border box (`border-radius: 10px; border: 1.5px solid var(--border-color);`).
- Contains letter circle avatar (`A`, `B`, `C`, `D`).
- States:
  - **Hover**: Subtle border illumination and background wash.
  - **Selected Correct**: `#059669` green border with emerald glow and checkmark.
  - **Selected Wrong**: `#dc2626` red border with soft crimson wash and cross indicator.

### 4.4 Visualizer Container Pattern (`.sol-vis-container`)
- Every visualizer inherits rounded borders (`border-radius: 12px;`), soft inner gradient, standardized header icon badge, and a bottom target resolution banner (`.highlight-gold`).

### 4.5 Study Planner Modal & Timeline Cards (`.planner-dialog`, `.planner-day-card`)
- **Dialog Shell (`.planner-dialog`)**: Fixed 85vh viewport modal (`height: 85vh; max-height: 85vh; display: flex; flex-direction: column; overflow: hidden;`) with frosted glass blur, rounded corners (`24px`), fixed header, internal scrollable body (`flex: 1; overflow-y: auto;`), and sticky solid footer (`.planner-footer`).
- **Metrics Dashboard Banner (`.planner-dashboard-banner`)**: 4-column glass container showcasing Days Target, Total Tasks, Completed, and Progress % with bold `'Space Grotesk'` typography.
- **Timeline Day Cards (`.planner-day-card`)**: Daily cards with date badges (`.planner-day-badge`), task checklist items with checkmark feedback, and direct `"Practice →"` jump buttons.
- **Revision Milestone Card (`.planner-day-card.is-revision`)**: Distinct dashed amber border, subtle golden wash, and prominent `"Launch Full Mock Exam"` action.

---

## 5. Dynamic Cursor Spotlight & Glow Border Follow

Inspired by macOS, Raycast, and Linear interfaces:
- **Specular Radial Mask**:
  ```css
  .exam-question-card::before,
  .study-card-main::before,
  .tab-question-item::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.5px;
    background: radial-gradient(
      420px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),
      rgba(37, 99, 235, 0.45),
      rgba(230, 220, 188, 0.35) 40%,
      transparent 80%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
  ```
- **Dark Mode Adaptation**: In `[data-theme="dark"]`, the radial gradient transitions to an electric cyan-indigo sheen (`rgba(96, 165, 250, 0.55)` and `rgba(167, 139, 250, 0.35)`).

---

## 6. Theme Transition Aesthetics (Circular Ripple)

- **View Transitions API**: Seamless cross-fade utilizing browser `::view-transition-old(root)` and `::view-transition-new(root)`.
- **Expanding Circular Clip-Path**:
  - Starts with radius `0px` centered exactly at the click coordinates $(X, Y)$ of the `#themeToggleBtn`.
  - Expands outward across the viewport to hypotenuse radius $\sqrt{W^2 + H^2}$ over `480ms` with smooth Apple-style easing `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Zero flashing or content reflow during transition.

---

## 7. Fluid Navigation & Micro-Interactions

### 7.1 Liquid Sliding Pill (`.term-sliding-pill`)
- **Geometry**: Absolute-positioned indicator (`height: calc(100% - 8px); top: 4px; border-radius: 999px;`).
- **Active Fill**: Light mode uses warm sand `#e6dcbc` with inset frosted glass highlight; Dark mode uses `rgba(255, 255, 255, 0.12)`.
- **Fluid Motion**: `transform` and `width` interpolated via `cubic-bezier(0.2, 0.9, 0.3, 1) 0.32s`.

### 7.2 Staggered Cascade Question Transitions
- Applied dynamically to `.exam-question-card.animating-cascade`:
  - Header Banner: `@keyframes slideDown` (`translateY(-8px) -> translateY(0)`, duration `320ms`, delay `0ms`).
  - Question Body: `@keyframes fadeIn` (`opacity: 0 -> 1`, duration `300ms`, delay `40ms`).
  - Option Choices: `@keyframes floatUp` (`translateY(8px) -> translateY(0)`, duration `320ms`, staggered delays: `70ms`, `100ms`, `130ms`, `160ms`).

### 7.3 Zero-Jank CSS Grid Accordion
- Drawers use CSS Grid interpolation:
  - Collapsed: `grid-template-rows: 0fr;`
  - Expanded: `grid-template-rows: 1fr;`
  - Child Container: `min-height: 0; overflow: hidden;`

---

## 8. GPU Hardware Acceleration & Compositor Rules

- **Decoupled Background**: `body::before` renders the global gradient on an isolated GPU layer (`transform: translateZ(0); will-change: transform;`).
- **Paint Isolation**: All repeating cards use `contain: layout style paint;` to prevent localized style changes from invalidating the wider page tree.
- **Rendering Virtualization**: Heavy question lists and planner timelines apply `content-visibility: auto; contain-intrinsic-size: 100px 320px;`.


