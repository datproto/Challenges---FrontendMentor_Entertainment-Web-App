const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/components/**/*.{html,js}","./src/pages/**/*.{html,js}"],
  theme: {
    colors: {
      red: '#FC4747',
      blue: {
        'semi-dark': '#161D2F',
        'greyish': '#5A698F',
        'dark': '#10141E'
      },
      white: '#fff',
      transparent: 'transparent'
    },
    fontSize: {
      'body': {
        'medium': '15px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
