/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			colors: {
				'link': '#70120f',
				'link-light': '#f6e05e',
			},
			typography: (theme) => ({
				dark: {
					css: {
						a: {
							color: theme('colors.link-light'),
							'&:hover': {
								textDecoration: 'underline',
							},
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addBase, theme }) {
			addBase({
				'a': {
					color: theme('colors.link'),
					'&:hover': {
						textDecoration: 'underline',
					},
				},
			});
		}),
	],
	darkMode: 'selector',
}
