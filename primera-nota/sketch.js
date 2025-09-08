const trabajos = [
    {
        photo: "img/01.webp",
        title: "Chaqueta-Abrigo Asimétrica",
        description: "Trabajo Final Proyecto V</br>Prof. Pablo Nuñez",
    },
    {
        photo: "img/02.webp",
        title: "Trapalanda",
        description: "Trabajo Final Proyecto II</br>Prof. René Perea",
    },
    {
        photo: "img/03.webp",
        title: "Microorganismo Marino",
        description: "Trabajo Final Procesos y Prototipos II</br>Prof. Astrid Osorio",
    },
    {
        photo: "img/04.webp",
        title: "Espacio Unipersonal",
        description: "Trabajo Ergonomía y Factores Humanos</br>Prof. Claudio Ribalta",
    },
    {
        photo: "img/05.webp",
        title: "Atypical Garden",
        description: "Trabajo Final Proyecto III</br>Prof. Christian Basáez",
    },
    {
        photo: "img/06.webp",
        title: "Rediseño Portada",
        description: "Trabajo Proyecto I</br>Prof. René Perea",
    },
    {
        photo: "img/07.webp",
        title: "Reinterpretación Vectorial",
        description: "Trabajo Configuración Visual II</br>Prof. Juan Calderón",
    },
    {
        photo: "img/08.webp",
        title: "Pictograma Quiditch",
        description: "Trabajo Configuración Visual II</br>Prof. Juan Calderón",
    },
];




