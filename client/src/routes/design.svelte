<script>
	import { getImages } from '$lib/helpers';
	import MasonDisplay from '../components/MasonDisplay.svelte';

	let images = getImages('design-displays');
</script>

{#await images}
	<div class="loading">loading...</div>
{:then images}
	<MasonDisplay {images} />
{/await}
