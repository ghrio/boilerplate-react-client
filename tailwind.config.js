module.exports = {
	purge: ['./index.html', './src/**/*.{,js,ts,jsx,tsx}'],
	darkMode: false, 
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer'),
	]
};
