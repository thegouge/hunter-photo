<script>
	import image from '$lib/images/Sanic.jpg';
	import '../app.css';
	import NavLink from '../components/NavLink.svelte';

	let links = ['Home', 'About', 'Photos', 'Design', 'Twitch'];

	let src = image;
</script>

<nav class="w-1/6 h-screen fixed bg-sidebar text-white p-5">
	<div class="logo">
		<img {src} alt="is me!" class="rounded-full border-gray-400 border-2 w-20 mx-auto" />
		<h1 class="text-center text-xl font-semibold mt-2">Hunter Smith</h1>
	</div>
	<ul class="">
		{#each links as link}
			<NavLink {link} />
		{/each}
	</ul>
</nav>

<main class="h-screen bg-gray-700">
	<slot />
</main>
