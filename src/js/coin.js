export class Coin{
    constructor(x, y, img){
        this.x = x;
        this.y =y
        this.img = img;
        this.width = 32
        this.height = 32
    }
    drawCoin(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}