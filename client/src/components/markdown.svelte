<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let source;
</script>

<div class="markdown">
	<SvelteMarkdown {source} />
</div>

<style>
	:global(.markdown) {
		padding: 20px;
	}
	.markdown :global(h1),
	.markdown :global(h2),
	.markdown :global(h3),
	.markdown :global(h4),
	.markdown :global(h5),
	.markdown :global(h6) {
		font-weight: bold;
		@apply py-3;
		@apply my-3;
    @apply capitalize;
	}
	.markdown :global(h1) {
		@apply text-3xl;
		@apply border-b-2;
		@apply border-gray-500;
	}

	.markdown :global(h2) {
		@apply text-2xl;
		@apply border-b-2;
		@apply border-gray-500;
	}

	.markdown :global(h3) {
		@apply text-xl;
	}

	.markdown :global(h4) {
		@apply text-lg;
	}

	.markdown :global(h5) {
		@apply text-base;
	}

	.markdown :global(h6) {
		@apply text-sm;
	}

	.markdown :global(ul) {
		list-style: disc;
	}
	.markdown :global(p) {
		margin: 8px 0;
	}
	.markdown :global(a) {
		@apply text-blue-600;
	}
	.markdown :global(a:hover) {
		@apply text-yellow-600;
	}
</style>