const datos = [
    {
        id: 1,
        foto: "https://ucampus.uchile.cl/d/r/usuario/99/991a2c1f191ccfcfc0fe2525db45303e/perfil/7d0ca9e947225ce2ad0d5e5f63afa1ee.jpg",
        cuenta: "https://kupaa-0.github.io/primera-nota",
        nombre: "Claudio Abarca",
        esperado: "espero aprender programación y mejor uso de web.",
    },
    {
        id: 2,
        foto: "https://ucampus.uchile.cl/d/r/usuario/69/69e186cb288cab31f6369453aee323e3/perfil/2c5097a7ff87246d2a1994d4055f6214.jpg",
        cuenta: "https://anaisvalentina.github.io/primera-nota",
        nombre: "Anaís Aedo",
        esperado: "espero aprender a sacar el máximo provecho a los programas de edición.",
    },
    {
        id: 3,
        foto: "https://ucampus.uchile.cl/d/r/usuario/d1/d161c3d0286d83eb274b07b319f26312/perfil/408a611ce91b152ebbd4e285db226448.jpg",
        cuenta: "https://carolmabel.github.io/primera-nota",
        nombre: "Carol Álvarez",
        esperado: "espero aprender nuevos métodos de programación para aplicar al diseño.",
    },
    {
        id: 4,
        foto: "https://ucampus.uchile.cl/d/r/usuario/b2/b2770b9f14f71ac3a0df4e203c295f76/perfil/4a410ff259aa296c4bdb6c873513fed6.jpg",
        cuenta: "https://martina-af.github.io/primera-nota",
        nombre: "Martina Araos",
        esperado: "espero aprender muchas cosas.",
    },
    {
        id: 5,
        foto: "https://ucampus.uchile.cl/d/r/usuario/55/550d4508e49024986a14885b35cca65f/perfil/7e9d39fc831d87cb8ff27eac610240c8.jpg",
        cuenta: "https://valentinaavila21.github.io/primera-nota",
        nombre: "Valentina Ávila",
        esperado: "espero aprender modelado en 3D.",
    },
    {
        id: 6,
        foto: "https://static.u-cursos.cl/r/usuario/2b/2bdd5b2584a1f6b86a88b99ad1b17249/datos_usuario/av_65ea31c746c70.jpg",
        cuenta: "https://camila-calquin.github.io/primera-nota",
        nombre: "Camila Calquín",
        esperado: "espero aprender lo más posible de progamación y nivelar las lagunas de aprendizajes que deberiamos tener.",
    },
    {
        id: 7,
        foto: "https://ucampus.uchile.cl/d/r/usuario/12/121316a7c853c2ba33a02fa8c60f3b90/perfil/38043eca356c4c7a780186c2c9994b18.jpg",
        cuenta: "https://javviercc.github.io/primera-nota",
        nombre: "Javier Castillo",
        esperado: "espero aprender a manejar los programas relevantes para la carrera, como Illustrator y Photoshop.",
    },
    {
        id: 8,
        foto: "https://ucampus.uchile.cl/d/r/usuario/02/02cfa8d711a9e0ac3ee2b1caa7eac53c/perfil/90b75dec51d9ee41437c3f606a02aaef.jpg",
        cuenta: "https://gilicvnz.github.io/primera-nota",
        nombre: "Angelina Caviedes",
        esperado: "espero aprender más sobre herramientas computacionales, como illustrator, que me ayuden a potenciar mis proyectos.",
    },
    {
        id: 9,
        foto: "https://ucampus.uchile.cl/d/r/usuario/ab/ab3608b141edd9f875e1f4f2d50d3b5d/perfil/11545fb89728e5e10eb439ab403220f0.jpg",
        cuenta: "https://milladincea.github.io/primera-nota",
        nombre: "Millaray Dinamarca",
        esperado: "espero aprender a programar cosas bonitas.",
    },
    {
        id: 10,
        foto: "https://ucampus.uchile.cl/d/r/usuario/fb/fb433567d740288c3926bdcc22c26cfb/perfil/f77ee9bdd5b1e3f323ac47234a279f37.jpg",
        cuenta: "https://catadunsmore.github.io/primera-nota",
        nombre: "Catalyna Dunsmore",
        esperado: "espero aprender Herramientas 3D.",
    },
    {
        id: 11,
        foto: "https://ucampus.uchile.cl/d/r/usuario/59/59446b3eb7deae1df17575881d3e0c87/perfil/148097cbbeda7b894ed91f7e4c1e92bd.jpg",
        cuenta: "https://marfghid.github.io/primera-nota",
        nombre: "Fernanda García",
        esperado: "espero aprender a manejar herramientas necesarias de diseño (indesign y blender por el amor de dios).",
    },
    {
        id: 12,
        foto: "https://ucampus.uchile.cl/d/r/usuario/75/7569f976636180f4748d9f2128cde895/perfil/7679d0271d11ca67549439ae717de78d.jpg",
        cuenta: "https://antonialarah.github.io/primera-nota",
        nombre: "Antonia Lara",
        esperado: "espero aprender mas de illustrator y photoshop :3",
    },
    {
        id: 13,
        foto: "https://ucampus.uchile.cl/d/r/usuario/03/0301c40d0e1a3db5fe1afe52abdc13f7/perfil/19b51bcccfc5bee67f278d4f9a9183d3.jpg",
        cuenta: "https://antoniamardones.github.io/primera-nota",
        nombre: "Antonia Mardones",
        esperado: "espero aprender la mayoría de los diferentes programas que existen y ojala sin estresarme tanto.",
    },
    {
        id: 14,
        foto: "https://ucampus.uchile.cl/d/r/usuario/01/010a7de720e6388d7735e1406111ae6c/perfil/0aa77bd7f9e469caab520e9e5a9e72d0.jpg",
        cuenta: "https://aylineoff.github.io/primera-nota",
        nombre: "Ayline Marín",
        esperado: "espero aprender sobre InDesign, Ilustrator y desafiarme un poco en relacion a lo 3D.",
    },
    {
        id: 15,
        foto: "https://ucampus.uchile.cl/d/r/usuario/4f/4f2bb8d0bbb388f286f7c23a2d0bbf96/perfil/668aeb28b45c767b3664f43d031a61a0.jpg",
        cuenta: "https://vicentemedinat.github.io/primera-nota",
        nombre: "Vicente Medina",
        esperado: "espero aprender a hacer paginas web y aprender mas de Photoshop e Illustrator :P",
    },
    {
        id: 16,
        foto: "https://ucampus.uchile.cl/d/r/usuario/7f/7f6882906935a68d138004bd71f77e09/perfil/ee90181af25ebc05ab71c6f3d835a4f4.jpg",
        cuenta: "https://shootingstarcony.github.io/primera-nota",
        nombre: "Constanza Ortega",
        esperado: "espero entender mejor la programación.",
    },
    {
        id: 17,
        foto: "https://ucampus.uchile.cl/d/r/usuario/da/da05daf7147712d6233fe40cfc6a017f/perfil/3e7345da58a119c93bd44551b7b30506.jpg",
        cuenta: "https://evorakie.github.io/primera-nota",
        nombre: "Sayen Padilla",
        esperado: "espero aprender a manejar distintos programas!!!",
    },
    {
        id: 18,
        foto: "https://ucampus.uchile.cl/d/r/usuario/af/af2c63c49d3d9f1fb2966a715c4529c7/perfil/a202b0e4a1cef4ff0e9c12cfd631d5c0.jpg",
        cuenta: "https://sofiaparralunauch.github.com/primera-nota",
        nombre: "Sofia Parra",
        esperado: "espero aprender programas nuevos.",
    },
    {
        id: 19,
        foto: "https://ucampus.uchile.cl/d/r/usuario/60/60c3aebd2c1aa5d76e71a1aa964a3294/perfil/aca11ba81e9534085b7c4a2a5bbf2f75.jpg",
        cuenta: "https://catsgugu.github.io/primera-nota",
        nombre: "Giulia Pepe",
        esperado: "espero aprender Nueva materia para desafiarme y crear nuevas cosas.",
    },
    {
        id: 20,
        foto: "https://ucampus.uchile.cl/d/r/usuario/d4/d4a3b68251cdaeedc8ef9c7c8e529c10/perfil/c7c954009d62454f40da6df8dd0e86ed.jpg",
        cuenta: "https://lenapereoso.github.io/primera-nota",
        nombre: "Renata Pereira",
        esperado: "espero aprender cosas nuevas",
    },
    {
        id: 21,
        foto: "https://ucampus.uchile.cl/d/r/usuario/40/4080bf7ee9e6f466c65db6b4f30a9b84/perfil/68cb80b12f84cd93d091c0209a161140.jpg",
        cuenta: "https://bastich03.github.io/primera-nota",
        nombre: "Bastián Petric",
        esperado: "espero aprender sobre softwares digitales.",
    },
    {
        id: 22,
        foto: "https://ucampus.uchile.cl/d/r/usuario/7e/7e455daee7dd10201682aea3e34f88f2/perfil/f441826da4c92b784654c92e93cf231f.jpg",
        cuenta: "https://franciscopinoauch.github.io/primera-nota",
        nombre: "Francisco Pino",
        esperado: "espero aprender a manejar herramientas computacionales para poder crear paginas web en html y javascript.",
    },
    {
        id: 23,
        foto: "https://ucampus.uchile.cl/d/r/usuario/a5/a54de1b5b41bdeb3d7e79edfe3b49149/perfil/6c8f0915892f2c540f3f67be59ef40af.jpg",
        cuenta: "https://benjaminrivasm.github.io/primera-nota",
        nombre: "Benjamín Rivas",
        esperado: "espero aprender Bases de Desarrollo Web y Modelado 3D.",
    },
    {
        id: 24,
        foto: "https://ucampus.uchile.cl/d/r/usuario/92/92a862945aa492ef4625d338a940ccb8/perfil/a11c7a4cb19a84fc1da7974d3ed254b0.jpg",
        cuenta: "https://antoniasolar.github.io/primera-nota",
        nombre: "Antonia Solar",
        esperado: "espero aprender y ser feliz.",
    },
    {
        id: 25,
        foto: "https://ucampus.uchile.cl/d/r/usuario/df/df589b97234c2615e28e3edf479529e4/perfil/59e7f414895270f123eedb424e5c6365.jpg",
        cuenta: "https://alanissq.github.io/primera-nota",
        nombre: "Alanis Soto",
        esperado: "espero aprender codigos para poder usarlos en creaciones en futuros proyectos.",
    },
    {
        id: 26,
        foto: "https://ucampus.uchile.cl/d/r/usuario/1f/1f2591f6c8216de20df592c4467c4f40/perfil/2daf0b9215d782859fb4bb2c655dcc2a.jpg",
        cuenta: "https://ronnistp.github.io/primera-nota",
        nombre: "Veronica Soto",
        esperado: "espero aprender a manejar otro tipo de herramientas digitales.",
    },
    {
        id: 27,
        foto: "https://ucampus.uchile.cl/d/r/usuario/7a/7a339fe48aa3bd2fcee12a945bd6e8a4/perfil/32f89ecf96a8d4a0025fdecb105fb73c.jpg",
        cuenta: "https://valentinatroncoso.github.io/primera-nota",
        nombre: "Valentina Troncoso",
        esperado: "espero aprender a editar videos en adobe effects.",
    },
    {
        id: 28,
        foto: "https://ucampus.uchile.cl/d/r/usuario/f3/f3010585248916cc90e7dfd21f9183a3/perfil/c84d5d312c2b487c383303c5112f6243.jpg",
        cuenta: "https://martinaurzua.github.io/primera-nota",
        nombre: "Martina Urzúa",
        esperado: "espero aprender a programar y explorar nuevas formas de expresión visual para proyectos digitales.",
    },
    {
        id: 29,
        foto: "https://ucampus.uchile.cl/d/r/usuario/0c/0cc1383f745b3664019554312cfda2a1/perfil/4e1d63de2963fd529c7e61e3c39e18f8.jpg",
        cuenta: "https://dv29ast.github.io/primera-nota",
        nombre: "Diego Vera",
        esperado: "espero aprender por lo menos un poco de modelaje 3D.",
    },
];


