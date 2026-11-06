import * as ProgressPrimitive from '@radix-ui/react-progress';

export interface ProgressProps {
  // 0..100
  value: number;
  tone?: 'accent' | 'gold' | 'ok';
  className?: string;
}

// Progress: hard-edged bar for tier progress and similar.
export function Progress({ value, tone = 'accent', className = '' }: ProgressProps) {
  const indicator = { accent: 'bg-accent', gold: 'bg-gold', ok: 'bg-ok' }[tone];
  return (
    <ProgressPrimitive.Root
      value={value}
      className={`h-2 w-full overflow-hidden rounded-md bg-raised ${className}`}
    >
      <ProgressPrimitive.Indicator
        className={`h-full rounded-md transition-[width] duration-150 ease-standard ${indicator}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </ProgressPrimitive.Root>
  );
}
