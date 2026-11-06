import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { tokens } from '../tokens';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
}

// Dialog: Radix dialog with hard-bordered panel. Fade only (required state
// transition), no scale/slide choreography.
export function Dialog({ open, onClose, title, children, footer, wide = false }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 bg-black/70"
          style={{ zIndex: tokens.zIndex.overlay }}
        />
        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 max-h-[85vh] w-full -translate-x-1/2 -translate-y-1/2
            overflow-y-auto rounded-lg border border-edge bg-panel ${wide ? 'max-w-3xl' : 'max-w-xl'}`}
          style={{ zIndex: tokens.zIndex.modal }}
        >
          <div className="flex items-center justify-between border-b border-edge px-6 py-4">
            <DialogPrimitive.Title className="text-lg font-bold text-ink">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Close className="rounded-md p-1.5 text-ink-faint transition-colors duration-150 hover:bg-raised hover:text-ink">
              <X size={18} strokeWidth={1.75} aria-hidden />
            </DialogPrimitive.Close>
          </div>
          <div className="px-6 py-5">{children}</div>
          {footer && <div className="flex justify-end gap-2 border-t border-edge px-6 py-4">{footer}</div>}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
