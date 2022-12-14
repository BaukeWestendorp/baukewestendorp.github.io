<script lang="ts">
	import type { Post } from './types';
	import { base } from '$app/paths';

	export let post: Post;

	const isQuote = post.quote != null;

	let isSelected = false;

	let formattedDate: string;
	$: {
		const splitDate = post.date.split('-');
		const date = new Date(+splitDate[2], splitDate[1] - 1, +splitDate[0]);
		formattedDate = date.toLocaleDateString('nl-NL', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

{#if isQuote}
	<p class="quote">"{post.quote}"</p>
{:else}
	<img
		class="thumbnail"
		src="{base}/posts/images/{post.image}"
		alt={post.image}
		on:click={() => (isSelected = true)}
	/>
{/if}

{#if isSelected}
	<div class="enlargend" on:click={() => (isSelected = false)}>
		<h3>{formattedDate}</h3>
		<img src="{base}/posts/images/{post.image}" alt={post.image} />
		<button>Close</button>
	</div>
{/if}

<style>
	.quote {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 18px;
	}

	.thumbnail {
		width: 100%;
		height: 100%;

		cursor: pointer;
		transition: 0.1s scale;
	}

	@media not screen and (hover: none) and (pointer: coarse) {
		.thumbnail:hover {
			opacity: 0.8;
			scale: 0.95;
		}
	}

	.enlargend {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		padding: 1rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;

		background: #000d;
	}

	.enlargend img {
		width: 100%;
		max-width: 80rem;
	}
</style>
