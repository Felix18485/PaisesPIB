let paisesPIB = [
    { nombre: "Alemania", pib: 3860 },
    { nombre: "Japón", pib: 4870 },
    { nombre: "Brasil", pib: 2050 },
    { nombre: "Canadá", pib: 1800 },
    { nombre: "México", pib: 1220 },
    { nombre: "China", pib: 14140 },
    { nombre: "India", pib: 2870 },
    { nombre: "Francia", pib: 2770 },
    { nombre: "Reino Unido", pib: 2820 },
    { nombre: "Estados Unidos", pib: 21440 }
]
let paisElegido = [];
const botonAdd = document.getElementById("add-country");
const botonDoblar = document.getElementById("double");
const botonMill = document.getElementById("show-millionaires");
const botonOrd = document.getElementById("sort");
const botonTotal = document.getElementById("calculate-wealth");
botonAdd.onclick = addPais;
botonDoblar.onclick = doblarDinero;
botonMill.onclick = sacarMillonarios;
botonOrd.onclick = pibordenado;
botonTotal.onclick = calcularTotal;


function addPais(){
    sacarPais();
    let displayPaises = document.getElementById("DisplayPaises");
    let paisadded = document.createElement("h4");
    let pibadded = document.createElement("h4");
    let salto = document.createElement("br");
    paisadded.setAttribute("id", "paisadded");
    pibadded.setAttribute("id", "pibadded");
    paisadded.textContent = paisElegido[paisElegido.length-1].nombre;
    pibadded.textContent = paisElegido[paisElegido.length-1].pib;
    displayPaises.append(paisadded,pibadded);
}


function sacarPais(){
    let numeroAleatorio = 0;
    numeroAleatorio = Math.trunc(Math.random()*paisesPIB.length);
    paisElegido.push(paisesPIB[numeroAleatorio]);
    paisesPIB.splice(numeroAleatorio,1);
}

function doblarDinero(){
    for(let indice = 0; indice < paisElegido.length; indice++){
        console.log(paisElegido[indice].pib);
        paisElegido[indice].pib = paisElegido[indice].pib * 2;
        console.log(paisElegido[indice].pib);
    }
    
    let mostrarPib = document.createElement("h4");
    let contenedor = document.getElementById("DisplayPaises")
    mostrarPib.textContent = paisElegido[paisElegido.length-1].pib;
    contenedor.append(mostrarPib);
}

function mostrarMillonarios(mayor){
    return mayor.pib > 10000;
}

function sacarMillonarios(){
    let filtrados = [];
    let displayPaises = document.getElementById("DisplayPaises");
    filtrados = paisesPIB.filter(mostrarMillonarios);
    filtrados.forEach(elements => {
        let millonariopib = document.createElement("h4");
        millonariopib.textContent = elements.nombre;
        displayPaises.append(millonariopib);
    });
}

function pibordenado(){
    let displayPaises = document.getElementById("DisplayPaises");
    paisElegido.sort((pais1, pais2) => pais1.pib - pais2.pib);
    paisElegido.forEach(elements => {
        let paisadded = document.getElementById("paisadded");
        let pibadded = document.getElementById("pibadded");
        paisadded.textContent = elements.nombre;
        pibadded.textContent = elements.pib;
        displayPaises.append(paisadded,pibadded);
    })
}

function calcularTotal(){
    let calculoTotal = 0;
    for(let indice = 0; indice<paisElegido.length; indice++){
        calculoTotal += paisElegido[indice].pib
        console.log(calcularTotal);
    }
    let displayPaises = document.getElementById("DisplayPaises");
    let total = document.createElement("h4");
    total.textContent = calculoTotal;
    displayPaises.append(total);
}