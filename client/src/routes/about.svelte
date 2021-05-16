<script>
	import { getText } from '$lib/helpers';
	import SvelteMarkdown from 'svelte-markdown';

	const text = getText('about-text');
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

{#await text}
	loading...
{:then { Title, Content }}
	<div class="w-full">
		<h2>{Title}</h2>
		<SvelteMarkdown source={Content} />
	</div>
{:catch}
	<div class="text-red-800">something went wrong</div>
{/await}
