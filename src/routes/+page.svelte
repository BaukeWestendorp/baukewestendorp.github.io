<script lang="ts">
	import type { Post } from '$lib/post/types';
	import PostComponent from '$lib/post/Post.svelte';

	export let data: { posts: Post[] };

	let posts = data.posts;
</script>

<h2>Expositie</h2>

<div class="posts">
	{#each posts as post}
		<PostComponent {post} />
	{/each}
</div>
