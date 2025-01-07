import { createStitches, globalCss } from "@stitches/react";

export const {
  css,
  styled,
  keyframes,
  getCssText,
  createTheme,

  theme,
  config,
} = createStitches({
  theme: {
    fonts: {
      system: "Inter, apple-system, sans-serif",
    },
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
    fontSizes: {},
    fontWeights: {},

    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});

export const globalStyles = globalCss({
  "*，*::before， *::after": { boxSizing: "border-box" },
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: 0,
  },
  "ul[role='list'], ol[role='list']": { listStyle: "none" },
  ul: { margin: "Opx", padding: "Opx" },
  "html: focus-within": { scrollBehavior: "smooth" },
  body: {
    backgroundColor: "#ffffff",
    fontFamily: "Inter",
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: 1.5,
    color: "#9fadbc",
  },
  "a:not ([class])": { textDecorationSkipInk: "auto" },
  "img,picture": { maxWidth: "100%", display: "block" },
  "input, button, textarea, select": { font: "inherit" },
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": { scrollBehavior: "auto" },
    "*, *::before, *::after": {
      animationDuration: "0.01ms!important",
      animationIterationCount: "1!important",
      transitionDuration: "0.01ms!important",
      scrollBehavior: "auto!important",
    },
  },
});
