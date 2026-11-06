// @ha/ui — shared design system for the HA desktop clients.
// Dark-only, hard-edged competitive styling: Tailwind v4 tokens + Radix
// primitives + Lucide icons. See README.md for the token contract.

export { tokens } from './tokens';
export type { Tokens } from './tokens';

export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';
export { Panel, Inset } from './components/Panel';
export { Badge } from './components/Badge';
export type { BadgeProps, BadgeTone } from './components/Badge';
export { Input, Field, inputClass } from './components/Field';
export { Select } from './components/Select';
export type { SelectProps, SelectOption } from './components/Select';
export { Dialog } from './components/Dialog';
export type { DialogProps } from './components/Dialog';
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/Collapsible';
export { Progress } from './components/Progress';
export type { ProgressProps } from './components/Progress';
export { Menu, MenuItem, MenuSeparator } from './components/Menu';
export { Banner } from './components/Banner';
export type { BannerTone } from './components/Banner';
export { Skeleton, Spinner } from './components/Skeleton';
export { Stat } from './components/Stat';
export { Stepper } from './components/Stepper';
export type { StepperProps } from './components/Stepper';
export { EmptyState, ErrorState } from './components/States';
export { Table, Th, Td } from './components/Table';
export { Icon } from './components/Icon';

// Bundled ha-assets library (manifest ids are the stable keys).
export { Asset, patternStyle } from './assets/Asset';
export type { AssetId } from './assets/Asset';
