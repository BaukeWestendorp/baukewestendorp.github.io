import type { Color } from '$lib/projects/raymarching/types';

export class Renderer {
	imageData: ImageData;

	constructor(public ctx: CanvasRenderingContext2D) {
		this.ctx.imageSmoothingEnabled = false;
		this.imageData = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	render() {
		this.ctx.putImageData(this.imageData, 0, 0);
	}

	setPixel(x: number, y: number, color: Color) {
		const index = (y * this.imageData.width + x) * 4;
		this.imageData.data[index] = color[0];
		this.imageData.data[index + 1] = color[1];
		this.imageData.data[index + 2] = color[2];
		this.imageData.data[index + 3] = 255;
	}
}
