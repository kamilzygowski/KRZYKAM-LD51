import { drawMap, hpImg, playerImg, playerImg2, playerL2Img, playerLImg } from "./map.js";
import { Player } from "./player";
import { Bar } from "./bar";

export const title =
    () => `Ludum Dare 51 - KRZYKAM`

export const canvas = document.createElement('canvas');
export const canvas2 = document.createElement('canvas');
const musicMozart = [6, 3, 5, 2, 2, 2, 2, 2, 9, 7, 3, 6, 2, 2, 2, 2, 2, 8, 5, 8, 3, 3, 2.1, 3, 6, 3, 3, 2.1, 2.1, 6, 3, 3, 2.1, 3, 7, 4, 4, 4, 4, 4, 4, 4, 4]
const musicArctic = [6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 6.5, 2.5, 3, 20, 2.5,3,2.5,15, 2.5, 12, 2.5,3,13, 2.5,3.2,3, 3]
const musicWutang = [6,6,6,6,6,6,6,6,6,6,6,6,6]
const musicEminem = [6,6,6,6,6,6,6,6,6,6,6,6,6]
const musicBiggy = [6.5, 6.5, 6.5, 6.2, 6.5, 8]
const map = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 12, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 13, 12, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 12, 13, 12, 12, 12, 12, 12, 12, 12, 11, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
]

let Points = 0
const HitBarY = 700
const drawingBarsInterval = 1000 / 80
const startingMusicInterval = 500
let musicBox = [musicWutang, musicMozart, musicBiggy, musicEminem, musicArctic]
const barIntervalMultiplier = 100
const SQM_SIZE = 33;
const player = new Player(792, 363, 28, 28, SQM_SIZE, 3, playerImg)
canvas.width = 1403;
canvas.height = 768 + 24;
const ctx = canvas.getContext('2d');
ctx.fillStyle = "#121212";
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas2.width = 200;
canvas2.height = 700;
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = "#121215";
ctx2.fillRect(-300, 0, canvas2.width, canvas2.height);

let spawnBarsInterval
let drawBarsInterval

export const gameLoop = setInterval(() => {
    ctx.save()

    ctx.translate(-player.x, -canvas.height / 2)
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.clearRect(0, 0, canvas.width * 3, canvas.height)
    drawMap(map, ctx, SQM_SIZE - 1, player);
    for (let iteration = 1; iteration <= player.hp; iteration++) {
        ctx.drawImage(hpImg, player.x + canvas.width / 2 - (75 + iteration * 55), 25, 50, 50)
    }

    ctx.font = "50px Georgia";
    ctx.fillText(`${Points}`, player.x + canvas.width / 2 - 120, 140);

    player.drawPlayer(ctx);
    if (player.hp <= 0) {
        gameOver();
    }
    ctx.restore()
    //console.log(Math.floor((player.x - SQM_SIZE/2)/SQM_SIZE))
    //console.log(Math.floor((player.y - SQM_SIZE/2)/SQM_SIZE))
}, 1000 / 10)

let musicIndex = -1
let musicInterval = startingMusicInterval
let currentBars = []
let musicBoxIndex = 0

function spawnbars() {
    musicIndex += 1
    musicInterval = musicBox[musicBoxIndex][musicIndex];
    if (musicInterval != null && !musicFinished) {
        musicInterval = musicInterval * barIntervalMultiplier;
        currentBars.push(new Bar(0, 0, 200, 50))
    } else if (musicFinished) {
        musicBoxIndex = randomSoundtrack
        musicIndex = -1
        musicInterval = startingMusicInterval
        currentBars = []
    }
    clearInterval(spawnBarsInterval);
    spawnBarsInterval = setInterval(spawnbars, musicInterval);
}

function drawbars() {
    ctx2.save()
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.translate(0, -100)
    ctx2.beginPath();
    ctx2.fillStyle = "green"
    ctx2.rect(0, HitBarY, 200, 50)
    ctx2.fill()
    currentBars.forEach((bar, index) => {
        if (bar.y > 800){
            currentBars.splice(index, 1)
            player.hp -= 1;
            return;
        }
        bar.drawBar(ctx2, canvas2.height)
        bar.move(4)
       
    });
    ctx2.restore()
}

// Old moving
/*let mapButtons = {};
=======
     
    ctx2.restore()
}
   
// Moving
let mapButtons = {};
>>>>>>> Stashed changes
onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    mapButtons[e.keyCode] = e.type == 'keydown';
    // NORTH
    if (mapButtons[87] || mapButtons[38]) {
        player.move('north')
    }
    // WEST
    if (mapButtons[65] || mapButtons[37]) {
        player.move('west')
    }
    // SOUTH
    if (mapButtons[83] || mapButtons[40]) {
        player.move('south')
    }
    //EAST
    if (mapButtons[68] || mapButtons[39]) {
        player.move('east')
    }
    playerDidMove = true;
}*/
function checkColliders(playerX, playerY) {
    if (map[playerX][playerY] === 9 || map[playerX][playerY] === 15 || map[playerX][playerY] === 14 || map[playerX][playerY] === 16) {
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
    let playerY = Math.ceil((player.x - SQM_SIZE / 2) / SQM_SIZE)
    let playerX = Math.ceil((player.y - SQM_SIZE / 2) / SQM_SIZE)

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
})

const musicSoundtracks = ["#music1", "#music2", "#music3", "#music4", "#music5"]
const vinylRewind = document.querySelector("#vinyl");
const soundsAlreadyPlayed = [];
// 1 - Wutang ; 2 - Mozart ; 3 - Biggy ; 4 - Eminem ; 5 - Arctic
const startButton = document.querySelector(".startButton")
startButton.addEventListener('click', () => {
    document.querySelector(".vinylRewind").style.display = "block";
    vinylRewind.play()
    document.querySelector("#vinyl").onended = () => {
        playMusic()
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
    console.log(randomSoundtrack)
    document.querySelector(musicSoundtracks[randomSoundtrack]).play()
    document.querySelector(musicSoundtracks[randomSoundtrack]).onended = () => {
        document.querySelector(".vinylRewind").style.display = "block";
        musicFinished = true
        vinylRewind.play()
        vinylRewind.onended = () => playMusic()
    }
}

function gameOver() {
    //clearInterval(gameLoop)
}