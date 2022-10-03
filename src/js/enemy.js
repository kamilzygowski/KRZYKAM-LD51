export class Enemy{
    constructor(x, y, img){
        this.x = x;
        this.y =y
        this.img = img;
        this.width = 32
        this.height = 32
        this.rng = Math.floor(Math.random()*2)
        this.movePattern = this.rng == 0 ? [33, 33, 33, -33, -33, -33] : [-33, -33, -33, 33, 33, 33]
        this.moveIndex = 0;
    }
    drawEnemy(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveEnemy(){
        this.y += this.movePattern[this.moveIndex];
        this.moveIndex >= 5 ? this.moveIndex = 0 : this.moveIndex++;
    }
}