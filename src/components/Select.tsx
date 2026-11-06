import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { tokens } from '../tokens';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

// Select: Radix select styled to match Input (hard border, dark surface).
export function Select({ value, onValueChange, options, placeholder, disabled, ariaLabel, className = '' }: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectPrimitive.Trigger
        aria-label={ariaLabel}
        className={`inline-flex h-10 items-center justify-between gap-2 rounded-md border border-edge-strong
          bg-base px-3 text-sm text-ink outline-none transition-colors duration-150 ease-standard
          hover:bg-raised focus:border-accent disabled:opacity-40 data-[placeholder]:text-ink-faint ${className}`}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown size={16} strokeWidth={1.75} className="text-ink-faint" aria-hidden />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={4}
          style={{ zIndex: tokens.zIndex.dropdown }}
          className="min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-edge bg-panel"
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((o) => (
              <SelectPrimitive.Item
                key={o.value}
                value={o.value}
                className="flex cursor-pointer items-center justify-between gap-2 rounded px-3 py-2 text-sm
                  text-ink outline-none data-[highlighted]:bg-raised data-[state=checked]:text-accent"
              >
                <SelectPrimitive.ItemText>{o.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <Check size={14} strokeWidth={2} aria-hidden />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
