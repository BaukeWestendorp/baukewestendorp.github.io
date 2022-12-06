<script lang="ts">
	import type { Post } from './types';

	export let post: Post;
</script>

<img src="/posts/images/{post.image}" alt={post.image} />

<style>
	img {
		width: 100%;
		height: 100%;
	}
</style>
