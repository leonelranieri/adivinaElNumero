// Generar un número aleatorio entre 1 y 100
let numeroAzar1 = Math.floor(Math.random() * 100) + 1;
let numeroAzar2 = Math.floor(Math.random() * 500) + 1;
let numeroAzar3 = Math.floor(Math.random() * 1000) + 1;

// Obtener los elementos del DOM
let numeroEntrada1 = document.getElementById('numeroEntrada1');
let numeroEntrada2 = document.getElementById('numeroEntrada2');
let numeroEntrada3 = document.getElementById('numeroEntrada3');
let mensaje1 = document.getElementById('mensaje1');
let mensaje2 = document.getElementById('mensaje2');
let mensaje3 = document.getElementById('mensaje3');
let intento1 = document.getElementById('intento1');
let intento2= document.getElementById('intento2');
let intento3 = document.getElementById('intento3');
let intentos1 = 0;
let intentos2 = 0;
let intentos3 = 0;

// Función para comprobar el número ingresado por el usuario
function chequearResultadoFacil() {
    intentos1 ++;
    intento1.textContent = `Cantidad de intentos : ${intentos1}`; 

    let numeroIngresado = parseInt(numeroEntrada1.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        mensaje1.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        mensaje1.style.color = 'purple'
        return;
    }

    if (numeroIngresado === numeroAzar1) {
        mensaje1.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje1.style.color = 'green';
        numeroEntrada1.disabled = true;
        intentos1 = 0;
    } else if (numeroIngresado < numeroAzar1) {
        mensaje1.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje1.style.color = 'red';
    } else {
        mensaje1.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje1.style.color = 'red';
    }
}


// Función para comprobar el número ingresado por el usuario
function chequearResultadoInter() {
    intentos2 ++;
    intento2.textContent = `Cantidad de intentos : ${intentos2}`; 

    let numeroIngresado = parseInt(numeroEntrada2.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 500) {
        mensaje2.textContent = 'Por favor, introduce un número válido entre 1 y 500.';
        mensaje2.style.color = 'purple'
        return;
    }

    if (numeroIngresado === numeroAzar2) {
        mensaje2.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje2.style.color = 'green';
        intentos2 = 0;
        numeroEntrada2.disabled = true;
    } else if (numeroIngresado < numeroAzar2) {
        mensaje2.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje2.style.color = 'red';
    } else {
        mensaje2.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje2.style.color = 'red';
    }
}

// Función para comprobar el número ingresado por el usuario
function chequearResultadoDif() {
    intentos3 ++;
    intento3.textContent = `Cantidad de intentos : ${intentos3}`; 

    let numeroIngresado = parseInt(numeroEntrada3.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 1000) {
        mensaje3.textContent = 'Por favor, introduce un número válido entre 1 y 1000.';
        mensaje3.style.color = 'purple'
        return;
    }

    if (numeroIngresado === numeroAzar3) {
        mensaje3.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje3.style.color = 'green';
        numeroEntrada3.disabled = true;
        intentos3 = 0;
    } else if (numeroIngresado < numeroAzar3) {
        mensaje3.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje3.style.color = 'red';
    } else {
        mensaje3.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje3.style.color = 'red';
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
    } else if (tipoDificultad === 'intermedio') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'block';
        document.querySelector('.seccion3').style.display = 'none';
    } else if (tipoDificultad === 'dificil') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'block';
    }
}

function reset1() {
    numeroAzar1 = Math.floor(Math.random() * 100) + 1;
    intentos1 = 0;
    numeroEntrada1.disabled = false;
    numeroEntrada1.value = "";
    mensaje1.textContent = "";
    intento1.textContent = "";
}

// Función de reinicio para el nivel intermedio
function reset2() {
    numeroAzar2 = Math.floor(Math.random() * 500) + 1;
    intentos2 = 0;
    numeroEntrada2.disabled = false;
    numeroEntrada2.value = "";
    mensaje2.textContent = "";
    intento2.textContent = "";
}

// Función de reinicio para el nivel difícil
function reset3() {
    numeroAzar3 = Math.floor(Math.random() * 1000) + 1;
    intentos3 = 0;
    numeroEntrada3.disabled = false;
    numeroEntrada3.value = "";
    mensaje3.textContent = "";
    intento3.textContent = "";
}

 