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

import { winTheGame } from "./main";

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

export const playerLImg = new Image();
playerLImg.src = "https://i.postimg.cc/xdpBLnNB/playerL.png"

export const playerL2Img = new Image();
playerL2Img.src = "https://i.postimg.cc/T25vqL90/player2L.png"

export const stone1 = new Image();
stone1.src = "https://i.postimg.cc/W1qxPQDv/ston2.png"
export const stone2 = new Image();
stone2.src = "https://i.postimg.cc/V6mhnvKf/stone1.png"
export const stone3 = new Image();
stone3.src = "https://i.postimg.cc/YScZ2bgm/stone3.png"
export const stone4 = new Image();
stone4.src = "https://i.postimg.cc/pdD7mzYc/stone4.png"

export const rstone1 = new Image()
rstone1.src = "https://i.postimg.cc/jj7WPdLF/rston1.png"
export const rstone2 = new Image()
rstone2.src = "https://i.postimg.cc/T3SLKWYb/rstone2.png"
export const rstone3 = new Image()
rstone3.src = "https://i.postimg.cc/6pT46hww/rstone3.png"

export const enemy1 = new Image();
enemy1.src = "https://i.postimg.cc/rmdv8sFQ/enemy1.png"

export const enemy2 = new Image();
enemy2.src = "https://i.postimg.cc/VLzmFsHV/enemy2.png"

export const redBar = new Image()
redBar.src = "https://i.postimg.cc/SsGH479B/redBar.png";

export const meta = new Image()
meta.src = "https://i.postimg.cc/59G4HbT6/meta.png"

export const detectCollision = (object1, object2) => {
    let dx = object1.x - object2.x;
    let dy = object1.y - object2.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < object1.width / 2 + object2.width / 2) {
        return true
    }
    else {
        return false
    }
}

export const drawMap = (map, ctx, SQM_SIZE, player) => {
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
            }else if (sqm === 96){
                ctx.drawImage(stone1, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 97){
                ctx.drawImage(stone2, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 98){
                ctx.drawImage(stone3, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 99){
                ctx.drawImage(stone4, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 100){
                ctx.drawImage(rstone1, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 101){
                ctx.drawImage(rstone2, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 102){
                ctx.drawImage(rstone3, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
            }
            else if (sqm === 999){
                ctx.drawImage(meta, (SQM_SIZE + 1) * id, (SQM_SIZE + 1) * index, SQM_SIZE, SQM_SIZE)
                if(detectCollision(player,{x:(SQM_SIZE + 1) * id,y: (SQM_SIZE + 1) * index, width: SQM_SIZE, height: SQM_SIZE})){
                    winTheGame()
                }
            }
        })
    })
}
