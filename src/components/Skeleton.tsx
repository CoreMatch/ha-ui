// Skeleton: loading placeholder block (fade-in via built-in pulse only).
export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-raised ${className}`} aria-hidden />;
}

// Spinner: minimal ring for in-button/inline loading.
export function Spinner({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      style={{ width: size, height: size }}
      className={`inline-block animate-spin rounded-full border-2 border-edge-strong border-t-accent ${className}`}
    />
  );
}
