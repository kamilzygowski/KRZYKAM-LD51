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
        /*ctx.beginPath();
        ctx.fillStyle = "darkblue"
        ctx.arc(this.x - this.width/2, this.y - this.height/2, this.width, 0, Math.PI * 2)
        ctx.fill()*/
        ctx.drawImage(this.img, this.x - this.width/2, this.y - this.height/2, this.width, this.height)
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