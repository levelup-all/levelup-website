import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '900px',
      xl: '1204px',
      '2xl': '1660px'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minHeight: {
        'vh-70px': 'calc(100vh - 70px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        figtree: ["var(--font-figtree)"]
      },
      colors: {
        theme: "#1d21cb",
        themeBrighter: "#4649cd",
        themeLight: "#dddefa96"
      },
      keyframes: {
        transitText: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        }
      },
    },
  },
  plugins: [],
}
export default config
