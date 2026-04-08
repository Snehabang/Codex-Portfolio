import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#2563eb'
      },
      boxShadow: {
        card: '0 4px 20px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
