import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

// Spacious, hard-bordered table primitives. Rows breathe; no dense stacking.

export function Table({ className = '', ...rest }: HTMLAttributes<HTMLTableElement>) {
  return <table className={`w-full border-collapse text-sm ${className}`} {...rest} />;
}

export function Th({ className = '', ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`border-b border-edge px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-ink-faint ${className}`}
      {...rest}
    />
  );
}

export function Td({ className = '', ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={`border-b border-edge/50 px-5 py-5 align-middle text-base ${className}`} {...rest} />;
}
