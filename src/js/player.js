export class Player {
    constructor(x, y, width, height, speed, hp, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.hp = hp;
        this.img = img;
    }

    drawPlayer(ctx) {
        ctx.drawImage(this.img, this.x + 6, this.y - 6, this.width + 8 , this.height + 8 )
    }

    move(keyword) {
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