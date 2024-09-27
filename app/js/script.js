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
let numeroAleatorio = 0;
let paisElegido = [];
const botonAdd = document.getElementById("add-country");
const botonDoblar = document.getElementById("double");
botonAdd.onclick = addPais;
botonDoblar.onclick = doblarDinero;



function addPais(){
    sacarPais();
    let displayPaises = document.getElementById("DisplayPaises");
    displayPaises.setAttribute("class", "dis");
    let paisadded = document.createElement("h4");
    let pibadded = document.createElement("h4");
    paisadded.textContent = paisElegido.nombre;
    pibadded.textContent = paisElegido.pib;
    displayPaises.append(paisadded,pibadded);
    
}


function sacarPais(){
    numeroAleatorio = Math.trunc(Math.random()*paisesPIB.length);
    paisElegido.push(paisesPIB[numeroAleatorio]);
    console.log(paisElegido);
    paisesPIB.splice(numeroAleatorio,1);
}

function doblarDinero(){
    console.log("estoy en doblar dinero");
    for(let indice = 0; indice < paisElegido.length; indice++){
        console.log(paisElegido[indice].pib);
        paisElegido[indice].pib = paisElegido[indice].pib * 2;
        console.log(paisElegido[indice].pib);
    }
    
    let mostrarPib = document.createElement("h4");
    let contenedor = document.getElementsByClassName("dis");
    mostrarPib.textContent = paisElegido.pib;
    //contenedor.append(mostrarPib);
}