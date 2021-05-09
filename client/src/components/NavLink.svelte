<script>
	export let link;

	function calcHref(text) {
		if (text === 'Home' || text === 'home') return '/';
		return `/${text.toLowerCase}`;
	}

	$: href = calcHref(link);
</script>

<li class="p-5 hover:bg-yellow-700 transition duration-200 rounded">
	<!-- <span>{icon}</span> -->
	<a {href}> {link} </a>
</li>
