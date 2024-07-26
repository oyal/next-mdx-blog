import type { Config } from 'tailwindcss'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'

import { nextui } from '@nextui-org/react'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    typography: typographyStyles,
  },
  plugins: [typographyPlugin, nextui()],
}
export default config
