<script>
	import { getText } from '$lib/helpers';
	import Loading from '../components/loading.svelte';
	import Markdown from '../components/markdown.svelte';

	const text = getText('home-text');
</script>

<svelte:head>
	<title>Hunter Smith | Home Page</title>
</svelte:head>

{#await text}
	<Loading />
{:then { Title, Content }}
	<div class="w-full">
		<h2 class="page-title">{Title}</h2>
		<Markdown source={Content} />
	</div>
{:catch}
	<div class="text-red-800">something went wrong</div>
{/await}

<style style lang="postcss">
	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	h1 {
		@apply uppercase;
		@apply text-6xl;
		@apply font-thin;
		@apply leading-tight;
		@apply my-16 mx-auto;
		@apply max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>
