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
			<span>↼ <Link href="http://stupidplusplus.com/">palle</Link></span>
			<p>
				<span>part of the</span>
				<Link href="https://dwangschematiek.nl/webring/" openInNewTab>dwangschematiek webring</Link>
			</p>
			<span><Link href="https://dwangschematiek.nl/">ma3ke</Link> ⇀</span>
		</div>
		<div class="socials">
			<Link rel="me" href="https://hachyderm.io/@orkapoes">Mastodon</Link>
		</div>
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
		align-items: center;

		padding-bottom: 0.5rem;
		border-bottom: 1px dashed var(--c-primary);
	}

	@media (max-width: 34rem) {
		.webring p {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.socials {
		padding-top: 0.5rem;
		display: flex;
		justify-content: space-around;
	}
</style>
