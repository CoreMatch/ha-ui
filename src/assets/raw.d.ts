// Raw SVG imports (Vite `?raw`) for the bundled ha-assets library.
declare module '*.svg?raw' {
  const markup: string;
  export default markup;
}
