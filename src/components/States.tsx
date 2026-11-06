import type { ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';
import { Button } from './Button';

// EmptyState: "nothing here yet" + the next action.
export function EmptyState({
  icon,
  title,
  hint,
  action,
}: {
  icon?: ReactNode;
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div className="px-6 py-10 text-center">
      {icon && <div className="mb-3 flex justify-center text-ink-faint">{icon}</div>}
      <div className="text-base font-semibold text-ink-muted">{title}</div>
      {hint && <div className="mx-auto mt-1 max-w-md text-sm text-ink-faint">{hint}</div>}
      {action && <div className="mt-4 flex justify-center">{action}</div>}
    </div>
  );
}

// ErrorState: one reason sentence + a retry affordance.
export function ErrorState({
  message,
  detail,
  onRetry,
  retryLabel = 'Retry',
}: {
  message: string;
  detail?: string | null;
  onRetry?: () => void;
  retryLabel?: string;
}) {
  return (
    <div className="px-6 py-10 text-center">
      <div className="mb-3 flex justify-center text-danger">
        <TriangleAlert size={34} strokeWidth={1.5} aria-hidden />
      </div>
      <div className="mx-auto max-w-lg text-sm leading-relaxed text-ink-muted">{message}</div>
      {detail && <div className="mt-2 break-all text-xs text-ink-faint">{detail}</div>}
      {onRetry && (
        <div className="mt-4 flex justify-center">
          <Button variant="outline" size="sm" onClick={onRetry}>
            {retryLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
