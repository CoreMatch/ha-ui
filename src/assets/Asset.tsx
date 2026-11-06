import type { CSSProperties, ReactNode } from 'react';
import { rawAssets, type AssetId } from './svg';

export type { AssetId };

// Asset renders a library SVG inline (manifest id is the stable key), so
// `currentColor` and the `--ha-*` variables resolve from the app theme.
// Icons/flow/modes pick their 16/24/32 variant by requested size.
export function Asset({
  id,
  size = 24,
  className = '',
  title,
}: {
  id: AssetId;
  size?: number;
  className?: string;
  title?: string;
}): ReactNode {
  const variants = rawAssets[id];
  const available = Object.keys(variants).map(Number).sort((a, b) => a - b);
  const pick = available.find((s) => size <= s) ?? available[available.length - 1];
  const markup = variants[pick as keyof typeof variants];
  return (
    <span
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      title={title}
      style={{ width: size, height: size }}
      className={`inline-flex shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

// patternStyle turns a tiling pattern asset into a background-image style
// (data URI; the assets carry fallback colors for exactly this context).
// Keep it restrained: one block per screen at most.
export function patternStyle(id: AssetId): CSSProperties {
  const markup = rawAssets[id][24];
  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(markup)}")`,
    backgroundRepeat: 'repeat',
  };
}
