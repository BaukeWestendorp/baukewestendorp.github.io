<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
</script>

<svelte:head>
	<title>Bauke Westendorp: Over</title>
</svelte:head>

<h2>Over Mij</h2>

<div class="over">
	<img src="{base}/pages/over/bauke.jpg" alt="Bauke" />
	<p>
		Je had hoogstwaarschijnlijk al zo'n vermoeden: ik ben Bauke Westendorp. Al heel mijn leven woon
		in het weinigzijdige maar vertrouwde Drachten, alhoewel mijn vroegtijdige studentenhartje al een
		tijd een oogje op het prachtige Groningen heeft. Ik kan me onvoorwaardelijk vermaken met muziek,
		foto, video, kunst en voornamelijk programmeren met een mespuntje zwarte peper.
	</p>

	<h3>Coole projecten die mij aanspreken of waar ik mee te maken heb</h3>
	<ul>
		<li><Link openInNewTab extern href="https://dwangschematiek.nl">dwangschematiek.nl</Link></li>
		<li>
			<Link openInNewTab extern href="https://impossiblerobotics.nl">impossiblerobotics.nl</Link>
		</li>
	</ul>
</div>

<style>
	img {
		width: 100%;
	}

	p {
		margin-top: 1rem;
	}

	ul {
		list-style: lower-roman;
	}
</style>
