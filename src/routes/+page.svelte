<script lang="ts">
	import type { Post } from '$lib/post/types';
	import PostComponent from '$lib/post/Post.svelte';

	export let data: { posts: Post[] };

	let posts = data.posts;
</script>

<svelte:head>
	<title>Bauke Westendorp: Expositie</title>
</svelte:head>

<h2>Expositie</h2>

<div class="posts">
	{#each posts as post}
		<PostComponent {post} />
	{/each}
</div>

<style>
	.posts {
		display: grid;
		grid-template-columns: 50% 50%;
	}
</style>
