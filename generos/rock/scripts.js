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
  "001. Led Zeppelin - Stairway to Heaven.mp3",
  "002. Scorpions - Wind Of Change.mp3",
  "003. Guns N' Roses - November Rain.mp3",
  "004. Bon Jovi - You Give Love A Bad Name.mp3",
  "005. Kings of Leon - Sex on Fire.mp3",
  "006. AC-DC - You Shook Me All Night Long.mp3",
  "007. Scorpions - Still Loving You.mp3",
  "008. Guns N' Roses - Don't Cry (Original).mp3",
  "009. ZZ Top - Gimme All Your Lovin'.mp3",
  "010. Bon Jovi - Always.mp3",
  "011 - ACDC - Highway to Hell.mp3",
  "012 - Alice in Chains - Your Decision.mp3",
  "013 - Audioslave - Like a Stone.mp3",
  "014 - Blondie - Call Me.mp3",
  "015 - Bloodhound Gang - The Bad Touch.mp3",
  "016 - Blur - Song 2.mp3",
  "017 - Depeche Mode - Enjoy the Silence.mp3",
  "018 - Dire Straits - Sultans Of Swing.mp3",
  "019 - Duran Duran - Come Undone (Edit).mp3",
  "020 - Duran Duran - Ordinary World.mp3",
  "021 - Lenny Kravitz - Again.mp3",
  "022 - Metallica - Now That We re Dead.mp3",
  "023 - Nirvana - Come As You Are.mp3",
  "024 - Pearl Jam - Dance Of The Clairvoyants.mp3",
  "025 - R.E.M. - Shiny Happy People.mp3"
 

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