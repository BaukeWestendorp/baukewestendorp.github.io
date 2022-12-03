<script lang="ts">
	import type { Post } from './types';

	export let post: Post;

	function getFormattedDateFromPost(post: Post): string {
		const splitDate = post.date.split('-');
		const date = new Date(+splitDate[2], splitDate[1] - 1, +splitDate[0]);
		return date.toLocaleDateString('nl-NL', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<div class="post">
	<h3>{getFormattedDateFromPost(post)}</h3>
	{#each post.images as image}
		<img src="/posts/{post.date}/images/{image}" alt={image} />
	{/each}
	<p>{post.description}</p>
</div>

<style>
	.post {
		padding: 1rem 0;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-bottom: 1px dashed var(--c-accent);
	}

	.post:first-child {
		padding-top: 0;
	}
	.post:last-child {
		padding-bottom: 0;
		border-bottom: none;
	}

	.post img {
		width: 100%;
		border-radius: 6px;
	}

	.post p {
		font-style: italic;
		color: var(--c-secondary);
	}
</style>
