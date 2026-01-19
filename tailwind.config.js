/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.{html,md}',
    './*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        'ead-blue': 'rgb(42, 83, 247)',
        'ead-blue-light': 'rgb(89, 112, 207)',
        'ead-link': 'rgb(0, 136, 255)',
        'ead-red': 'rgb(250, 72, 72)',
      },
      fontFamily: {
        'firme': ['Firme', 'sans-serif'],
        'firme-black': ['Firme', 'sans-serif'],
        'firme-extrabold': ['Firme', 'sans-serif'],
      },
      fontWeight: {
        'black': '900',
        'extrabold': '800',
        'bold': '700',
        'medium': '500',
        'normal': '400',
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.5rem', { lineHeight: '4rem' }],
        '7xl': ['4rem', { lineHeight: '4.5rem' }],
        '8xl': ['4.5rem', { lineHeight: '5rem' }],
        '9xl': ['5rem', { lineHeight: '5.5rem' }],
        '10xl': ['5.5rem', { lineHeight: '6rem' }],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
