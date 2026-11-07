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

Spacing ladder: **8/12/16/24/32/48 px** (Tailwind `2/3/4/6/8/12`) — roomy
by design; prefer scrolling over squeezing. Page margins 40–48, section
gaps 32+, inner element gaps 12–24. Radius: **8/12**
(`rounded-md`/`rounded-lg`).

Type ladder: **14** secondary (`text-sm`), **16** body (`text-base`),
**20–24** section titles (`text-xl`/`text-2xl`), **32** page titles
(`text-display`), **52** hero numerals (`text-hero`). 12px is reserved
for rare micro labels; 11px and below must not appear.

Controls are heavy: buttons 36/48/56 px, inputs/selects 48 px, table
rows ~60 px. Z tiers: dropdown 40 / overlay 50 / modal 60
(`tokens.zIndex`). Motion: one curve `cubic-bezier(0.4,0,0.2,1)` @
150ms (`ease-standard`, `duration-150`) — only for required state
transitions (queue phase changes, loading fades).

Borders are restrained: panels keep one hard border; inner elements
(chips, address boxes, stat rows) rely on background contrast, not
frames; tables use faint row dividers only.

Renaming any `--ha-*` token is a breaking change: both clients consume the
same names.

## Consumer wiring (Vite + Tailwind v4)

Consumers embed this repository as a git submodule at the repository root
(`ha-ui/`) and depend on it through a repo-relative `file:` link — no
registry, no assumptions about where checkouts live on disk:

```sh
git submodule add https://github.com/CoreMatch/ha-ui.git ha-ui
```

1. Depend on the package by path (relative to the consumer's
   `frontend/package.json`):

   ```json
   "dependencies": { "@ha/ui": "file:../ha-ui" }
   ```

   Fresh clones need `git clone --recurse-submodules` (or
   `git submodule update --init`). Editing files inside the `ha-ui/`
   submodule is picked up by the consumer immediately (the `file:` link
   is a symlink); push ha-ui changes from inside the submodule, then
   commit the updated submodule pointer in the consumer.

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
