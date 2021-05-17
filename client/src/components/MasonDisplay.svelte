<script>
	export let images;
	import Masonry from 'svelte-masonry/Masonry.svelte';
</script>

<Masonry>
	{#each images as img (img.id)}
		<div>
			<img src={img.src} alt={img.alt} />
		</div>
	{:else}
		<div>There are no photos here!</div>
	{/each}
</Masonry>
