import type { ReactNode } from 'react';

// Stat: a big, prominent numeral with an overline label — the arena look.
export function Stat({
  label,
  value,
  tone = 'default',
  size = 'hero',
}: {
  label: string;
  value: ReactNode;
  tone?: 'default' | 'accent' | 'ok' | 'warn' | 'danger' | 'gold';
  size?: 'display' | 'hero';
}) {
  const toneClass = {
    default: 'text-ink',
    accent: 'text-accent',
    ok: 'text-ok',
    warn: 'text-warn',
    danger: 'text-danger',
    gold: 'text-gold',
  }[tone];
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-faint">{label}</div>
      <div
        className={`font-mono font-bold tabular-nums ${toneClass} ${
          size === 'hero' ? 'text-hero' : 'text-display'
        }`}
      >
        {value}
      </div>
    </div>
  );
}
