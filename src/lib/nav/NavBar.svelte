<script lang="ts">
	import Link from '$lib/link/Link.svelte';
</script>

<nav>
	<ul>
		<li><Link href="/">expositie</Link></li>
		<li><Link href="/over">over mij</Link></li>
		<li><Link href="/projecten">projecten</Link></li>
	</ul>
</nav>

<style>
	nav {
		padding-bottom: 2rem;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
	}
</style>
