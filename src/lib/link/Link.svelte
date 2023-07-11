<script lang="ts">
	import { base } from '$app/paths';

	export let href: string;
	export let openInNewTab = false;
	export let extern = false;
	export let rel: string | null = null;

	const path = `${extern ? '' : base}${href}`;
</script>

<a
	href={path}
	target={openInNewTab ? '_blank' : ''}
	rel={rel || (openInNewTab ? 'noopener noreferrer' : '')}
>
	<slot />
</a>
