// Array para usuairo y puntajes
puntajesDeUsuarios1 = [];
puntajesDeUsuarios2 = [];
puntajesDeUsuarios3 = [];
puntajesDeUsuarios4 = [];
puntajesDeUsuarios5 = [];

// Obtener referencia a las listas
let lista1 = document.getElementById('lista1');
let lista2 = document.getElementById('lista2');
let lista3 = document.getElementById('lista3');
let lista4 = document.getElementById('lista4');
let lista5 = document.getElementById('lista5');

// Generar un número aleatorio entre 1 y 100
let numeroAzar1 = Math.floor(Math.random() * 100) + 1;
console.log(numeroAzar1)
let numeroAzar2 = Math.floor(Math.random() * 500) + 1;
console.log(numeroAzar2)
let numeroAzar3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAzar3)
let numeroAzar4 = Math.floor(Math.random() * 20) - 10;
console.log(numeroAzar4)
let numeroAzar5 = Math.floor(Math.random() * 10000) / 100;
console.log(numeroAzar5)

// Obtener los elementos del DOM
let numeroEntrada1 = document.getElementById('numeroEntrada1');
let numeroEntrada2 = document.getElementById('numeroEntrada2');
let numeroEntrada3 = document.getElementById('numeroEntrada3');
let numeroEntrada4 = document.getElementById('numeroEntrada4');
let numeroEntrada5 = document.getElementById('numeroEntrada5');

let mensaje1 = document.getElementById('mensaje1');
let mensaje2 = document.getElementById('mensaje2');
let mensaje3 = document.getElementById('mensaje3');
let mensaje4 = document.getElementById('mensaje4');
let mensaje5 = document.getElementById('mensaje5');

let intento1 = document.getElementById('intento1');
let intento2 = document.getElementById('intento2');
let intento3 = document.getElementById('intento3');
let intento4 = document.getElementById('intento4');
let intento5 = document.getElementById('intento5');

let intentos1 = 0;
let intentos2 = 0;
let intentos3 = 0;
let intentos4 = 0;
let intentos5 = 0;

let registro1 = document.getElementById('registro1');
let registro2 = document.getElementById('registro2');
let registro3 = document.getElementById('registro3');
let registro4 = document.getElementById('registro4');
let registro5 = document.getElementById('registro5');


// Suma la cantidad de intentos e informa en pantalla
function sumar_e_informar(intento, intentos) {
    intentos++;
    intento.textContent = `${intentos}`;
    return intentos;
}

// Mensaje de número inválido
function numeroInvalido1(mensaje) {
    mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
    mensaje.style.color = 'purple';
}

function numeroInvalido2(mensaje) {
    mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 500.';
    mensaje.style.color = 'purple';
}

function numeroInvalido3(mensaje) {
    mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 1000.';
    mensaje.style.color = 'purple';
}

function numeroInvalido4(mensaje) {
    mensaje.textContent = 'Por favor, introduce un número válido -1 y -100 y entre 1 y 100.';
    mensaje.style.color = 'purple';
}

// Mensaje y tratamiento para jugador ganador
function ganador(mensaje, numeroEntrada, intentos, registro) {
    mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
    mensaje.style.color = 'green';
    numeroEntrada.disabled = true;
    intentos = 0;
    // Mostrar botón para registrar su score
    registro.style.display = 'block';
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
    let numeroIngresado = parseInt(numeroEntrada1.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        numeroInvalido1(mensaje1);
        return;
    }

    intentos1 = sumar_e_informar(intento1, intentos1);

    if (numeroIngresado === numeroAzar1) {
        ganador(mensaje1, numeroEntrada1, intentos1, registro1);
    } else if (numeroIngresado < numeroAzar1) {
        mensajeSiEsMayor(mensaje1);
    } else {
        mensajeSiEsMenor(mensaje1);
    }
}


// Función para comprobar el número ingresado por el usuario
function chequearResultadoInter() {
    let numeroIngresado = parseInt(numeroEntrada2.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 500) {
        numeroInvalido2(mensaje2);
        return;
    }

    intentos2 = sumar_e_informar(intento2, intentos2);

    if (numeroIngresado === numeroAzar2) {
        ganador(mensaje2, numeroEntrada2, intentos2, registro2);
    } else if (numeroIngresado < numeroAzar2) {
        mensajeSiEsMayor(mensaje2);
    } else {
        mensajeSiEsMenor(mensaje2);
    }
}

// Función para comprobar el número ingresado por el usuario
function chequearResultadoDif() {
    let numeroIngresado = parseInt(numeroEntrada3.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 1000) {
        numeroInvalido3(mensaje3);
        return;
    }

    intentos3 = sumar_e_informar(intento3, intentos3);

    if (numeroIngresado === numeroAzar3) {
        ganador(mensaje3, numeroEntrada3, intentos3, registro3);
    } else if (numeroIngresado < numeroAzar3) {
        mensajeSiEsMayor(mensaje3);
    } else {
        mensajeSiEsMenor(mensaje3);
    }
}

// Función para comprobar el número ingresado por el usuario
function chequearResultadoEnteros() {
    let numeroIngresado = parseInt(numeroEntrada4.value);

    intentos4 = sumar_e_informar(intento4, intentos4);

    if (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100
        || numeroIngresado == 0 || numeroIngresado == -0) {
        numeroInvalido4(mensaje4);
        return;
    }

    if (numeroIngresado === numeroAzar4) {
        ganador(mensaje4, numeroEntrada4, intentos4, registro4);
    } else if (numeroIngresado < numeroAzar4) {
        mensajeSiEsMayor(mensaje4);
    } else {
        mensajeSiEsMenor(mensaje4);
    }
}

