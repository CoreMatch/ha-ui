import type { LucideIcon } from 'lucide-react';

// Icon: standard wrapper so every glyph shares size/stroke defaults.
export function Icon({
  as: Glyph,
  size = 18,
  className = '',
}: {
  as: LucideIcon;
  size?: number;
  className?: string;
}) {
  return <Glyph size={size} strokeWidth={1.75} className={className} aria-hidden />;
}
