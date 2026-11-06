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
  // Allowed spacing values in px (Tailwind: 1/2/3/4/6).
  spacing: [4, 8, 12, 16, 24] as const,
  radius: { md: 8, lg: 12 },
  // Type ladder in px: 12/14/16/20/28 + display steps for hero numerals.
  fontSize: { xs: 12, sm: 14, md: 16, lg: 20, display: 28, hero: 40 },
  zIndex: { dropdown: 40, overlay: 50, modal: 60 },
  motion: { duration: '150ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
} as const;

export type Tokens = typeof tokens;
