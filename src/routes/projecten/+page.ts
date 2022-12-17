import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	let response = await fetch('/projects/projects.json');
	let projects = await response.json();
	return { projects };
};
