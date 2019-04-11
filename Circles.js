function Circles (centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
}

function get_random_number (varyRange) {
    return Math.floor(Math.random() * varyRange);
}

function get_random_color () {
    var red = get_random_number(255);
    var green = get_random_number(255);
    var blue = get_random_number(255);
    return "rgb(" + red + "," + green + "," + blue + ")";
}
// function draw_circle () {
//     var pen = document.getElementById("canvas").getContext("2d");
//     var radius = get_random_number(100);
//     var color = get_random_color();
//     var centerX = get_random_number(window.innerWidth);
//     var centerY = get_random_number(window.innerHeight);
//     var circle = new Circles (centerX, centerY, radius);
//     pen.beginPath();
//     pen.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI);
//     pen.fillStyle = color;
//     pen.fill();
// }
function draw_circle (centerX, centerY) {
    var pen = document.getElementById("canvas").getContext("2d");
    var radius = get_random_number(100);
    var color = get_random_color();
    var circle = new Circles (centerX, centerY, radius);
    pen.beginPath();
    pen.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI);
    pen.fillStyle = color;
    pen.fill();
}
