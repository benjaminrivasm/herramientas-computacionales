var valor = document.getElementById("pecinco").offsetWidth;
var angle = 0;

window.addEventListener("resize", function () {
    valor = document.getElementById("pecinco").offsetWidth;
});

function setup() {
    createCanvas(valor, valor, WEBGL).parent("#pecinco");
    select("#nombre").html("Benjamín Rivas");
    select("#aprendizaje").html("Bases de Desarrollo Web y Modelado 3D");
}
function draw() {
    background(255, 216, 223);
    orbitControl();

    let mx = mouseX - 50;
    let my = mouseY - 50;

    ambientLight(100);
    pointLight(255, 255, 255, mx, my, 250);
    noStroke();
    fill(130, 90, 150);    
    specularMaterial(255);
    shininess(20);
    metalness(1);

    rotateZ(-angle);
    rotateY(angle);
    rotateX(angle);

    torus(valor / 3, valor / 24);
    torus(valor / 5, valor / 16);
    sphere(valor / 10);

    angle = angle + 0.02;
}

function windowResized() {
    resizeCanvas(valor, valor);
}