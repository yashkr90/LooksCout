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
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
      "extend": {
          "colors": {
              "primary-900": "#2b63d9",
              "base-white": "#fff",
              "primary-600": "#437ef7",
              "primary-200": "#b1ccfb",
              "primary-400": "#648ef7",
              "gray-50": "#5f6d7e",
              "gray-700": "#272d37"
          },
          "fontFamily": {
              "text-button-semibold-large": "Inter"
          },
          "borderRadius": {
              "8xs": "5px",
              "11xl": "30px"
          }
      },
      "fontSize": {
          "mini": "15px",
          "base": "16px",
          "3xl": "22px",
          "13xl": "32px"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}