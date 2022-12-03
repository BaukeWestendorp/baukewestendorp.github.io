<script lang="ts">
	import '$lib/styles/main.css';
	import '$lib/styles/typography.css';

	import NavBar from '$lib/components/NavBar.svelte';
</script>

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
