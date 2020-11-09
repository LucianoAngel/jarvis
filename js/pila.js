
// Constructor pila con las funcionalidades básicas de first in firts out
class Pila {
  constructor() {
    this.elementos = [];
  };
  insertar(elemento){
    this.elementos.push(elemento);
  };
  extraer() {
    const ultimo = this.elementos[this.elementos.length - 1];
    this.elementos.pop();
    return ultimo;
  };
  longitud() {
    return this.elementos.length;
  }
  ver_proximo() {
    return this.elementos[this.elementos.length - 1];
  }
  imprimir() {
    return this.elementos;
  }
}

const pila = new Pila();

// Seleccionar canción e insertarla a la lista de reproducción
$('#aggsafaera').click(function(){
	pila.insertar(safa.Song)
})

$('#agganimals').click(function(){
	pila.insertar(anim.Song)
})

$('#aggbohemia').click(function(){
	pila.insertar(bohe.Song)
})

$('#aggpose').click(function(){
	pila.insertar(pose.Song)
})

$('#aggsymp').click(function(){
	pila.insertar(Shym.Song)
})

$('#aggaero').click(function(){
	pila.insertar(aero.Song)
})

$('#aggtusa').click(function(){
	pila.insertar(tusa.Song)
})

$('#aggaron').click(function(){
	pila.insertar(aron.Song)
})

$('#aggbeat').click(function(){
	pila.insertar(beat.Song)
})

$('#aggbebe').click(function(){
	pila.insertar(bebe.Song)
})

$('#aggrock').click(function(){
	pila.insertar(rock.Song)
})

$('#aggpinc').click(function(){
	pila.insertar(pinc.Song)
})

$('#aggYope').click(function(){
	pila.insertar(Yope.Song)
})

$('#aggpart').click(function(){
	pila.insertar(part.Song)
})

$('#aggwann').click(function(){
	pila.insertar(wann.Song)
})

// Funcionalidad de el historial
$('#historial').click(function(){
  confirm('Tu Hitorial de canciones es: '+pila.imprimir())
})


