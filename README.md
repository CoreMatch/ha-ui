# @ha/ui

Shared design system for the HA desktop clients (MatchCoreArena-Client,
SamuelClient). **Dark only.** Art direction: competitive arena — near-black
cool base, one accent color, hard 1px borders, big mono numerals, no
shadows, no glass, no gradients, near-zero motion.

- Tokens: `src/styles/tokens.css` (CSS custom properties `--ha-*` + Tailwind
  v4 `@theme inline` mapping) and `src/tokens.ts` (JS mirror).
- Components: Radix-based primitives (`src/components/*`), consumed as
  TypeScript source.
- Icons: `lucide-react`, wrapped by `Icon` for consistent size/stroke.

## Token contract (stable names)

| Token | Value | Utility | Use |
|---|---|---|---|
| `--ha-base` | `#0a0c10` | `bg-base` | page background |
| `--ha-panel` | `#10141a` | `bg-panel` | cards/panels |
| `--ha-raised` | `#171d26` | `bg-raised` | insets, hover rows |
| `--ha-edge` | `#232b37` | `border-edge` | standard border |
| `--ha-edge-strong` | `#344152` | `border-edge-strong` | inputs, active borders |
| `--ha-ink` / `muted` / `faint` | `#e9edf3` / `#96a1b3` / `#5c6879` | `text-ink*` | text ladder |
| `--ha-accent` | `#e94560` | `accent` | the single accent (primary CTA) |
| `--ha-ok` / `warn` / `danger` / `info` | `#4caf50` / `#f59e0b` / `#ef5350` / `#3b82f6` | semantic | one hue per state intent |
| `--ha-gold` / `silver` / `bronze` | `#ffd700` / `#c0c0c0` / `#cd7f32` | metals | rank data-viz only |

Spacing ladder: **4/8/12/16/24 px** (Tailwind `1/2/3/4/6`). Radius: **8/12**
(`rounded-md`/`rounded-lg`). Type ladder: **12/14/16/20/28** (`text-xs` →
`text-display`) plus `text-hero` (40px) for hero numerals. Z tiers:
dropdown 40 / overlay 50 / modal 60 (`tokens.zIndex`). Motion: one curve
`cubic-bezier(0.4,0,0.2,1)` @ 150ms (`ease-standard`, `duration-150`) —
only for required state transitions (queue phase changes, loading fades).

Renaming any `--ha-*` token is a breaking change: both clients consume the
same names.

## Consumer wiring (Vite + Tailwind v4)

1. Depend on the package by path:

   ```json
   "dependencies": { "@ha/ui": "file:/home/lnb/Desktop/HA/ha-ui" }
   ```

2. `vite.config.ts`: add `@tailwindcss/vite` to `plugins`.

3. CSS entry:

   ```css
   @import "tailwindcss";
   @import "@ha/ui/tokens.css";
   @source "../node_modules/@ha/ui/src";
   ```

4. Fonts are bundled locally (no CDN): `@fontsource/inter` (body) and
   `@fontsource/jetbrains-mono` (numerals/logs), imported from the app's
   `main.tsx`.

5. TypeScript: `moduleResolution: "bundler"`; the package exports its TS
   source directly (`"." → ./src/index.ts`).

## Rules

- No new hues without updating this README and both clients.
- No shadows/glassmorphism/gradients; borders do the separation.
- Motion stays near-zero: required state transitions only.
