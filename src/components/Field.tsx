import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

export const inputClass = `h-12 w-full rounded-md border border-edge-strong bg-base px-4 text-base text-ink
  placeholder:text-ink-faint outline-none transition-colors duration-150 ease-standard
  focus:border-accent disabled:opacity-40`;

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className = '', ...rest }, ref) {
    return <input ref={ref} className={`${inputClass} ${className}`} {...rest} />;
  },
);

// Field: overline label + control, the standard form row.
export function Field({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
