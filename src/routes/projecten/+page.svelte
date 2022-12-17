<script lang="ts">
	import { base } from '$app/paths';
	import Link from '$lib/link/Link.svelte';
	import type { Project } from '$lib/projects/types';

	export let data: { projects: Project[] };
</script>

<svelte:head>
	<title>Bauke Westendorp: Projecten</title>
</svelte:head>

<h2>Projecten</h2>

<div class="projects-grid">
	{#each data.projects as project}
		<Link href="projecten/{project.link}">
			<div class="project">
				<h2>{project.title}</h2>

				<div class="image-wrapper">
					<img src="{base}/projects/images/{project.thumbnail}" alt={project.title} />
				</div>
			</div>
		</Link>
	{/each}
</div>

<style>
	.projects-grid {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.project {
		border: 1px solid var(--c-accent);
	}

	.project h2 {
		padding: 0.5rem 1rem;
		background: var(--c-accent);
		color: var(
			--c-primary
		); /* this shouldn't be necessary if we find a better way to style <Link/> components */
	}

	.image-wrapper {
		padding: 0.5rem;
	}
	img {
		width: 100%;
		display: block;
	}
</style>
