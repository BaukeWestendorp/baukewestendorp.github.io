import type { WorldObject } from '$lib/projects/raymarching/worldObject';

export class Ray {
	public depth: number = 0;
	public iteration: number = 0;

	constructor(public x: number, public y: number) {}

	march(worldObjects: WorldObject[], minDelta: number, maxDepth: number) {
		let smallestDelta = maxDepth;
		for (const worldObject of worldObjects) {
			const delta = worldObject.sdf({ x: this.x, y: this.y, z: this.depth });
			if (delta < smallestDelta) {
				smallestDelta = delta;
			}
		}

		this.depth += smallestDelta;

		if (smallestDelta <= minDelta) return;

		if (this.depth > maxDepth || this.iteration > 100) {
			this.depth = -1;
			return;
		}

		this.iteration++;

		this.march(worldObjects, minDelta, maxDepth);
	}
}
