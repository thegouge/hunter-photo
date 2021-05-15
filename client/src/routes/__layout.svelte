<script>
	import axios from 'axios';
	import NavLink from '../components/NavLink.svelte';
	import Tailwind from '../components/Tailwind.svelte';
	import { API_URL } from '../lib/constants';

	let links = ['Home', 'About', 'Photos', 'Design', 'Twitch'];

	let { src, alt, name } = getProfilePic();

	async function getProfilePic() {
		const response = await axios.get(`${API_URL}/profile-picture`);
		src = `${API_URL}${response.data.Picture[0].url}`;
		alt = response.data.altText;
		name = response.data.profileTitle;
		return { src, alt, name };
	}
</script>

<div class="flex">
	<nav class="w-1/6 h-screen bg-gray-700 text-white p-5">
		<div class="logo">
			<img {src} {alt} title={alt} class="rounded-full border-gray-400 border-2 w-20 mx-auto" />
			<h1 class="text-center text-xl font-semibold mt-2">{name}</h1>
		</div>
		<ul class="mt-3">
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
