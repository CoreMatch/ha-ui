import type { ReactNode } from 'react';
import { TriangleAlert } from 'lucide-react';
import { Button } from './Button';

// EmptyState: illustration (or icon) + one short line + the next action.
export function EmptyState({
  icon,
  illustration,
  title,
  hint,
  action,
}: {
  icon?: ReactNode;
  illustration?: ReactNode;
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div className="px-8 py-16 text-center">
      {illustration ? (
        <div className="mb-5 flex justify-center">{illustration}</div>
      ) : (
        icon && <div className="mb-4 flex justify-center text-ink-faint">{icon}</div>
      )}
      <div className="text-lg font-semibold text-ink-muted">{title}</div>
      {hint && <div className="mx-auto mt-2 max-w-md text-base leading-relaxed text-ink-faint">{hint}</div>}
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  );
}

// ErrorState: illustration (or icon) + one reason sentence + retry.
export function ErrorState({
  message,
  detail,
  onRetry,
  retryLabel = 'Retry',
  illustration,
}: {
  message: string;
  detail?: string | null;
  onRetry?: () => void;
  retryLabel?: string;
  illustration?: ReactNode;
}) {
  return (
    <div className="px-8 py-16 text-center">
      {illustration ? (
        <div className="mb-5 flex justify-center">{illustration}</div>
      ) : (
        <div className="mb-4 flex justify-center text-danger">
          <TriangleAlert size={40} strokeWidth={1.5} aria-hidden />
        </div>
      )}
      <div className="mx-auto max-w-lg text-base leading-relaxed text-ink-muted">{message}</div>
      {detail && <div className="mt-2 break-all text-sm text-ink-faint">{detail}</div>}
      {onRetry && (
        <div className="mt-6 flex justify-center">
          <Button variant="outline" onClick={onRetry}>
            {retryLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
