import type { Color, Position } from '$lib/projects/raymarching/types';

export abstract class WorldObject {
	constructor(public position: Position, public color: Color) {
		this.position = position;
		this.color = color;
	}

	abstract sdf(otherPosition: Position): number;
}

export class Sphere extends WorldObject {
	constructor(position: Position, color: Color, public radius: number) {
		super(position, color);
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

export class Plane extends WorldObject {
	public sdf(otherPosition: Position): number {
		return otherPosition.y - this.position.y;
	}
}
