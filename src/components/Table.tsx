import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';

// Spacious, hard-bordered table primitives. Rows breathe; no dense stacking.

export function Table({ className = '', ...rest }: HTMLAttributes<HTMLTableElement>) {
  return <table className={`w-full border-collapse text-sm ${className}`} {...rest} />;
}

export function Th({ className = '', ...rest }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`border-b border-edge px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-ink-faint ${className}`}
      {...rest}
    />
  );
}

export function Td({ className = '', ...rest }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={`border-b border-edge/70 px-4 py-3.5 align-middle ${className}`} {...rest} />;
}