function chequearResultadoDecimales() {
    let numeroIngresado = parseFloat(numeroEntrada5.value);

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        numeroInvalido1(mensaje5);
        return;
    }

    intentos5 = sumar_e_informar(intento5, intentos5);

    if (numeroIngresado === numeroAzar5) {
        ganador(mensaje5, numeroEntrada5, intentos5, registro5);
    } else if (numeroIngresado < numeroAzar5) {
        mensajeSiEsMayor(mensaje5);
    } else {
        mensajeSiEsMenor(mensaje5);
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
        document.querySelector('.seccion5').style.display = 'none';
    } else if (tipoDificultad === 'intermedio') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'block';
        document.querySelector('.seccion3').style.display = 'none';
        document.querySelector('.seccion4').style.display = 'none';
        document.querySelector('.seccion5').style.display = 'none';
    } else if (tipoDificultad === 'dificil') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'block';
        document.querySelector('.seccion4').style.display = 'none';
        document.querySelector('.seccion5').style.display = 'none';
    } else if (tipoDificultad === 'enteros') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'none';
        document.querySelector('.seccion4').style.display = 'block';
        document.querySelector('.seccion5').style.display = 'none';
    } else if (tipoDificultad === 'decimales') {
        document.querySelector('.seccion1').style.display = 'none';
        document.querySelector('.seccion2').style.display = 'none';
        document.querySelector('.seccion3').style.display = 'none';
        document.querySelector('.seccion4').style.display = 'none';
        document.querySelector('.seccion5').style.display = 'block';
    }
}

// Funciones de reseteo
function reset(intentos, numeroEntrada, mensaje, intento, registro) {
    intentos = 0;
    numeroEntrada.disabled = false;
    numeroEntrada.value = "";
    mensaje.textContent = "";
    intento.textContent = "";
    registro.style.display = 'none';
    return intentos;
}


function reset1() {
    numeroAzar1 = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAzar1)
    intentos1 = reset(intentos1, numeroEntrada1, mensaje1, intento1, registro1);
}

// Función de reinicio para el nivel intermedio
function reset2() {
    numeroAzar2 = Math.floor(Math.random() * 500) + 1;
    console.log(numeroAzar2)
    intentos2 = reset(intentos2, numeroEntrada2, mensaje2, intento2, registro2);
}

// Función de reinicio para el nivel difícil
function reset3() {
    numeroAzar3 = Math.floor(Math.random() * 1000) + 1;
    console.log(numeroAzar3)
    intentos3 = reset(intentos3, numeroEntrada3, mensaje3, intento3, registro3);
}

// Función de reinicio para el nivel enteros
function reset4() {
    do {
        numeroAzar4 = Math.floor(Math.random() * 20) - 10;
    } while (numeroAzar4 == 0)
    console.log(numeroAzar4)
    intentos4 = reset(intentos4, numeroEntrada4, mensaje4, intento4, registro4);
}

// Función de reinicio para el nivel decimales
function reset5() {
    do {
        numeroAzar5 = Math.floor(Math.random() * 10000) / 100;
    } while (numeroAzar5 < 1)
    console.log(numeroAzar5)
    intentos5 = reset(intentos5, numeroEntrada5, mensaje5, intento5, registro5);
}

function registrarNombreGenerica(intentos, puntajesDeUsuarios, lista, registro) {
    // Utiliza la función prompt para obtener el nombre del usuario
    var nombreUsuario = prompt("Por favor, ingresa tu nombre:");

    // Verifica si el usuario ingresó un nombre
    if (nombreUsuario !== null && nombreUsuario !== "") {
        // Crea un objeto con el nombre del usuario y su puntaje
        let usuario = {
            nombre: nombreUsuario,
            puntaje: intentos
        };

        // Agrega el objeto al array
        puntajesDeUsuarios.push(usuario);

        // Ordena el array por puntaje (en orden ascendente)
        puntajesDeUsuarios.sort((a, b) => a.puntaje - b.puntaje);

        // Renderiza la lista actualizada
        renderizarLista(lista, puntajesDeUsuarios, registro);
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}


// Función para registrar un puntaje
function registrarNombre1() {
    registrarNombreGenerica(intentos1, puntajesDeUsuarios1, lista1, registro1);
}

function registrarNombre2() {
    registrarNombreGenerica(intentos2, puntajesDeUsuarios2, lista2, registro2);
}

function registrarNombre3() {
    registrarNombreGenerica(intentos3, puntajesDeUsuarios3, lista3, registro3);
}

function registrarNombre4() {
    registrarNombreGenerica(intentos4, puntajesDeUsuarios4, lista4, registro4);
}

function registrarNombre5() {
    registrarNombreGenerica(intentos5, puntajesDeUsuarios5, lista5, registro5);
}



// Función para renderizar la lista
function renderizarLista(lista, puntajesDeUsuarios, registro) {
    // Limpia la lista actual
    lista.innerHTML = "<h3>Puntajes: </h3>";

    // Recorre el array de usuarios y puntajes y agrega elementos a la lista
    for (let i = 0; i < puntajesDeUsuarios.length; i++) {
        let usuario = puntajesDeUsuarios[i];
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `${usuario.nombre}: ${usuario.puntaje}`;
        lista.appendChild(nuevoElemento);
    }
    registro.style.display = 'none';
}
