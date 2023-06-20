let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const speed = 4;
let moveSpeed = speed;
let radius = 70;
let position = 50;

function moveCircle(){
    if(position+radius >= width){
        moveSpeed = -speed;
    }else if(position-radius <=0){
        moveSpeed = speed;
    }
    position = position + moveSpeed;
}

function drawCircle(){
    context.clearRect(0,0, width, height);
    context.fillStyle = '#00ff00';
    context.beginPath();
    context.arc(position, 100, radius, 0, 2 * Math.PI, false);
    context.fill();
}

function animate(){
    moveCircle();
    drawCircle();
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);