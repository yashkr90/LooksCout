// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "base-white": "#fff",
        "neutral-50": "#fafbfc",
        "neutral-700": "#dae0e6",
        "neutral-800": "#a5acba",
        "primary-200": "#b1ccfb",
        "primary-400": "#648ef7",
        "primary-600": "#437ef7",
        "primary-900": "#2b63d9",
        "gray-25": "#919ba7",
        "gray-50": "#5f6d7e",
        "gray-300": "#2e3545",
        "gray-600": "#2c3444",
        "gray-700": "#272d37",
        "gray-950": "#151b28",
      },
      fontFamily: {
        "text-button-semibold-large": "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      smi: "13px",
      mini: "15px",
      base: "16px",
      xl: "20px",
      "3xl": "22px",
      "5xl": "24px",
      "9xl": "28px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
