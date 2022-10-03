import { redBar } from "./map";

export class Bar {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawBar(ctx, limit) {
        ctx.beginPath();
        ctx.fillStyle = "darkred"
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
        ctx.drawImage(redBar, this.x, this.y, this.width, this.height)
    }

    move(speed) {
        this.y += speed
    }
}