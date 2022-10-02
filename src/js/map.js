/*import tile from '@/images/trawka.png'
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
import dTop from '@/images/dTop1.png'*/

export const grassTop = new Image();
grassTop.src = "https://i.postimg.cc/dQ4q9QH1/top.png"//gTop;
export const grassTopLeft = new Image();
grassTopLeft.src = "https://i.postimg.cc/tJSpRDZP/topLeft.png"//gTopLeft;
export const grassTopRight = new Image();
grassTopRight.src = "https://i.postimg.cc/9fZmPGK5/topright.png"//gTopRight;
export const grassRight = new Image();
grassRight.src = "https://i.postimg.cc/j2dRrB5t/right.png"//gRight;
export const grassBottomRight = new Image();
grassBottomRight.src = "https://i.postimg.cc/tTGg8rW4/bottom-Right.png"//gBottomRight;
export const grassBottom = new Image();
grassBottom.src = "https://i.postimg.cc/DwD0Pfzs/bottom.png"//gBottom;
export const grassBottomLeft = new Image();
grassBottomLeft.src = "https://i.postimg.cc/90WQQrx3/bottom-Left.png"//gBottomLeft;
export const grassLeft = new Image();
grassLeft.src = "https://i.postimg.cc/Y97pdvB4/left.png"//gLeft;
export const grassCenter = new Image();
grassCenter.src = "https://i.postimg.cc/63VQKdfL/center.png"//gCenter;
export const water = new Image();
water.src = "https://i.postimg.cc/Kz5mwmm0/water.png"//_water;

export const downBottomLeft = new Image();
downBottomLeft.src = "https://i.postimg.cc/KjJvkxV1/d-Bottom-Left.png"//dBottomLeft
export const downBottomRight = new Image();
downBottomRight.src = "https://i.postimg.cc/fTqRMWmF/d-Bottom-Right.png"//dBottomRight
export const downBottom1 = new Image();
downBottom1.src = "https://i.postimg.cc/439dLCK0/dBottom1.png"//dBottom1
export const downBottom2 = new Image();
downBottom2.src = "https://i.postimg.cc/qMv7f6hy/dBottom2.png"//dBottom2
export const downTopLeft = new Image()
downTopLeft.src = "https://i.postimg.cc/GmZ3sMMx/dTopLeft.png"//dTopLeft
export const downTopRight = new Image()
downTopRight.src = "https://i.postimg.cc/jSWd2Vhj/d-Top-Right.png"//dTopRight
export const downTop = new Image()
downTop.src = "https://i.postimg.cc/4453FQdX/dTop1.png"//dTop

export const hpImg = new Image();
hpImg.src = "https://i.postimg.cc/5yFjPH6z/hp-2.png"

export const playerImg = new Image();
playerImg.src = "https://i.postimg.cc/LsWMXx8t/player.png"

export const playerImg2 = new Image();
playerImg2.src = "https://i.postimg.cc/432h3RcW/player2.png"

export const drawMap = (map, ctx, SQM_SIZE) => {
   /*ctx.beginPath();
    ctx.lineTo(0,0)*/
    map.forEach((element, index) => {
        element.forEach((sqm, id) => {
            if (sqm === 0) {
                ctx.drawImage(grassTopLeft, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 1) {
                ctx.drawImage(grassTop, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            } else if (sqm === 2) {
                ctx.drawImage(grassTopRight, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 3) {
                ctx.drawImage(grassCenter, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 4) {
                ctx.drawImage(grassBottom, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 5) {
                ctx.drawImage(grassBottomLeft, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 6) {
                ctx.drawImage(grassBottomRight, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 7) {
                ctx.drawImage(grassLeft, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 8) {
                ctx.drawImage(grassRight, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            } else if (sqm === 9) {
                ctx.drawImage(water, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 10) {
                ctx.drawImage(downBottomLeft, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 11) {
                ctx.drawImage(downBottomRight, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 12) {
                ctx.drawImage(downBottom1, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 13) {
                ctx.drawImage(downBottom2, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 14) {
                ctx.drawImage(downTopLeft, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 15) {
                ctx.drawImage(downTopRight, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 16) {
                ctx.drawImage(downTop, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            /*console.log(SQM_SIZE * id, SQM_SIZE * index)
            
            ctx.lineTo(SQM_SIZE * id, SQM_SIZE * index)
            ctx.strokeStyle = "red"
            ctx.stroke()*/
        })
    })
}
