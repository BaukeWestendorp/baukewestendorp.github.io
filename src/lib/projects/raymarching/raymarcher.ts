import { Ray } from '$lib/projects/raymarching/ray';
import { Circle } from '$lib/projects/raymarching/worldObject';
import type { WorldObject } from '$lib/projects/raymarching/worldObject';
import type { Renderer } from '$lib/projects/raymarching/renderer';

export class Raymarcher {
	constructor(private renderer: Renderer) {
		this.renderer = renderer;
	}

	calculateFrame() {
		const worldObject: WorldObject = new Circle({ x: 200, y: 150 }, 100);

		for (let x = 0; x < this.renderer.ctx.canvas.width; x++) {
			const ray = new Ray(x);
			ray.march(worldObject, 0.1, 1000);

			for (let y = 0; y < this.renderer.ctx.canvas.height; y++) {
				this.renderer.setPixel(x, y, [0, ray.depth, 0, 255]);
			}
		}
	}
}
