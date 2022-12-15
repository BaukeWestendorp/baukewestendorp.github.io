import { Ray } from '$lib/projects/raymarching/ray';
import type { Color } from '$lib/projects/raymarching/types';
import { Plane, Sphere } from '$lib/projects/raymarching/worldObject';
import type { WorldObject } from '$lib/projects/raymarching/worldObject';
import type { Renderer } from '$lib/projects/raymarching/renderer';

export class Raymarcher {
	constructor(private renderer: Renderer) {
		this.renderer = renderer;
	}

	calculateFrame() {
		const worldObjects: WorldObject[] = [
			new Sphere({ x: 200, y: 170, z: 150 }, [255, 127, 0], 100),
			new Sphere({ x: 500, y: 320, z: 250 }, [0, 255, 127], 80),
			new Plane({ x: 0, y: -100, z: 0 }, [127, 200, 127])
		];

		for (let y = 0; y < this.renderer.ctx.canvas.height; y++) {
			for (let x = 0; x < this.renderer.ctx.canvas.width; x++) {
				const ray = new Ray(x, y);
				ray.march(worldObjects, 1, 1000);

				if (ray.depth > 0) {
					const baseColor = ray.closestWorldObject?.color ?? [255, 255, 255];
					const lightingFactor = ray.depth / (ray.closestWorldObject?.radius * 2);
					const color: Color = [
						baseColor[0] * lightingFactor,
						baseColor[1] * lightingFactor,
						baseColor[2] * lightingFactor
					];
					this.renderer.setPixel(x, y, color);
				} else {
					this.renderer.setPixel(x, y, [ray.iteration * 3, ray.iteration * 3, ray.iteration * 3]);
				}
			}
		}
	}
}
