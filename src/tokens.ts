// @ha/ui design tokens (JS mirror of styles/tokens.css).
//
// Use these only where a raw value is unavoidable (inline SVG parts, canvas,
// dynamic styles). In markup, prefer the Tailwind utilities generated from
// the CSS tokens (bg-panel, text-ink-muted, border-edge, ...).

export const tokens = {
  color: {
    base: '#0a0c10',
    panel: '#10141a',
    raised: '#171d26',
    edge: '#232b37',
    edgeStrong: '#344152',
    ink: '#e9edf3',
    inkMuted: '#96a1b3',
    inkFaint: '#5c6879',
    accent: '#e94560',
    accentHover: '#d63a54',
    onAccent: '#ffffff',
    ok: '#4caf50',
    warn: '#f59e0b',
    danger: '#ef5350',
    info: '#3b82f6',
    gold: '#ffd700',
    silver: '#c0c0c0',
    bronze: '#cd7f32',
  },
  // Allowed spacing values in px — roomy by design (Tailwind units in
  // parens). Prefer scrolling over squeezing: when in doubt, go up a step.
  spacing: [8, 12, 16, 24, 32, 48] as const,
  radius: { md: 8, lg: 12 },
  // Type ladder in px: 14 secondary, 16 body, 20–24 section titles,
  // 32 page titles, 52 hero numerals. 12 stays reserved for rare micro
  // labels; 11px and below must not appear.
  fontSize: { sm: 14, md: 16, section: 20, display: 32, hero: 52 },
  zIndex: { dropdown: 40, overlay: 50, modal: 60 },
  motion: { duration: '150ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
} as const;

export type Tokens = typeof tokens;
