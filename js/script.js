document.getElementById("play").addEventListener("click", (e) => {
    makeCircle(e.clientX, e.clientY);
});
let colors = ["red", "green", "yellow", "orange", "pink", "purple", "skyblue"]
function makeCircle(x, y) {
    let circleRadius = Math.round(Math.random()*17);
    console.log(circleRadius);
    let color = colors[Math.round(Math.random()*7)]
    
}
