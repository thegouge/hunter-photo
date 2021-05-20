<script>
	import { getText } from '$lib/helpers';
	import Loading from '../components/loading.svelte';
	import Markdown from '../components/markdown.svelte';

	const text = getText('about-text');
</script>

<svelte:head>
	<title>Hunter Smith | About Me</title>
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
