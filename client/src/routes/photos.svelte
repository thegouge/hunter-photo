<script>
	import { getImages } from '$lib/helpers';
	import Loading from '../components/loading.svelte';
	import MasonDisplay from '../components/MasonDisplay.svelte';

	let images = getImages('photography-displays');
</script>

<svelte:head>
	<title>Hunter Smith | Photography</title>
</svelte:head>

{#await images}
	<Loading />
{:then images}
	<h2 class="page-title">My Photos!</h2>

	<MasonDisplay {images} />
{:catch}
	<div>Something went wrong</div>
{/await}
