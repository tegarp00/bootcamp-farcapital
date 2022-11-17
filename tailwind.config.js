/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1170px',
        }
      },
      colors: {
        grey: '#656464',
        lightgrey: '#8C8C8C',
        darkblue: '#0A093D',
        darkblue2: '#2F2C4A',
        blue: '#217BF4',
        dark: '#4A4A56',
      },
      fontFamily: {
        'sans': ['Inter'],
        'serif': ['Inter'],
        'mono': ['Inter'],
        'display': ['Inter'],
        'body': ['Inter']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}