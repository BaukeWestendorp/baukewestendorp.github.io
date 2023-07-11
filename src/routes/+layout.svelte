<script lang="ts">
	import '$lib/styles/main.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/effects.css';
	import Link from '$lib/link/Link.svelte';

	import NavBar from '$lib/nav/NavBar.svelte';

	import { base } from '$app/paths';
</script>

<svelte:head>
	<meta name="theme-color" content="#29bb8e" />
</svelte:head>

<div class="layout">
	<header>
		<!-- FIXME: This should be a <Link> component but styling it to not look like a link isn't easily possible that way. -->
		<h1><a href="{base}/">Bauke Westendorp</a></h1>
		<NavBar />
	</header>

	<slot />

	<footer>
		<div class="webring">
			<span>↼ <Link href="http://stupidplusplus.com/">pelle</Link></span>
			<p>
				this site is a part of the ♡ <Link
					href="https://dwangschematiek.nl/webring/"
					target="_blank"
					>dwangschematiek webring
				</Link>♡
			</p>
			<span><Link href="https://dwangschematiek.nl/">ma3ke</Link> ⇀</span>
		</div>
		<a rel="me" href="https://hachyderm.io/@orkapoes">Mastodon</a>
	</footer>
</div>

<style>
	header {
		border-bottom: 2px dashed var(--c-accent);
	}

	h1 {
		padding: 0.5rem 0;
	}

	a {
		color: var(--c-primary);
		text-decoration: none;
		font-family: var(--f-sans-serif);
	}

	.layout {
		max-width: 34rem;
		padding: 1rem;
		margin: auto;
	}

	footer {
		margin-top: 1rem;
	}

	.webring {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}
</style>
