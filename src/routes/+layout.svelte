<script lang="ts">
	import '$lib/styles/main.css';
	import '$lib/styles/typography.css';

	import NavBar from '$lib/nav/NavBar.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#29bb8e" />
</svelte:head>

<div class="layout">
	<h1>Bauke Westendorp</h1>

	<NavBar />

	<slot />
</div>

<style>
	.layout {
		max-width: 34rem;
		padding: 1rem;
		margin: auto;
	}
</style>
