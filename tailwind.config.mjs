/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#2337ff',
				'accent-dark': '#000d8a',
				black: 'rgb(15, 18, 25)',
				'gray-light': 'rgb(229, 233, 240)',
				'gray-dark': 'rgb(34, 41, 57)',
			},
			backgroundImage: {
				'gray-gradient': 'linear-gradient(rgba(229, 233, 240, 0.5), #fff)',
			},
			boxShadow: {
				custom: '0 2px 6px rgba(96, 115, 159, 0.25), 0 8px 24px rgba(96, 115, 159, 0.33), 0 16px 32px rgba(96, 115, 159, 0.33)',
			},
		},
		fontFamily: {
			Atkinson: ['Atkinson', 'sans-serif'],
		},
	},
	
	plugins: [],
	darkMode: "class",
}
