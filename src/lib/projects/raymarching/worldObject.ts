import type { Position } from '$lib/projects/raymarching/types';

export abstract class WorldObject {
	constructor(public position: Position) {
		this.position = position;
	}

	abstract sdf(otherPosition: Position): number;
}

export class Circle extends WorldObject {
	constructor(position: Position, public radius: number) {
		super(position);
		this.radius = radius;
	}

	sdf(otherPosition: Position) {
		const dx = otherPosition.x - this.position.x;
		const dy = otherPosition.y - this.position.y;
		const squaredDistance = dx * dx + dy * dy;
		return Math.sqrt(squaredDistance) - this.radius;
	}
}
