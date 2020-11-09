
//Parte Botones de Playlist( Eliminar ultima cancion de la playlist, Reproducir Siguiente Cancion)
class Fila {
constructor() {
this.elementos = [];
};
insertar(elemento){
this.elementos.push(elemento);
};
extraer() {
const primero = this.elementos[0];
this.elementos.splice(0, 1);
return primero;
};
longitud() {
return this.elementos.length;
};
peek() {
return this.elementos[0];
};
imprimir() {
return this.elementos;
};
}
const fila = new Fila();


//funcion validar cancion

function validarsong (cancion, nombreaudio){
	if(fila.peek()== cancion.Song){
		nombreaudio.play();
	}
}

function pararsong (cancion, nombreaudio){
	if(fila.peek()== cancion.Song){
		nombreaudio.pause();
	}
}

//Registro song

const safa = {
    Song: 'Safaera',
    Artista:'Bad bunny',
      }   
$('#s1').html(safa.Artista);
$('#t1').html(safa.Song);

const anim = {
    Song: 'Animals',
    Artista:'Martin Garrix',
      }   
$('#s2').html(anim.Artista);
$('#t2').html(anim.Song);

const bohe = {
    Song: 'Bohemia Rhapsody',
    Artista:'Queen',
      }   
$('#s3').html(bohe.Artista);
$('#t3').html(bohe.Song);

const pose = {
    Song: 'Pose',
    Artista:'Daddy Yankee',
      }   
$('#s4').html(pose.Artista);
$('#t4').html(pose.Song);

const Shym = {
    Song: 'Symphony',
    Artista:'Clean Bandit',
      }   
$('#s5').html(Shym.Artista);
$('#t5').html(Shym.Song);

const aero = {
    Song: 'I dont want to miss a thing',
    Artista:'Aerosmith',
      }   
$('#s6').html(aero.Artista);
$('#t6').html(aero.Song);

const tusa = {
    Song: 'Tusa',
    Artista:'Karol G',
      }   
$('#s7').html(tusa.Artista);
$('#t7').html(tusa.Song);

const aron = {
    Song: 'Im an albatraoz',
    Artista:'Aroon',
      }   
$('#s8').html(aron.Artista);
$('#t8').html(aron.Song);

const beat = {
    Song: 'Ey juge',
    Artista:'The Beatles',
      }   
$('#s9').html(beat.Artista);
$('#t9').html(beat.Song);

const bebe = {
    Song: 'La bebe remix',
    Artista:'Anuel AA',
      }   
$('#s10').html(bebe.Artista);
$('#t10').html(bebe.Song);

const rock = {
    Song: 'Rockabye',
    Artista:'Clean Bandit',
      }   
$('#s11').html(rock.Artista);
$('#t11').html(rock.Song);

const pinc = {
    Song: 'Another brick in the wall',
    Artista:'Pink Floyd',
      }   
$('#s12').html(pinc.Artista);
$('#t12').html(pinc.Song);

const Yope = {
    Song: 'Yo perreo sola',
    Artista:'Bad Bunny',
      }   
$('#s13').html(Yope.Artista);
$('#t13').html(Yope.Song);

const part = {
    Song: 'Party Rock',
    Artista:'Lmfao',
      }   
$('#s14').html(part.Artista);
$('#t14').html(part.Song);

const wann = {
    Song: 'I want to break free',
    Artista:'Queen',
      }   
$('#s15').html(wann.Artista);
$('#t15').html(wann.Song);

//Funciones de los botones

//boton empezar playlist

