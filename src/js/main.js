import { detectCollision, drawMap, enemy1, enemy2, hpImg, playerImg, playerImg2, playerL2Img, playerLImg, coin1, coin2 } from "./map.js";
import { Player } from "./player";
import { Bar } from "./bar";
import { Enemy } from "./enemy.js";
import { Coin } from "./coin.js";

export const title =
    () => `Ludum Dare 51 - KRZYKAM`

export const canvas = document.createElement('canvas');
export const canvas2 = document.createElement('canvas');
const musicMozart = [6, 3, 5, 2, 2, 2, 2, 2, 9, 7, 3, 6, 2, 2, 2, 2, 2, 8, 5, 8, 3, 3, 2.1, 3, 6, 3, 3, 2.1, 2.1, 6, 3, 3, 2.1, 3, 7, 4, 4, 4, 4, 4, 4, 4, 4,3]
const musicArctic = [6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5,2.5, 2.5, 3, 20, 2.5,3,2.5,14, 2.5, 12, 2.5,3,13, 2.5,3.2,3, 3]
const musicEnemy = [7.5,7.5,7.5,7.5,7.5,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,7.7,4,4,4,4,4,4,4]
const musicEminem = [6]
const musicKid = [2,6,10,2,8,10,2,7.5,10,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,3,2,2,2,2,3,4,3.5,2]
const musicBiggy = [6.5, 6.5, 6.5, 6.2, 6.5, 8]
const musicPalace = [6.5, 6.5, 6.5, 6.2, 6.5, 8]
const musicSecret = [4,2, 3, 4.5,2, 3,3,  5, 3, 6, 3, 9 , 3, 4, 2, 3,3,  7, 3, 7,3, 7, 3,5,3,4,3]
const map = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9 ,9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3,99, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 99, 3, 3, 3,3, 3, 3,3, 101, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,102, 3, 3,3, 3, 3,3, 3, 100,3, 3, 3,3, 3, 3,101, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 101,3, 3, 3,3, 3, 3,3, 3, 3,101, 3, 3,3, 102, 3,3, 3, 3,3, 3, 3,3, 3, 3,96, 3, 3,3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3,97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 102, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 101, 3,3, 3, 3,3, 3, 101,3, 3, 3,3, 3, 100,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,102, 3, 3,3, 3, 3,3, 3, 102,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 101,3, 3, 3,3, 101, 3, 96, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 100, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3,96, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,102, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 101, 3,3, 3, 102,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 99, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,99, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 97,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 100, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 97, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,96, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 99,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 102, 3,3, 3, 3,102, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 99, 3,3, 101, 3,3, 3, 3,3, 3, 3,999, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 98, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 101,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 98,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,999, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,99, 3, 3,3, 3, 3,3, 3, 3,3, 102, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,999, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 100, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 102, 3,3, 3, 3,99, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 100,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 101, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,99, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 100,3, 3, 3,3, 3, 3,102, 3, 3,3, 3, 3,3, 3, 3,3, 96, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 100, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 101, 3,3, 3, 3,102, 3, 3,3, 3, 3,3, 3, 3,3, 3, 102,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 101, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 100, 3,3, 3, 3,3, 3, 3,99, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 100, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 98, 3, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,100, 3, 3,3, 3, 3,3, 101, 3,3, 3, 3,3, 3, 99,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 98, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 102,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,101, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 98, 97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 99, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,98, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97,3, 3, 3,3, 3, 96,3, 3, 3,3, 3, 3,3, 3, 97,3, 3, 3,3, 101, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 101, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 98, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 96, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,97, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 98, 3, 3, 3, 3, 3, 3, 97, 3, 3, 96, 3, 3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 100, 3,3, 3, 3,3, 102, 3,3, 3, 3,3, 3, 3,3, 3, 3,3, 3, 3,8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16,16, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,16, 16, 16, 16, 16, 16,16, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 12, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 13, 12, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12,12, 13, 12, 12, 13, 12, 12, 12, 12, 13, 12, 12,12, 13, 12, 12, 13, 12, 12, 12, 12, 13, 12, 12,12, 13, 12, 12, 13, 12, 12, 12, 12, 13, 12, 12,12, 13, 12, 12, 13, 12, 12, 12, 12, 13, 12, 12, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
]

