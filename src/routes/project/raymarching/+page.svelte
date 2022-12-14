<script lang="ts">
	import { Raymarcher } from '$lib/projects/raymarching/raymarcher';
	import { Renderer } from '$lib/projects/raymarching/renderer';
	import { onMount } from 'svelte';

	let canvas!: HTMLCanvasElement;
	let wrapper!: HTMLElement;
	let renderer: Renderer;

	onMount(() => {
		canvas.setAttribute('width', window.getComputedStyle(wrapper).width);
		canvas.setAttribute('height', window.getComputedStyle(wrapper).height);

		const context = canvas.getContext('2d');
		if (context) {
			renderer = new Renderer(context);

			const raymarcher = new Raymarcher(renderer);
			raymarcher.calculateFrame();

			renderer.render();
		}
	});
</script>

<h2>Ray-marching</h2>

<div bind:this={wrapper} class="wrapper">
	<canvas bind:this={canvas} />
</div>

<style>
	.wrapper {
		width: 100%;
		height: 400px;

		border: 1px solid var(--c-accent);
	}
</style>