$('#aggsafaera').click(function(){
	fila.insertar(safa.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#agganimals').click(function(){
	fila.insertar(anim.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggbohemia').click(function(){
	fila.insertar(bohe.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggpose').click(function(){
	fila.insertar(pose.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggsymp').click(function(){
	fila.insertar(Shym.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggaero').click(function(){
	fila.insertar(aero.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggtusa').click(function(){
	fila.insertar(tusa.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggaron').click(function(){
	fila.insertar(aron.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggbeat').click(function(){
	fila.insertar(beat.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggbebe').click(function(){
	fila.insertar(bebe.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggrock').click(function(){
	fila.insertar(rock.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggpinc').click(function(){
	fila.insertar(pinc.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggYope').click(function(){
	fila.insertar(Yope.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggpart').click(function(){
	fila.insertar(part.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})

$('#aggwann').click(function(){
	fila.insertar(wann.Song)
	alert('Se ha añadido una Cancion a la lista de reproduccion')
})


$('#verplaylistboton').click(function(){
	alert('En tu lista de reproduccion se encuentra: '+fila.imprimir())
})

//Sacar ultima cancion
$('#borrarultimacancionboton').click(function(){
	alert('Se extraera la siguiente cancion: '+ fila.peek())
	//stop

	pararsong(safa, audiosafaera);
	pararsong(anim, audioanimals);
	pararsong(bohe, audiobohemia);
	pararsong(pose, audiopose);
	pararsong(Shym, audiosymp);
	pararsong(aero, audioaero);
	pararsong(tusa, audiotusa);
	pararsong(aron, audioaron);
	pararsong(beat, audiobeat);
	pararsong(bebe, audiobebe);
	pararsong(rock, audiorock);
	pararsong(pinc, audiopinc);
	pararsong(Yope, audioYope);
	pararsong(part, audiopart);
	pararsong(wann, audiowann);


	fila.extraer()
	
})


//Reproducir siguiente cancion

$('#reproducirsiguientecancionboton').click(function(){ 
//stop

	pararsong(safa, audiosafaera);
	pararsong(anim, audioanimals);
	pararsong(bohe, audiobohemia);
	pararsong(pose, audiopose);
	pararsong(Shym, audiosymp);
	pararsong(aero, audioaero);
	pararsong(tusa, audiotusa);
	pararsong(aron, audioaron);
	pararsong(beat, audiobeat);
	pararsong(bebe, audiobebe);
	pararsong(rock, audiorock);
	pararsong(pinc, audiopinc);
	pararsong(Yope, audioYope);
	pararsong(part, audiopart);
	pararsong(wann, audiowann);
	
	fila.extraer()
	alert("Empezaste a escuchar: "+fila.peek())

//replay

	validarsong(safa, audiosafaera);
	validarsong(anim, audioanimals);
	validarsong(bohe, audiobohemia);
	validarsong(pose, audiopose);
	validarsong(Shym, audiosymp);
	validarsong(aero, audioaero);
	validarsong(tusa, audiotusa);
	validarsong(aron, audioaron);
	validarsong(beat, audiobeat);
	validarsong(bebe, audiobebe);
	validarsong(rock, audiorock);
	validarsong(pinc, audiopinc);
	validarsong(Yope, audioYope);
	validarsong(part, audiopart);
	validarsong(wann, audiowann);

//controles de audio, reproducir playlist

})


$('#reproducirplaylist').click(function(){

	validarsong(safa, audiosafaera);
	validarsong(anim, audioanimals);
	validarsong(bohe, audiobohemia);
	validarsong(pose, audiopose);
	validarsong(Shym, audiosymp);
	validarsong(aero, audioaero);
	validarsong(tusa, audiotusa);
	validarsong(aron, audioaron);
	validarsong(beat, audiobeat);
	validarsong(bebe, audiobebe);
	validarsong(rock, audiorock);
	validarsong(pinc, audiopinc);
	validarsong(Yope, audioYope);
	validarsong(part, audiopart);
	validarsong(wann, audiowann);

})

var audiosafaera = new Audio('assets/music/y2mate.com - Safaera - Bad Bunny x Jowell & Randy x Ñengo Flow _ YHLQMDLG_jCQ_6XbATPc.mp3')
var audioanimals = new Audio('assets/music/y2mate.com - Martin Garrix - Animals (Official Video)_gCYcHz2k5x0.mp3')
var audiobohemia = new Audio('assets/music/b.mp3')
var audiopose = new Audio('assets/music/Pose__BASS__-_Daddy_Yankee.mp3')
var audiosymp = new Audio('assets/music/1 - Clean Bandit - Symphony (feat. Zara Larsson).mp3" controls="controls')
var audioaero = new Audio('assets/music/Aerosmith_-I_Dont_Want_To_Miss_A_Thing.mp3')
var audiotusa = new Audio('assets/music/KAROL G, Nicki Minaj - Tusa.mp3')
var audioaron = new Audio('assets/music/Aron_Chupa_–_Im_An_Albatraoz_Jack_H.mp3')
var audiobeat = new Audio('assets/music/21666_The-Beatles-Hey-Jude.mp3')
var audiobebe = new Audio('assets/music/AnuelVEVO - La Bebe REMIX (Me Pide Leche)  Anuel uhhGfnLxGwM.m4a')
var audiorock = new Audio('assets/music/Clean_Bandit_Rockabye_ft_Sean_Paul.mp3')
var audiopinc = new Audio('assets/music/Pink Floyd – Another Brick In The Wall Part 2.mp3')
var audioYope = new Audio('assets/music/Yo Perreo Sola - Bad Bunny _ YHLQMDLG br9Bz-x0LeQ.m4a')
var audiopart = new Audio('assets/music/LMFAO – Party Rock Anthem (Peppermint Private Rework).mp3')
var audiowann = new Audio('assets/music/Queen - I Want To Break Free.mp3')

$('#quecancionsuenaboton').click(function(){
	alert(fila.peek())
})

$('#pararplaylistboton').click(function(){
	pararsong(safa, audiosafaera);
	pararsong(anim, audioanimals);
	pararsong(bohe, audiobohemia);
	pararsong(pose, audiopose);
	pararsong(Shym, audiosymp);
	pararsong(aero, audioaero);
	pararsong(tusa, audiotusa);
	pararsong(aron, audioaron);
	pararsong(beat, audiobeat);
	pararsong(bebe, audiobebe);
	pararsong(rock, audiorock);
	pararsong(pinc, audiopinc);
	pararsong(Yope, audioYope);
	pararsong(part, audiopart);
	pararsong(wann, audiowann);
})