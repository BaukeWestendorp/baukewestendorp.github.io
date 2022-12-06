const s = async ({ fetch: e }) => ({ posts: await (await e('/posts/posts.json')).json() }),
	a = Object.freeze(
		Object.defineProperty({ __proto__: null, load: s }, Symbol.toStringTag, { value: 'Module' })
	);
export { a as _, s as l };
