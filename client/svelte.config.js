/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import preprocess from "svelte-preprocess";
import tailwind from 'tailwindcss';

const config = {
	preprocess: [
		preprocess({
      postcss: {
        plugins: [
          tailwind,
          autoprefixer
        ]
      },
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({fallback: 'index.html'}),
    target: "#svelte",
    paths: {
      base: '/hunter-photo'
    }
	},
};

export default config;
