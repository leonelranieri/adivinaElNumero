// Generar un número aleatorio entre 1 y 100
let numeroAzar1 = Math.floor(Math.random() * 100) + 1;
let numeroAzar2 = Math.floor(Math.random() * 500) + 1;
let numeroAzar3 = Math.floor(Math.random() * 1000) + 1;
let numeroAzar4 = Math.floor(Math.random() * 20) - 10;

// Obtener los elementos del DOM
let numeroEntrada1 = document.getElementById('numeroEntrada1');
let numeroEntrada2 = document.getElementById('numeroEntrada2');
let numeroEntrada3 = document.getElementById('numeroEntrada3');
let numeroEntrada4 = document.getElementById('numeroEntrada4');
let mensaje1 = document.getElementById('mensaje1');
let mensaje2 = document.getElementById('mensaje2');
let mensaje3 = document.getElementById('mensaje3');
let mensaje4 = document.getElementById('mensaje4');
let intento1 = document.getElementById('intento1');
let intento2= document.getElementById('intento2');
let intento3 = document.getElementById('intento3');
let intento4 = document.getElementById('intento4');
let intentos1 = 0;
let intentos2 = 0;
let intentos3 = 0;
let intentos4 = 0;

// Suma la cantidad de intentos e informa en pantalla
function sumar_e_informar(intento, intentos) {
    intentos ++;
    intento.textContent = `${intentos}`;
    return intentos;
}

// Mensaje de número inválido
function numeroInvalido1(mensaje){
    mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
    mensaje.style.color = 'purple';
}

function numeroInvalido2(mensaje){
    mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 500.';
    mensaje.style.color = 'purple';
}

function numeroInvalido3(mensaje){
    mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 1000.';
    mensaje.style.color = 'purple';
}

function numeroInvalido4(mensaje){
    mensaje.textContent = 'Por favor, introduce un número válido -1 y -100 y entre 1 y 100.';
    mensaje.style.color = 'purple';
}

// Mensaje y tratamiento para jugador ganador
function ganador(mensaje, numeroEntrada, intentos) {
    mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
    intentos = 0;
}

// Mensaje si el número es mayor
function mensajeSiEsMayor(mensaje) {
    mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
    mensaje.style.color = 'red';
}

// Mensaje si el número es menor
function mensajeSiEsMenor(mensaje) {
    mensaje.textContent = 'El número es menor. Intenta de nuevo.';
    mensaje.style.color = 'red';
}

// Función para comprobar el número ingresado por el usuario
function chequearResultadoFacil() {
    intentos1 = sumar_e_informar(intento1, intentos1); 

    let numeroIngresado = parseInt(numeroEntrada1.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        numeroInvalido1(mensaje1);
        return;
    }

    if (numeroIngresado === numeroAzar1) {
        ganador(mensaje1, numeroEntrada1, intentos1);
    } else if (numeroIngresado < numeroAzar1) {
        mensajeSiEsMayor(mensaje1);
    } else {
        mensajeSiEsMenor(mensaje1);
    }
}


// Función para comprobar el número ingresado por el usuario
function chequearResultadoInter() {
    intentos2 = sumar_e_informar(intento2, intentos2);

    let numeroIngresado = parseInt(numeroEntrada2.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 500) {
        numeroInvalido2(mensaje2);
        return;
    }

    if (numeroIngresado === numeroAzar2) {
        ganador(mensaje2, numeroEntrada2, intentos2);
    } else if (numeroIngresado < numeroAzar2) {
        mensajeSiEsMayor(mensaje2);
    } else {
        mensajeSiEsMenor(mensaje2);
    }
}

// Función para comprobar el número ingresado por el usuario
function chequearResultadoDif() {
    intentos3 = sumar_e_informar(intento3, intentos3); 

    let numeroIngresado = parseInt(numeroEntrada3.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 1000) {
        numeroInvalido3(mensaje3);
        return;
    }

    if (numeroIngresado === numeroAzar3) {
        ganador(mensaje3, numeroEntrada3, intentos3);
    } else if (numeroIngresado < numeroAzar3) {
        mensajeSiEsMayor(mensaje3);
    } else {
        mensajeSiEsMenor(mensaje3);
    }
}

// Función para comprobar el número ingresado por el usuario
function chequearResultadoEnteros() {
    intentos4 = sumar_e_informar(intento4, intentos4); 

    let numeroIngresado = parseInt(numeroEntrada4.value);

    if (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100 
            || numeroIngresado == 0 || numeroIngresado == -0) {
        numeroInvalido4(mensaje4);
        return;
    }

    if (numeroIngresado === numeroAzar4) {
        ganador(mensaje4, numeroEntrada4, intentos4);
    } else if (numeroIngresado < numeroAzar4) {
        mensajeSiEsMayor(mensaje4);
    } else {
        mensajeSiEsMenor(mensaje4);
    }
}

// Función para activar la sección correspondiente según la dificultad seleccionada
function activarSeccion() {
    // Obtener el valor del radio button seleccionado
    let tipoDificultad;
    let opciones = document.getElementsByName('opcion');

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            tipoDificultad = opciones[i].value;
            break;
        }
    }

    // Mostrar la opción correspondiente
    if (tipoDificultad === 'fácil') {
        document.querySelector('.seccion1').style.display = 'block';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'none';
        document.querySelector('.seccion4').style.display = 'none';
    } else if (tipoDificultad === 'intermedio') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'block';
        document.querySelector('.seccion3').style.display = 'none';
        document.querySelector('.seccion4').style.display = 'none';
    } else if (tipoDificultad === 'dificil') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'block';
        document.querySelector('.seccion4').style.display = 'none';
    } else if(tipoDificultad === 'enteros') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'none';
        document.querySelector('.seccion4').style.display = 'block';
    }
}

// Funciones de reseteo
function reset(intentos, numeroEntrada, mensaje, intento) {
    intentos = 0;
    numeroEntrada.disabled = false;
    numeroEntrada.value = "";
    mensaje.textContent = "";
    intento.textContent = "";
    return intentos;
}


function reset1() {
    numeroAzar1 = Math.floor(Math.random() * 100) + 1;
    intentos1 = reset(intentos1, numeroEntrada1, mensaje1, intento1);
}

// Función de reinicio para el nivel intermedio
function reset2() {
    numeroAzar2 = Math.floor(Math.random() * 500) + 1;
    intentos2 = reset(intentos2, numeroEntrada2, mensaje2, intento2);
}

// Función de reinicio para el nivel difícil
function reset3() {
    numeroAzar3 = Math.floor(Math.random() * 1000) + 1;
    intentos3 = reset(intentos3, numeroEntrada3, mensaje3, intento3);
}

// Función de reinicio para el nivel enteros
function reset4() {
    numeroAzar4 = Math.floor(Math.random() * 20) - 10;
    intentos4 = reset(intentos4, numeroEntrada4, mensaje4, intento4);
}