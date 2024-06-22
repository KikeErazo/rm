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
  "001 - Café Tacvba - Eres.mp3",
  "002 - Caifanes - No Dejes Que....mp3",
  "003 - Duncan Dhu - En algún lugar.mp3",
  "004 - Enanitos Verdes - El Día Es Claro.mp3",
  "005 - Enanitos Verdes - Eterna Soledad.mp3",
  "006 - Enanitos Verdes - La Muralla Verde.mp3",
  "007 - Fito Páez - 11 y 6.mp3",
  "008 - Fito Páez - Mariposa tecknicolor.mp3",
  "009 - Héroes del Silencio - La sirena varada.mp3",
  "010 - Héroes del Silencio - Maldito duende.mp3",
  "011 - Hombres G - Venezia.mp3",
  "012 - Jarabe de Palo - Depende.mp3",
  "013 - Los Prisioneros - Tren Al Sur.mp3",
  "014 - Los Rodríguez - Mi enfermedad (Versión 96).mp3",
  "015 - Manu Chao - Me gustas tu.mp3",
  "016 - Vilma Palma e Vampiros - La pachanga.mp3",
  "017 - Caifanes - Nubes.mp3",
  "018 - La Ley - El Duelo (feat. Ely Guerra).mp3",
  "019 - Los Abuelos de la Nada - Mil Horas.mp3",
  "020 - Los Auténticos Decadentes - La Guitarra.mp3",
  "021 - Los Fabulosos Cadillacs - Manuel Santillán, el León (Versión Reggae).mp3",
  "022 - Los Pericos - Mucha Experiencia.mp3",
  "023 - Los Rodríguez - Para no olvidar.mp3",
  "024 - Soda Stereo - Trátame Suavemente (Remasterizado 2007).mp3",
  "025 - Vilma Palma e Vampiros - Mojada.mp3"
 

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