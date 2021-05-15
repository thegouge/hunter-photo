<script>
	import axios from 'axios';
	import NavLink from '../components/NavLink.svelte';
	import Tailwind from '../components/Tailwind.svelte';
	import { API_URL } from '../lib/constants';

	let links = ['Home', 'About', 'Photos', 'Design', 'Twitch'];

	let src, alt;

	axios.get(`${API_URL}/profile-picture`).then((response) => {
		console.log(response);
		src = `${API_URL}${response.data.image[0].url}`;
		alt = response.data.image[0].alternativeText;
	});
</script>

<div class="flex">
	<nav class="w-1/6 h-screen bg-gray-700 text-white p-5">
		<div class="logo">
			<img {src} {alt} class="rounded-full border-gray-400 border-2 w-20 mx-auto" />
			<h1 class="text-center text-xl font-semibold mt-2">Hunter Smith</h1>
		</div>
		<ul class="">
			{#each links as link}
				<NavLink {link} />
			{/each}
		</ul>
	</nav>

	<main>
		<slot />
	</main>
</div>
<Tailwind />
