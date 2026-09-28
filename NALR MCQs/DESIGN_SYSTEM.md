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
