<script lang="ts">
	import '$lib/styles/main.css';
	import '$lib/styles/typography.css';

	import NavBar from '$lib/nav/NavBar.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#29bb8e" />
</svelte:head>

<div class="layout">
	<header>
		<h1>Bauke Westendorp</h1>
		<NavBar />
	</header>

	<slot />
</div>

<style>
	header {
		border-bottom: 2px dashed var(--c-accent);
	}

	h1 {
		padding: 0.5rem 0;
	}

	.layout {
		max-width: 34rem;
		padding: 1rem;
		margin: auto;
	}
</style>