let Points = 0
const PointsForCoin = 5000
const HitBarY = 700
const drawingBarsInterval = 1000 / 80
const startingMusicInterval = 500
let musicBox = [musicEnemy, musicMozart, musicBiggy, musicEminem, musicArctic, musicKid, musicPalace, musicSecret]
const barIntervalMultiplier = 100
const SQM_SIZE = 33;
const coins = [
    new Coin(SQM_SIZE*18, SQM_SIZE*3, coin1),
    new Coin(SQM_SIZE*36, SQM_SIZE*18, coin1),
    new Coin(SQM_SIZE*54, SQM_SIZE*3, coin1),
    new Coin(SQM_SIZE*72, SQM_SIZE*16, coin1),
    new Coin(SQM_SIZE*91, SQM_SIZE*5, coin1),    
    new Coin(SQM_SIZE*120, SQM_SIZE*10, coin1),    
    new Coin(SQM_SIZE*145, SQM_SIZE*19, coin1),    

]
const enemies = [
    new Enemy(SQM_SIZE*34, SQM_SIZE*11, enemy1),
    new Enemy(SQM_SIZE*47, SQM_SIZE*14, enemy1),
    new Enemy(SQM_SIZE*27, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*54, SQM_SIZE* 6, enemy1),
    new Enemy(SQM_SIZE*48, SQM_SIZE* 9, enemy1),
    new Enemy(SQM_SIZE*63, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*64, SQM_SIZE* 17, enemy1),
    new Enemy(SQM_SIZE*72, SQM_SIZE* 13, enemy1),
    new Enemy(SQM_SIZE*76, SQM_SIZE* 9, enemy1),
    new Enemy(SQM_SIZE*81, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*82, SQM_SIZE* 16, enemy1),
    new Enemy(SQM_SIZE*87, SQM_SIZE* 12, enemy1),
    new Enemy(SQM_SIZE*91, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*93, SQM_SIZE* 14, enemy1),
    new Enemy(SQM_SIZE*97, SQM_SIZE* 8, enemy1),
    new Enemy(SQM_SIZE*102, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*105, SQM_SIZE* 13, enemy1),
    new Enemy(SQM_SIZE*111, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*113, SQM_SIZE* 11, enemy1),
    new Enemy(SQM_SIZE*119, SQM_SIZE* 5, enemy1),
    new Enemy(SQM_SIZE*124, SQM_SIZE* 16, enemy1),
    new Enemy(SQM_SIZE*126, SQM_SIZE* 14, enemy1)
]
const player = new Player(792, 363, 28, 28, SQM_SIZE, 3, playerImg)
canvas.width = 1205;
canvas.height = 768 + 24;
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#121212";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas2.width = 200;
canvas2.height = 700;
canvas2.style.marginLeft = "15px"
canvas2.style.marginBottom = "45px"
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = "#121215";
ctx2.fillRect(-300, 0, canvas2.width, canvas2.height);
const BarsBackground = new Image();
BarsBackground.src = "https://i.postimg.cc/8kvg1PTX/bar.png"
const greenBar = new Image();
greenBar.src = "https://i.postimg.cc/sDYgn48c/greenbar.png"
ctx2.drawImage(BarsBackground, 0, 0, 200, 700)
ctx2.drawImage(greenBar, 15, 700, 170, 50)

let spawnBarsInterval
let drawBarsInterval
let isGamePaused = false;

function game(){
    if(!isGamePaused){
        ctx.save()

        ctx.translate(-player.x, -canvas.height / 2)
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.clearRect(0, 0, canvas.width * 6, canvas.height)
        drawMap(map, ctx, SQM_SIZE - 1, player);
        for (let iteration = 1; iteration <= player.hp; iteration++) {
            ctx.drawImage(hpImg, player.x + canvas.width / 2 - (75 + iteration * 55), 25, 50, 50)
        }
        player.drawPlayer(ctx);
        if (player.hp <= 0) {
            //gameOver();
            player.deathReason = "Watch the rythm"
        }

        coins.forEach((element, index) =>{
            element.drawCoin(ctx)
        } )

        enemies.forEach((element, index) => {
            element.drawEnemy(ctx)
            if(detectCollision(element, player)){
                player.deathReason = "Killed by Evil Doggy"
                gameOver();
            }
        })
        ctx.fillStyle = "#fffa65"
        ctx.font = "50px Georgia";
        ctx.fillText(`${Points}`, player.x + canvas.width / 2 - 555, 60);
        ctx.restore()``
    }
}
let gameLoop = setInterval(game, 1000 / 10)

