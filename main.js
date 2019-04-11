// let centerX = 100;
// while (centerX <= window.innerWidth) {
//     centerX += 30;
//     draw_circle(centerX, 100);
//     setTimeout(draw_circle, 500);
// }
let centerX = 100;

function start() {
    centerX += 30;
    draw_circle(centerX, 100);
    setTimeout(start, 500);
}
start();