var yo;
var otrxs = [];


datos.forEach((x) => {
    if (x.nombre == "Benjamín Rivas") {
        yo = x;
    } else {
        otrxs.push(x);
    }
});

console.log(yo);

console.log(otrxs);


var valor = document.getElementById("ucursito").offsetWidth;

window.addEventListener("resize", function () {
    valor = document.getElementById("ucursito").offsetWidth;
});

function setup() {
    createCanvas(valor, valor, WEBGL).parent("#ucursito");
    select("h1 > a").html(yo.nombre);
    select("#aprendizaje").html(yo.esperado);
    select("#cuantos").html(otrxs.length);
    //Lo que sigue es JavaScript a secas
    otrxs.forEach((x)=>{
        document.querySelector("aside").innerHTML += `<div class="estudiante"><a href="${x.cuenta}" title="${x.esperado}"><img src="${x.foto}" alt="Foto de ${x.nombre}"></a></div>`;
    });
    document.querySelector("aside").innerHTML += `<hr />`;
    trabajos.forEach((x)=>{
        document.querySelector("#portafolio").innerHTML += `<div><img src="${x.photo}"><h3>${x.title}</h3><p>${x.description}</p></div>`;
    });
    document.querySelector("#portafolio").innerHTML += `<hr />`;

    document.querySelector("#autoria").innerHTML = yo.nombre;
    //Ahora vuelvo al p5.js
    noStroke();
}

