import type { Config } from 'tailwindcss'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    typography: typographyStyles,
  },
  plugins: [typographyPlugin],
}
export default config
