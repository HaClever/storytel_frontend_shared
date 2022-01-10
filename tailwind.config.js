const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const storytelColors = {
  black: "#000000",
  white: "#ffffff",
  green: "#00A569",
  castro: "#48001E",
  "your-pink": "#FFCCC2",
  orange: "#FF5C28",
  "flame-pea": "#D35B33",
  alabaster: "#FAFAFA",
  gallery: "#EEEEEE",
  silver: "#CCCCCC",
  "dusty-gray": "#999999",
  "red-orange": "#FF2828",
  sauvignon: "#FFF5F3",
  "dove-gray": "#666666",
  "black-squeeze": "#F2FAF8",
  "wild-sand": "#F6F6F6",
};

const storytelUiPlugin = plugin(function ({
  addBase,
  addVariant,
  addComponents,
  theme,
}) {
  const variants = {
    "is-invalid": '&[data-is-invalid="true"]',
    "is-loading": '&[data-is-loading="true"]',
  };
  Object.entries(variants).forEach(([variantName, selector]) => {
    addVariant(variantName, selector);
  });

  const components = {
    ".page-container": {
      width: theme("width.full"),
      height: theme("height.full"),
      margin: theme("margin.auto"),
      [`@media (min-width: ${theme("screens.sm")})`]: {
        "max-width": theme("screens.sm"),
      },
      [`@media (min-width: ${theme("screens.md")})`]: {
        "max-width": theme("screens.md"),
      },
      [`@media (min-width: ${theme("screens.lg")})`]: {
        "max-width": theme("screens.lg"),
      },
      [`@media (min-width: ${theme("screens.xl")})`]: {
        "max-width": theme("screens.xl"),
      },
      [`@media (min-width: ${theme("screens.2xl")})`]: {
        "max-width": theme("screens.2xl"),
      },
    },
  };

  addComponents(components);

  const baseStyles = {
    "@font-face": [
      {
        fontFamily: "StorytelEuclid",
        src: "url(assets/fonts/StorytelEuclid-Regular-Cyrillic.woff2)",
        fontWeight: 400,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "StorytelEuclid",
        src: "url(assets/fonts/StorytelEuclid-Medium-Cyrillic.woff2)",
        fontWeight: 500,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "StorytelEuclid",
        src: "url(assets/fonts/StorytelEuclid-Semibold-Cyrillic.woff2)",
        fontWeight: 600,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],
  };

  addBase(baseStyles);
});

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: storytelColors,
    extend: {
      fontFamily: {
        sans: ["StorytelEuclid", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "10px": "0.625rem",
        "40px": "2.5rem",
        "64px": "4rem",
        "80px": "5rem",
      },
      borderRadius: {
        "5px": "0.3125rem",
        "10px": "0.625rem",
        "20px": "1.25rem",
      },
      spacing: {
        "2px": "0.125rem",
        "5px": "0.3125rem",
        "6px": "0.375rem",
        "10px": "0.625rem",
        "15px": "0.9375rem",
        "30px": "1.875rem",
        "50px": "3.125rem",
        "90px": "5.625rem",
        "100px": "6.25rem",
        "150px": "9.375rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-radix")(),
    storytelUiPlugin,
  ],
};
