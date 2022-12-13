<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let openInNewTab = false;
	export let extern = false;

	const path = `${extern ? '' : base}${href}`;
</script>

<a
	href={path}
	target={openInNewTab ? '_blank' : ''}
	rel={openInNewTab ? 'noopener noreferrer' : ''}
>
	{#if openInNewTab}<span title="Opens in a new tab">> </span>{/if}<slot />
</a>
