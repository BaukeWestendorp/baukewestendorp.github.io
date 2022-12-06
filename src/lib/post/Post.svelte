<script lang="ts">
	import type { Post } from './types';

	export let post: Post;
</script>

<img src="/posts/{post.date}/images/{post.images[0]}" alt={post.images[0]} />

<style>
	img {
		width: 100%;
	}
</style>
