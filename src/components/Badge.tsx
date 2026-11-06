import type { HTMLAttributes } from 'react';

export type BadgeTone = 'neutral' | 'accent' | 'ok' | 'warn' | 'danger' | 'info' | 'gold';

const tones: Record<BadgeTone, string> = {
  neutral: 'border-edge-strong bg-raised text-ink-muted',
  accent: 'border-accent/40 bg-accent/10 text-accent',
  ok: 'border-ok/40 bg-ok/10 text-ok',
  warn: 'border-warn/40 bg-warn/10 text-warn',
  danger: 'border-danger/40 bg-danger/10 text-danger',
  info: 'border-info/40 bg-info/10 text-info',
  gold: 'border-gold/40 bg-gold/10 text-gold',
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  strong?: boolean;
}

export function Badge({ tone = 'neutral', strong = false, className = '', ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm
        ${strong ? 'font-bold uppercase tracking-wide' : 'font-medium'} ${tones[tone]} ${className}`}
      {...rest}
    />
  );
}
