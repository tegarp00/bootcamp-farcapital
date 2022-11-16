/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
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
    blue: '#217BF4',
    red: '#da373d',
    },
		fontFamily: {
			//body: ['Inter']
      'sans': ['Inter'],
      'serif': ['Inter'],
      'mono': ['Inter'],
      'display': ['Inter'],
      'body': ['Inter'],
		}
	},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
