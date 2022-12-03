import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	let response = await fetch('/posts/posts.json');
	let posts = await response.json();
	return { posts };
};
