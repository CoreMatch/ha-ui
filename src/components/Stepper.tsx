import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

export interface StepperProps {
  steps: string[];
  // Index of the active step; steps before it render as completed.
  active: number;
  // Optional per-step graphics (e.g. the flow assets); they replace the
  // plain numbers on upcoming/active nodes. Completed nodes keep the check.
  icons?: ReactNode[];
}

// Stepper: hard-edged phase indicator for the matchmaking cycle.
// Completed = filled check, active = accent outline, ahead = dim.
export function Stepper({ steps, active, icons }: StepperProps) {
  return (
    <ol className="flex w-full items-center gap-3">
      {steps.map((label, i) => {
        const done = i < active;
        const current = i === active;
        return (
          <li key={label} className="flex flex-1 items-center gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border font-mono text-sm font-bold
                ${done ? 'border-accent bg-accent text-on-accent' : ''}
                ${current ? 'border-accent text-accent' : ''}
                ${!done && !current ? 'border-edge text-ink-faint' : ''}`}
            >
              {done ? <Check size={16} strokeWidth={2.5} aria-hidden /> : icons?.[i] ?? i + 1}
            </span>
            <span
              className={`hidden text-sm font-semibold uppercase tracking-wide sm:block
                ${current ? 'text-ink' : done ? 'text-ink-muted' : 'text-ink-faint'}`}
            >
              {label}
            </span>
            {i < steps.length - 1 && (
              <span className={`h-px flex-1 ${done ? 'bg-accent/60' : 'bg-edge'}`} aria-hidden />
            )}
          </li>
        );
      })}
    </ol>
  );
}