let musicIndex = -1
let musicInterval = startingMusicInterval
let currentBars = []
let musicBoxIndex = 0

function spawnbars() {
    ctx2.save();
    musicIndex += 1
    musicInterval = musicBox[musicBoxIndex][musicIndex];
    if (musicInterval != null && !musicFinished) {
        musicInterval = musicInterval * barIntervalMultiplier;
        currentBars.push(new Bar(15, 0, 170, 50))
    } else if (musicFinished) {
        musicBoxIndex = randomSoundtrack
        musicIndex = -1
        musicInterval = startingMusicInterval
        currentBars = []
    }
    clearInterval(spawnBarsInterval);
    spawnBarsInterval = setInterval(spawnbars, musicInterval);
    ctx2.restore()
}

function drawbars() {
    ctx2.save()
    ctx2.fillStyle = "#121212"
    ctx2.fillRect(0,0,canvas2.width,canvas2.height)
    ctx2.drawImage(BarsBackground, 0, 0, 200, 700)
    ctx2.translate(0, -100)
    currentBars.forEach((bar, index) => {
        if (bar.y > 800){
            currentBars.splice(index, 1)
            player.hp -= 1;
            return;
        }
        bar.drawBar(ctx2, canvas2.height)
        bar.move(4)
       
    });
    ctx2.drawImage(greenBar, 15, HitBarY, 170, 50)
    ctx2.restore()
}

function checkColliders(playerX, playerY) {
    if (map[playerX][playerY] === 9 || map[playerX][playerY] === 15 || map[playerX][playerY] === 14 || map[playerX][playerY] === 16|| map[playerX][playerY] === 96|| map[playerX][playerY] === 97|| map[playerX][playerY] === 98|| map[playerX][playerY] === 99 || map[playerX][playerY] === 100 || map[playerX][playerY] === 101 || map[playerX][playerY] === 102) {
        return true;
    }
    return false;
}

function checkLastBar() {
    if (currentBars.length == 0) {
        return
    }
    //Dodac napisy ktore sie pojawiaja w gierce obok hit bara??
    let y = currentBars[0].y
    if (y < HitBarY + 10 && y >HitBarY - 10){
        console.log("perfect")
        Points += 100
    }
    else if (y <HitBarY +30 && y > HitBarY -30){
        console.log("great")
        Points += 75
    }
    else if (y < HitBarY + 50 && y >HitBarY -50){
        console.log("good")
        Points += 50
    }
    else {
        console.log("bad")
        player.hp -= 1;
    }

    currentBars.splice(0, 1)
}

document.addEventListener('keydown', (e) => {
    if(isGamePaused) return
    let playerY = Math.ceil((player.x - SQM_SIZE / 2) / SQM_SIZE)
    let playerX = Math.ceil((player.y - SQM_SIZE / 2) / SQM_SIZE)

    coins.forEach((element, index) => {
        let coinY = Math.ceil((element.x - SQM_SIZE / 2) / SQM_SIZE)
        let coinX = Math.ceil((element.y - SQM_SIZE / 2) / SQM_SIZE)
        if (coinY == playerY && coinX == playerX) {
            Points += PointsForCoin
            coins.splice(index, 1)
        }
    })

    if (e.key === "ArrowUp" || e.key === "w") {
        checkLastBar()
        if (checkColliders(playerX - 1, playerY)) {
            return
        }
      
        player.move("north")
    }
    if (e.key === "ArrowDown" || e.key === "s") {
        checkLastBar()
        if (checkColliders(playerX + 1, playerY)) {
            return
        }
        
        player.move("south")
    }
    if (e.key === "ArrowLeft" || e.key === "a") {
        player.isFacingRight = false;
        checkLastBar()
        if (checkColliders(playerX, playerY - 1)) {
            return
        }
    
        player.move("west")
    }
    if (e.key === "ArrowRight" || e.key === "d") {
        checkLastBar()
        if (checkColliders(playerX, playerY + 1)) {
            return
        }
       
        player.isFacingRight = true;
        player.move("east")
    }

    if (player.isFacingRight) {
        player.img === playerImg ? player.img = playerImg2 : player.img = playerImg
    } else if (!player.isFacingRight) {
        player.img === playerLImg ? player.img = playerL2Img : player.img = playerLImg
    }
    player.underColor === "#F8EFBA" ? player.underColor = "#5f27cd" : player.underColor = "#F8EFBA"
    enemies.forEach((element, index) => {
        element.img === enemy1 ? element.img = enemy2 : element.img = enemy1;
        element.moveEnemy()
    })

    coins.forEach((element, index) => {
        element.img === coin1 ? element.img = coin2 : element.img = coin1;
    })

})

