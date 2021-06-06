module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		import('postcss-import'),
		import('tailwindcss'),
		import('autoprefixer'),],
};
