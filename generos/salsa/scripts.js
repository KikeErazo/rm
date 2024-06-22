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
  "001 - El Gran Combo de Puerto Rico - Esos Ojitos Negros.mp3",
  "002 - Frankie Ruíz - Si Te Entregas a Mí.mp3",
  "003 - Grupo Niche - Del Puente Pa Lla.mp3",
  "004 - Guayacan Orquesta - Un Vestido Bonito.mp3",
  "005 - Héctor Lavoe - La Murga.mp3",
  "006 - Henry Fiol - Ahora me da pena.mp3",
  "007 - Herencia de Timbiqui - Sabrás.mp3",
  "008 - La Misma Gente - Juanita AE.mp3",
  "009 - Lebrón Brothers - Temperatura.mp3",
  "010 - Nelson Y Sus Estrellas - El Forastero.mp3",
  "011 - El Gran Combo de Puerto Rico - Achilipú.mp3",
  "012 - Frankie Ruiz - Imposible Amor.mp3",
  "013 - Grupo Niche - Buenaventura y Caney.mp3",
  "014 - Guayacan Orquesta - Invierno en Primavera.mp3",
  "015 - Herencia de Timbiqui - Quiero Cantarte.mp3",
  "016 - Ismael Rivera - Las Tumbas.mp3",
  "017 - Joe Arroyo - En Barranquilla Me Quedo.mp3",
  "018 - Mi Pueblo - Grupo Niche.mp3",
  "019 - Nelson Y Sus Estrellas - Londres.mp3",
  "020 - Oscar De Leon - Sigue Tu Camino.mp3",
  "021 - Raphy Leavitt - Somos el Son.mp3",
  "022 - Ray Barreto - Cuero Na' Ma.mp3",
  "023 - Roberto Roena - Estas Equivocado.mp3",
  "024 - The Latin Brothers - Preso.mp3",
  "025 - Willie Gonzalez - Enamorado De Ti.mp3"
  
 

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



