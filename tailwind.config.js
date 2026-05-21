/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'warm-beige':  '#F3EDE4',
        'deep-forest': '#2F4F4F',
        'sage-green':  '#AFC7B2',
        'terracotta':  '#C97A63',
        'bg':          '#F7F5F0',
      },
      borderRadius: {
        'xl':  '20px',
        '2xl': '28px',
        '3xl': '36px',
      },
      boxShadow: {
        'soft': '0 4px 16px rgba(47,79,79,0.08)',
        'md':   '0 12px 40px rgba(47,79,79,0.12)',
        'lg':   '0 24px 64px rgba(47,79,79,0.16)',
      },
      maxWidth: {
        'container': '1440px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
