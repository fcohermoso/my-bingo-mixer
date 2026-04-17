---
name: design-guide
description: "Use when redesigning UI, creating new components, or updating visual styles in the bingo app. Enforces Scandinavian Calm aesthetic, dark refined palette, typography, spacing, and motion rules."
applyTo:
  - "src/**/*.tsx"
  - "src/**/*.css"
---

# Design Guide: Scandinavian Calm

## Visual Direction
- Build a playful-but-calm experience: premium, warm, and never loud.
- Prefer restrained composition over decorative clutter.
- Keep the 5x5 bingo board readability first; visual polish must not reduce scan speed.
- Treat this guide as a default hard rule for app UI work unless the user explicitly requests a different style.

## Color System
- Default to dark refined theme.
- Use token-based palette from `@theme` in `src/index.css`.
- Core intent:
  - Base surfaces: charcoal tones
  - Interactive accents: midnight blue
  - Highlights and celebration: soft gold
  - Marked state: calm green with clear border contrast
- Do not introduce ad-hoc hex values in component classes when a theme token exists.

## Typography
- Use Poppins as primary display/body family for UI surfaces.
- Maintain strong hierarchy:
  - Screen titles: bold, high contrast
  - Section labels: semibold
  - Body and square text: medium/regular, optimized for dense grids
- Avoid generic system-font look unless a fallback is required.

## Scope and Exceptions
- Applies only to source UI code under `src/**/*.tsx` and `src/**/*.css`.
- Does not apply to documentation pages or workshop markdown unless explicitly requested.
- If a task requires a different visual direction, override intentionally and state why in the PR summary.

## Spacing and Shape
- Favor generous outer spacing and compact inner spacing for board cells.
- Keep corner radii consistent across cards, buttons, and squares.
- Use subtle depth (soft shadows/borders) to separate layers on dark backgrounds.

## Motion and Interaction
- Motion must be subtle and meaningful.
- Prefer short transitions (~200-300ms), smooth easing, and small transforms.
- Use staggered entrance only for high-impact moments (screen load, modal reveal).
- Avoid bouncy, exaggerated, or constant attention-seeking animation.

## Component Rules
- Start and game screens should share a cohesive atmosphere (same palette family and typographic tone).
- Bingo squares must keep high legibility at small sizes and preserve touch ergonomics.
- Winning and marked states must be distinct by both color and border intensity.
- Modal celebrations should feel refined, not flashy.

## Accessibility
- Preserve WCAG AA contrast for text, icons, and status states.
- Keep interaction states visible for hover, focus, and active.
- Do not rely on color alone for critical game state signaling.

## Tailwind v4 Discipline
- Keep design tokens in `@theme`; use token classes (e.g. `bg-*`, `text-*`, `border-*`) consistently.
- Prefer existing tokens before creating new ones.
- If new tokens are necessary, add them centrally in `src/index.css` and reuse them.