const musicSoundtracks = ["#music1", "#music2", "#music3", "#music4", "#music5", "#music6", "#music7", "#music8"]
const vinylRewind = document.querySelector("#vinyl");
let soundsAlreadyPlayed = [];
// 1 - Wutang ; 2 - Mozart ; 3 - Biggy ; 4 - Eminem ; 5 - Arctic
const startButton = document.querySelector(".startButton")
startButton.addEventListener('click', () => {
    document.querySelector(".vinylRewind").style.display = "block";
    isGamePaused = true;
    vinylRewind.volume = 0.4
    vinylRewind.play()
    document.querySelector("#vinyl").onended = () => {
        playMusic()
        isGamePaused = false;
    }
    //document.querySelector("#music1").play()
    document.querySelector(".notStartedGame").style.display = "none"
    startButton.style.display = "none"
})

let randomSoundtrack
let musicFinished = false
function playMusic() {
    document.querySelector(".vinylRewind").style.display = "none";
    randomSoundtrack = Math.floor(Math.random() * (musicSoundtracks.length - 1))
   if (soundsAlreadyPlayed.includes(randomSoundtrack)) {
        playMusic();
       return;
   }
    musicBoxIndex = randomSoundtrack
    musicFinished = false
    clearInterval(drawBarsInterval);
    clearInterval(spawnBarsInterval);
    spawnBarsInterval = setInterval(spawnbars, musicInterval)
    drawBarsInterval = setInterval(drawbars, drawingBarsInterval)

    soundsAlreadyPlayed.push(randomSoundtrack)
    if (soundsAlreadyPlayed.length == musicSoundtracks.length - 1){
        soundsAlreadyPlayed = []
    }
    console.log(randomSoundtrack)
    document.querySelector(musicSoundtracks[randomSoundtrack]).volume = 0.2 
    document.querySelector(musicSoundtracks[randomSoundtrack]).play()
    document.querySelector(musicSoundtracks[randomSoundtrack]).onended = () => {
        isGamePaused = true;
        document.querySelector(".vinylRewind").style.display = "block";
        musicFinished = true
        vinylRewind.volume = 0.6
        vinylRewind.play()
        vinylRewind.onended = () => {
            playMusic()
            isGamePaused = false;
        }
    }
}

function gameOver() {
    clearInterval(gameLoop)
    clearInterval(drawBarsInterval);
    clearInterval(spawnBarsInterval);
    document.querySelector('.restart').classList.add("restartAnim")
    document.querySelector('.gameOver').style.display = "block"
    document.querySelector('.gameOverScoreSpan').textContent = `${Points}`
    document.querySelector('.gameOverDeathCauseSpan').textContent = `${player.deathReason}`
    //clearInterval(gameLoop)
    console.log("Game Over Screen")
}

export function startGame(){
    gameLoop = setInterval(game, 1000 / 10)
    spawnBarsInterval = setInterval(spawnbars, musicInterval)
    drawBarsInterval = setInterval(drawbars, drawingBarsInterval)
}

export function winTheGame(){
    clearInterval(gameLoop)
    clearInterval(drawBarsInterval);
    clearInterval(spawnBarsInterval);
    document.querySelector('.wonScreen').style.display = "block";
}