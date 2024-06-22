// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  var audioPlayer = document.getElementById('audio-player');
  var listaCanciones = document.querySelectorAll('#lista-canciones li');
  var nombreCancionActual = document.getElementById('nombre-cancion-actual');
  var botonSiguiente = document.getElementById('boton-siguiente');
  var botonAnterior = document.getElementById('boton-anterior');
  var indiceActual = 0; // Mantén un registro del índice de la canción actual
  var botonAleatorio = document.getElementById('boton-aleatorio');

  botonAleatorio.addEventListener('click', function () {
    var indiceAleatorio = Math.floor(Math.random() * listaCanciones.length);
    reproducirIndice(indiceAleatorio);
  });

  function reproducirIndice(indice) {
    // Si el índice es mayor o igual que la longitud de la lista, reinicia al principio
    if (indice >= listaCanciones.length) {
      indice = 0;
    }
    var cancionSeleccionada = listaCanciones[indice];
    audioPlayer.src = 'canciones/' + cancionSeleccionada.textContent;
    audioPlayer.play();
    nombreCancionActual.textContent = cancionSeleccionada.textContent; // Actualiza el nombre de la canción actual
    indiceActual = indice; // Actualiza el índice actual con el nuevo índice
  }


  botonSiguiente.addEventListener('click', function () {
    var siguienteIndice = indiceActual + 1;
    if (siguienteIndice >= listaCanciones.length) siguienteIndice = 0; // Vuelve a la primera canción si es la última
    reproducirIndice(siguienteIndice);
  });

  botonAnterior.addEventListener('click', function () {
    var anteriorIndice = indiceActual - 1;
    if (anteriorIndice < 0) anteriorIndice = listaCanciones.length - 1; // Va a la última canción si es la primera
    reproducirIndice(anteriorIndice);
  });

  listaCanciones.forEach(function (cancion, indice) {
    cancion.addEventListener('click', function () {
      reproducirIndice(indice);
    });
  });

  audioPlayer.addEventListener('ended', function () {
    var siguienteIndice = indiceActual + 1;
    reproducirIndice(siguienteIndice);
  });

  // Añade aquí más controladores de eventos para otros botones
});


// Supongamos que tienes un array con los nombres de tus canciones
var nombresCanciones = [
  "001 - ABBA - Chiquitita (Spanish Version).mp3",
  "002 - Alberto Vásquez - Tu Significas Todo para Mi.mp3",
  "003 - Alfredo De Angelis - A Media Luz.mp3",
  "004 - Bajo Kontrol - La Cinta Rosa.mp3",
  "005 - Basilio - Cisne Cuello Negro.mp3",
  "006 - Braulio - La Más Bella Herejía (En Vivo).mp3",
  "007 - Buddy Richard - Si Me Vas Abandonar.mp3",
  "008 - Camilo Sesto - Amor... Amar.mp3",
  "009 - Charles Aznavour - La bohemia.mp3",
  "010 - Diego Verdaguer - Volveré (Versión Original Remasterizada).mp3",
  "011 - Duo Dinamico - Esos ojitos negros.mp3",
  "012 - Dyango - Esta noche quiero brandy.mp3",
  "013 - Emmanuel - Todo Se Derrumbó Dentro de Mí.mp3",
  "014 - Francis Cabrel - La Quiero a Morir.mp3",
  "015 - Franco de Vita - Un Buen Perdedor.mp3",
  "016 - Franco Simone - Paisaje.mp3",
  "017 - Gian Franco Pagliaro - No Soy de Aquí, Ni Soy de Allá.mp3",
  "018 - Jeanette - Porqué te vas.mp3",
  "019 - Joan Manuel Serrat - La Mujer Que Yo Quiero.mp3",
  "020 - Joan Sebastian - Oiga.mp3"
 

  // ... más nombres de canciones
];

// Función para generar la lista de canciones en el HTML
function generarListaCanciones(nombresCanciones) {
  var listaCanciones = document.getElementById('lista-canciones');
  nombresCanciones.forEach(function (nombreCancion) {
    var li = document.createElement('li');
    li.textContent = nombreCancion;
    listaCanciones.appendChild(li);
  });
}

// Llamar a la función para generar la lista
generarListaCanciones(nombresCanciones);


// Obtén el elemento del icono y los enlaces del menú
const menuIcono = document.querySelector(".menu-icono");
const menuEnlaces = document.querySelector(".menu-enlaces");

// Agrega un evento de clic al icono
menuIcono.addEventListener("click", () => {
  menuEnlaces.classList.toggle("active");
});