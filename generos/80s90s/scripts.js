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
  "001 - 2 Brothers on the 4th Floor - Dreams (Will Come Alive).mp3",
  "002 - 740 Boyz - Shimmy Shake (Tino Mix).mp3",
  "003 - Alice DeeJay - Better Off Alone (Remastered) (1999 Original Hit Radio).mp3",
  "004 - Bellini - Samba De Janeiro.mp3",
  "005 - Chic - Good Times (Original 12_ Mix; 2006 Remaster).mp3",
  "006 - Corona - The Rhythm of the Night.mp3",
  "007 - Da Hool - Meet Her At The Loveparade (Original Mix).mp3",
  "008 - Da Hool - Meet Her At The Loveparade (Radio Edit).mp3",
  "009 - Disco Fever - Be My Lover.mp3",
  "010 - Double You - Run To Me.mp3",
  "011 - Encore - Le Disc Jockey.mp3",
  "012 - Euphoria DJ's - 9 PM (Till I Come).mp3",
  "013 - Euphoria DJ's - Sandstorm.mp3",
  "014 - Kraftwerk - The Robots (2009 Remaster).mp3",
  "015 - Lipps, Inc. - Funkytown.mp3",
  "016 - Playahitty - The Summer Is Magic (Radio Mix).mp3",
  "017 - Right Said Fred - I'm Too Sexy.mp3",
  "018 - Robert Miles - One and One (Radio Version).mp3",
  "019 - Saturday Night - Saturday Night (Uk Remix).mp3",
  "020 - Whigfield - Think of You (Radio Edit).mp3"
 

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