function draw() {
    background(255);
    orbitControl();
    lights();
    specularMaterial(100);
    shininess(200);

    /*  
        Lo que sigue es U-Cursito, 
        basado en el trabajo de Benjamín Rivas
    */

    //la copa del sombrero
    push();
    fill(200, 0, 0);
    translate(0, -valor/3.6, 0);
    cylinder(valor / 6.1, valor / 10);
    pop();

    //el ala del sombrero
    push();
    fill(200, 0, 0);
    translate(0, -valor/6, 0);
    cylinder(valor / 4, valor / 20);
    pop();
  
    //la cinta del sombrero
    push();
    fill(255, 0, 0);
    translate(0, -valor/5, 0);
    cylinder(valor / 6, valor / 50);
    pop();

    push();
    fill(255, 255, 255);
    translate(0, -valor/4.6, 0);
    cylinder(valor / 6.01, valor / 50);
    pop();
  
    push();
    fill(0, 0, 255);
    translate(0, -valor/4.2, 0);
    cylinder(valor / 6.02, valor / 50);
    pop();

    //la cabeza de U-Cursito
    push();
    fill(231, 201, 174);
    sphere(valor / 4);
    pop();

    //una mejilla
    push();
    fill(241, 169, 236);
    translate(-valor / 9, valor / 15, valor / 5.5);
    sphere(valor / 20);
    pop();
  
    //otra mejilla
    push();
    fill(241, 169, 236);
    translate(valor / 9, valor / 15, valor / 5.5);
    sphere(valor / 20);
    pop();
  
    //el marco de un lente
    push();
    fill(0);
    translate(valor / 9, -valor / 30, valor / 4);
    torus(valor / 12, valor / 80);
    pop();

    //el otro marco
    push();
    fill(0);
    translate(-valor / 9, -valor / 30, valor / 4);
    torus(valor / 12, valor / 80);
    pop();
  
    //la unión de los marcos
    push();
    fill(0);
    translate(0, -valor / 30, valor / 4);
    angleMode(DEGREES);
    rotate(90);
    cylinder(valor / 60, valor / 20);
    pop();
  
    //un lente
    push();
    fill(255,155);
    translate(valor / 9, -valor / 30, valor / 4);
    rotate(90, [1,0,0]);
    cylinder(valor / 12, valor / 80);
    pop();
  
    //otro lente
    push();
    fill(255,155);
    translate(-valor / 9, -valor / 30, valor / 4);
    rotate(90, [1,0,0]);
    cylinder(valor / 12, valor / 80);
    pop();

    //un ojo
    push();
    fill(0);
    translate(valor / 9, -valor / 30, valor / 3.9);
    rotate(90, [1,0,0]);
    cylinder(valor / 40, valor / 80);
    pop();

    //otro ojo
    push();
    fill(0);
    translate(-valor / 9, -valor / 30, valor / 3.9);
    rotate(90, [1,0,0]);
    cylinder(valor / 40, valor / 80);
    pop();
}

function windowResized() {
    resizeCanvas(valor, valor);
}
