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
  "001 EL CONDOR PASA - OPUS II ANDINO.mp3",
  "002 PASILLEANDO - MANNY DELGADO Y SU CONJTO.mp3",
  "003 VOLARE - RAY CONNIFF.mp3",
  "004 EL MANISERO - ORQ. SERENATA TROPICAL.mp3",
  "005 ESPANA CANI - ORQ. FESTIVAL DE MADRID.mp3",
  "006 TODA UNA VIDA - LOS DIPLOMATICOS.mp3",
  "007 CURRUCUCU PALOMA - MARIACHI GARIBALDI.mp3",
  "008 GUANTANAMERA - ALFREDO DE LA FE.mp3",
  "009 TICO TICO - RAY CONNIFF.mp3",
  "010 SAMBA PA TI - CARLOS SANTANA.mp3",
  "011 CUORE MATTO - NINI ROSSO.mp3",
  "012 AUNQUE ME CUESTE LA VIDA - ALFREDO DE LA FE.mp3",
  "013 ZORBA - WERNER MULLER.mp3",
  "014 MOLIENDO CAFE - VIOLINES DE PEGO.mp3",
  "015 EL ESCONDITE DE HERNANDO - DICK SHORY.mp3",
  "016 CHIQUITITA - RAUL D'BLASIO.mp3",
  "017 GUANTANAMERA - ORQ. CUERDAS DEL CARIBE.mp3",
  "018 AY MAMA INES - ANDRE Y SU CONJUNTO.mp3",
  "019 CONCIERTO DE ARANJUEZ - JEAN CLAUDE BORELLI.mp3",
  "020 TOY CONTENTO - VIOLINES DE PEGO.mp3"
 

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