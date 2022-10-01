export class Player {
    constructor(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    drawPlayer(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2)
    ctx.fill()
    }

    move(keyword){
        if (keyword === 'north') {
            this.y -= this.speed;
        }
        if (keyword === 'west') {
            this.x -= this.speed
        }
        if (keyword === 'south') {
            this.y += this.speed
        }
        if (keyword === 'east') {
            this.x += this.speed
        }
    }
}