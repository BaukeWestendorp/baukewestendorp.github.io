import type { Position } from '$lib/projects/raymarching/types';

export abstract class WorldObject {
	protected constructor(public position: Position) {
		this.position = position;
	}

	abstract sdf(otherPosition: Position): number;
}

export class Sphere extends WorldObject {
	constructor(position: Position, public radius: number) {
		super(position);
		this.radius = radius;
	}

	sdf(otherPosition: Position) {
		const dx = otherPosition.x - this.position.x;
		const dy = otherPosition.y - this.position.y;
		const dz = otherPosition.z - this.position.z;
		const squaredDistance = dx * dx + dy * dy + dz * dz;
		return Math.sqrt(squaredDistance) - this.radius;
	}
}
