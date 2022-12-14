import type { WorldObject } from '$lib/projects/raymarching/worldObject';

export class Ray {
	public depth: number = 0;
	public iteration: number = 0;

	constructor(public x: number) {}

	march(worldObject: WorldObject, minDelta: number, maxDepth: number) {
		const delta = worldObject.sdf({ x: this.x, y: this.depth });
		this.depth += delta;

		if (delta <= minDelta) return;

		if (this.depth > maxDepth || this.iteration > 100) {
			this.depth = -1;
			return;
		}

		this.iteration++;

		this.march(worldObject, minDelta, maxDepth);
	}
}
