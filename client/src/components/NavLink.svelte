<script>
	export let link;
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function calcHref(text) {
		if (text === 'Home' || text === 'home') return `${base}`;
		return `${base}/${text.toLowerCase()}`;
	}

	$: href = calcHref(link);
</script>

<li
	class="p-5 hover:bg-yellow-700 transition duration-200 rounded cursor-pointer"
	on:click={goto(href)}
>
	<!-- <span>{icon}</span> -->
	<a {href}> {link} </a>
</li>
