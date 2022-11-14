/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
    container: {
      center: true,
      screens: {
        xl: '1170px',
      }
    },
    extend: {
        colors: {
        red: '#da373d',
        }
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
  plugins: [],
}
