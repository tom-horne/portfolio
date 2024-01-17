import type { Config } from 'tailwindcss'

const config: Config = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B4D87',
        primaryhover: '#324275',
        // secondary: '',
        // secondaryhover: '',
        neutral: '#f8fafc',
        neutralhover: '#f1f5f9',
      },
      // extend: {
      //   backgroundImage: {
      //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //     'gradient-conic':
      //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      //   },
      // },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
 },
}
export default config
