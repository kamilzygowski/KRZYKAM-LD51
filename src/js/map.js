import tile from '@/images/trawka.png'
import gTop from '@/images/top.png'
import gTopLeft from '@/images/topLeft.png'
import gTopRight from '@/images/topRight.png'
import gRight from '@/images/right.png'
import gBottomRight from '@/images/bottomRight.png'
import gBottom from '@/images/bottom.png'
import gBottomLeft from '@/images/bottomLeft.png'
import gLeft from '@/images/left.png'
import gCenter from '@/images/center.png'
import _water from '@/images/water.png'
import dBottomLeft from '@/images/dBottomLeft.png'
import dBottomRight from '@/images/dBottomRight.png'
import dBottom1 from '@/images/dBottom1.png'
import dBottom2 from '@/images/dBottom2.png'
import dTopLeft from '@/images/dTopLeft.png'
import dTopRight from '@/images/dTopRight.png'
import dTop from '@/images/dTop1.png'


export const testTile = new Image();
testTile.src = tile;

export const grassTop = new Image();
grassTop.src = gTop;
export const grassTopLeft = new Image();
grassTopLeft.src = gTopLeft;
export const grassTopRight = new Image();
grassTopRight.src = gTopRight;
export const grassRight = new Image();
grassRight.src = gRight;
export const grassBottomRight = new Image();
grassBottomRight.src = gBottomRight;
export const grassBottom = new Image();
grassBottom.src = gBottom;
export const grassBottomLeft = new Image();
grassBottomLeft.src = gBottomLeft;
export const grassLeft = new Image();
grassLeft.src = gLeft;
export const grassCenter = new Image();
grassCenter.src = gCenter;
export const water = new Image();
water.src = _water;

export const downBottomLeft = new Image();
downBottomLeft.src = dBottomLeft
export const downBottomRight = new Image();
downBottomRight.src = dBottomRight
export const downBottom1 = new Image();
downBottom1.src = dBottom1
export const downBottom2 = new Image();
downBottom2.src = dBottom2
export const downTopLeft = new Image()
downTopLeft.src = dTopLeft
export const downTopRight = new Image()
downTopRight.src = dTopRight
export const downTop = new Image()
downTop.src = dTop

export const drawMap = (map, ctx, SQM_SIZE) => {
    map.forEach((element, index) => {
        element.forEach((sqm, id) => {
            if (sqm === 0) {
                ctx.fillStyle = "green"
                ctx.drawImage(grassTopLeft, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 1) {
                ctx.fillStyle = "blue"
                //ctx.fillRect(SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
                ctx.drawImage(grassTop, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
                /*if (detectCollision(player, { x: SQM_SIZE * id + SQM_SIZE / 2, y: SQM_SIZE * index + SQM_SIZE / 2, width: SQM_SIZE, height: SQM_SIZE })) {
                    console.log('collision')
                }*/
            } else if (sqm === 2) {
                ctx.drawImage(grassTopRight, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 3) {
                ctx.drawImage(grassCenter, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 4) {
                ctx.drawImage(grassBottom, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 5) {
                ctx.drawImage(grassBottomLeft, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 6) {
                ctx.drawImage(grassBottomRight, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 7) {
                ctx.drawImage(grassLeft, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 8) {
                ctx.drawImage(grassRight, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            } else if (sqm === 9) {
                ctx.drawImage(water, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 10) {
                ctx.drawImage(downBottomLeft, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 11) {
                ctx.drawImage(downBottomRight, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 12) {
                ctx.drawImage(downBottom1, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 13) {
                ctx.drawImage(downBottom2, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 14) {
                ctx.drawImage(downTopLeft, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 15) {
                ctx.drawImage(downTopRight, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 16) {
                ctx.drawImage(downTop, SQM_SIZE * id, SQM_SIZE * index, SQM_SIZE, SQM_SIZE)
            }

        })
    })
}
