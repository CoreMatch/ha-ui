import type { HTMLAttributes } from 'react';

// Panel: the base surface container. Hard 1px border, no shadow.
export function Panel({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-panel border border-edge rounded-lg ${className}`} {...rest} />;
}

// Raised inset inside a panel (address boxes, handoff blocks, ...).
// Background contrast only — no frame (borders stay restrained).
export function Inset({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-raised rounded-md ${className}`} {...rest} />;
}
