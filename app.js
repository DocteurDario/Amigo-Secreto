// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];
let amigoSecreto = 0;
let posicionesDelArray = 0;
let bandera= false;


function asignarTextoElemento(elemeto, texto){
    let elementoHTML = document.querySelector(elemeto);
    elementoHTML.innerHTML = texto;
    return;
}



function agregarAmigo(){
    let nombreAmigoSecreto = document.getElementById('amigo').value;
    if(bandera){
        reiniciciarJuego();
    }
    if( listaAmigosSecretos.includes(nombreAmigoSecreto) ) {
        alert("El nombre de tu amigo ya esta en esta lista!... ")
    
    }else if(nombreAmigoSecreto!==""){
        posicionesDelArray = listaAmigosSecretos.length;
        console.log(posicionesDelArray + 1);
        listaAmigosSecretos.push(nombreAmigoSecreto);
        //console.log(parseInt(listaAmigosSecretos.length))
        let posicionElemento = parseInt(listaAmigosSecretos.length);
        console.log(nombreAmigoSecreto);
        limpiarCaja();
        mostrarListaAmigos();
    }
    else {
        alert("Tiene que agregar un nomnbre!!...");
    }
    
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){

    let cantidadDeParticipantes = listaAmigosSecretos.length;
    if(cantidadDeParticipantes>1)
    {
        console.log('cantidad de participantes: '+  cantidadDeParticipantes);
        let ganadorSorteo = Math.floor(Math.random()*cantidadDeParticipantes);
        amigoSecreto = ganadorSorteo;
        console.log('ganador del sorteo : ' + (ganadorSorteo + 1));
        console.log('nombre del ganador '+listaAmigosSecretos[ganadorSorteo]);
        mostrarGanador();
        bandera=true;
    }else{
        alert("Debe de agregar mas de un amigo a la lista!..");

    }

    
    
    

}


function mostrarListaAmigos(){
    let resultadoElement = document.getElementById('listaAmigos');
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = `Se agrego con exito :  ${listaAmigosSecretos[posicionesDelArray]} `;
    resultadoElement.appendChild(nuevoItem);
}

function mostrarGanador() {
    let resultadoElement = document.getElementById('resultado');
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = `El ganador es ${listaAmigosSecretos[amigoSecreto]}, Felicidades!`;
    resultadoElement.appendChild(nuevoItem);
    bloquearBotonAgregar();
    document.getElementById('btnReiniciar').style.display = 'inline';


}

function bloquearBotonAgregar() {
    document.getElementById('agregar').disabled = true;
    document.getElementById('sortear').classList.add('hidden');
    document.getElementById('btnReiniciar').style.display = 'inline';
    asignarTextoElemento('#reiniciarElJuego', "Para continuar debe presionar el boton: Reiniciar!..");
}

function reiniciarJuego() {
    listaAmigosSecretos = [];
    amigoSecreto = 0;
    posicionesDelArray = 0;
    bandera = false;

    document.getElementById('agregar').disabled = false;
    document.getElementById('sortear').classList.remove('hidden');
    document.getElementById('btnReiniciar').style.display = 'none';

    asignarTextoElemento('#reiniciarElJuego', "");

    // Recargar la página
    location.reload();
}

