import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps, ReactNode } from 'react';
import { tokens } from '../tokens';

// Menu: restyled Radix dropdown (user menu and similar).
export function Menu({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={6}
          align="end"
          style={{ zIndex: tokens.zIndex.dropdown }}
          className="min-w-48 overflow-hidden rounded-md border border-edge bg-panel p-1"
        >
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export function MenuItem({
  onSelect,
  children,
}: ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 text-sm text-ink
        outline-none data-[highlighted]:bg-raised"
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

export function MenuSeparator() {
  return <DropdownMenuPrimitive.Separator className="my-1 h-px bg-edge" />;
}
