<script lang="ts">
	import type { Post } from './types';
	import { base } from '$app/paths';

	export let post: Post;

	let isSelected = false;
</script>

<img
	class="thumbnail"
	src="{base}/posts/images/{post.image}"
	alt={post.image}
	on:click={() => (isSelected = true)}
/>

{#if isSelected}
	<div class="enlargend" on:click={() => (isSelected = false)}>
		<img src="{base}/posts/images/{post.image}" alt={post.image} />
		<button>Close</button>
	</div>
{/if}

<style>
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
