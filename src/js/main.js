export const title =
  () => `Ludum Dare 51`

export const canvas = document.createElement('canvas');
canvas.width = 1440;
canvas.height = 800;
const ctx = canvas.getContext('2d');
ctx.fillStyle = "red";
ctx.fillRect(0,0,canvas.width, canvas.height);

