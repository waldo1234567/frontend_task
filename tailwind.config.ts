import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e8efff',
          200: '#cddcff',
          300: '#a8c0ff',
          400: '#7d9bff',
          500: '#5d7dff',
          600: '#465fff',
          700: '#3448e6',
          800: '#2a39b4',
          900: '#232f8d',
        },
        accent: '#10b981',
        ink: '#0b1020',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        glow: '0 10px 40px rgba(93,125,255,0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(1200px 600px at 10% 10%, rgba(93, 125, 255, 0.25), transparent), radial-gradient(900px 400px at 90% 30%, rgba(16, 185, 129, 0.18), transparent), radial-gradient(700px 500px at 30% 80%, rgba(255, 255, 255, 0.05), transparent)'
      }
    },
  },
  plugins: [],
} satisfies Config
