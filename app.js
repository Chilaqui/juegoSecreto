//Creamos la variable para poder usar el numero
let numeroSecreto = 0;

//Creacion de la variable de intentos
let intentos = 1;

//creacion de la variable para la listas de los numeros generados 
let listaNumerosSorteads = []

let numeroMaximo = 10;

// Definición de la función que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    // Selecciona el elemento HTML utilizando el selector proporcionado
    let elementoHTML = document.querySelector(elemento);
    // Asigna el texto al contenido interno del elemento
    elementoHTML.innerHTML = texto;
    return;
}

// Función que se ejecuta cuando se hace clic en el botón (actualmente solo muestra una alerta)
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);//usamos parseint para convetir el numero de string a entero

    console.log(typeof(numeroUsuario));//verifiacion de tipo de dato
    console.log(numeroUsuario);//verificando que tipo de dato esta retornando la computadora
    console.log(typeof(numeroSecreto));//verificacion de tipo de dato
    console.log(numeroSecreto);//Imprimimos la variable en consola para ver el valor
    
    console.log(intentos)
    if (numeroUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)

        //Habilita el botton cuando el usuario alla acertado por si quiere colver a jugar
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','Incorrecto, El numero es menor')
        }else{
            asignarTextoElemento('p','Incorrecto, El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Funcion que limpia la caja cada vez que insertas un valor equivocado
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

//Funcion para genrar el numero secreto
function generarNumeroSecreto() {
    //No hace falta crear la variable aquim solo retornamos el valord
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteads);

    // Si ya sortemaos todos los numeros
    if (listaNumerosSorteads.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se soteron todos los numeros posibles')
    }else{
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteads.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        }else{
        listaNumerosSorteads.push(numeroGenerado)
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    // Llamadas a la función para asignar textos a elementos específicos
    asignarTextoElemento('h1', "Juego del numero secreto"); // Asigna el título
    asignarTextoElemento('p',  `Indica el numero del 1 al ${numeroMaximo}`); // Asigna el texto del párrafo
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de números
    // Generar el numero eleatorio
    // Inicializar el número de intentos
    condicionesIniciales()
    // Desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

//Llmamos a la funcion para que pueda empezar el programa
condicionesIniciales()



