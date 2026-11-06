import type { ReactNode } from 'react';

export type BannerTone = 'info' | 'ok' | 'warn' | 'danger';

const tones: Record<BannerTone, string> = {
  info: 'border-info/40 bg-info/10 text-info',
  ok: 'border-ok/40 bg-ok/10 text-ok',
  warn: 'border-warn/40 bg-warn/10 text-warn',
  danger: 'border-danger/40 bg-danger/10 text-danger',
};

// Banner: semantic notice line (read-only notices, handoff states, ...).
export function Banner({
  tone = 'info',
  children,
  action,
  className = '',
}: {
  tone?: BannerTone;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start justify-between gap-4 rounded-md border px-5 py-4 text-base leading-relaxed ${tones[tone]} ${className}`}
    >
      <div>{children}</div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
