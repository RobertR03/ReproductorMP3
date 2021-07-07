//Lista de musicas
var lista_musica = new Array("Musicas/Chase - The Brothers Records.mp3","Musicas/Destructoid - MK2.mp3","Musicas/Heater - MK2.mp3");
var lista_portadas = new Array("Chase - The Brothers Records","Destructoid - MK2","Heater - MK2");

//variables de etiquetas HTML
var titulo = document.getElementById("nombre");
var portada = document.getElementById("portada-img");
var sonido = document.getElementById("musica");
var progreso = document.getElementById("tiempo");
var inicio = document.getElementById("inicio");
var LabelPlay = document.getElementById("btnPlay");
var indice = 0;

//canción siguiente
function Siguiente(){
    indice++;
    if (indice >= lista_musica.length) {
        indice = 0;
    }
    portada.src = "imagenes/" + lista_portadas[indice] + ".jpg";
    titulo.innerHTML = lista_portadas[indice];
    sonido.src = lista_musica[indice];
    sonido.play();
    LabelPlay.src = "svg/Pause.svg"; //Se cambia la imagen de btnPlay por la reproducción instantánea
}

//canción anterior
function Anterior() {
    indice--;
    if (indice < 0 ) {
        indice = lista_musica.length - 1;
    }
    portada.src = "imagenes/" + lista_portadas[indice] + ".jpg";
    titulo.innerHTML = lista_portadas[indice];
    sonido.src = lista_musica[indice];
    sonido.play();
    LabelPlay.src = "svg/Pause.svg"; //Se cambia la imagen de btnPlay por la reproducción instantánea
}

//pausa o reproduce la canción
function PlayPause() {
    if (sonido.paused) {
        sonido.play();
        LabelPlay.src = "svg/Pause.svg"; //Se cambia la imagen de btnPlay
    } else {
        sonido.pause();
        LabelPlay.src = "svg/Play.svg"; //Se cambia la imagen de btnPlay
    }
}

//Muestra en tiempo real el progreso del audio
function ProgresoTiempo() {
    progreso.max = sonido.duration;
    progreso.value = sonido.currentTime;
    inicio.innerHTML = timeToMinute(sonido.currentTime) //Actualiza el progreso del audio en pantalla
    fin.innerHTML = timeToMinute(sonido.duration);
}

//permite adelantar o retrasar el audio
function InputProgresoTiempo() {
    sonido.currentTime = progreso.value;
}

//permite controlar el volumen
function VolumenControl() {
    sonido.volume = document.getElementById("volumen").value;
}

//convierte el tiempo del audio en Minutos:Segundos
function timeToMinute(time) {
    var resultado = "00:00"
    var minuto, segundo;
    minuto = Math.floor(time/60);
    segundo = Math.floor(time - (minuto*60))

    //evita la impresión de NaN al instante de cambiar de canción
    if (isNaN(minuto || segundo) == true){
        return "00:00"
    }

    //Permite el formato 00:00
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    if (segundo < 10) {
        segundo = "0" + segundo;
    }
    
    return minuto + ":" + segundo;
}

//selecciona la canción en la lista de reproducción
function seleccion(num) {
    indice = num - 1;
    Siguiente();
}

//Lista las músicas en la lista de reproducción
function Listar() {
    for (let i = 0; i < 3; i++) {
        document.getElementById("op" + i).innerHTML = lista_portadas[i];   
    }
}

