
	var span=document.querySelector("#span");
	let textotv = document.querySelector('#textotv');
	let textobombillo = document.querySelector('#textobombillo');
	let textoled = document.querySelector('#textoled');
	let textopc = document.querySelector('#textopc');
	let textobocina = document.querySelector('#textobocina');

function cerrar() {
	span.textContent= "" 
}
let comenzarbtn = document.querySelector('#comenzemos').onclick = function () {
		cerrar()
	}
	let cerrarbtn = document.querySelector('#btn-cerrar-popup').onclick = function () {
		cerrar()
	};



$( "#clicktv" ).bind("dblclick", function() {
  textotv.textContent= "Apagado con exito";
});

$( "#clicktv" ).bind("click", function() {
  textotv.textContent= "Encendido con exito";
});


$( "#clickluz" ).bind("dblclick", function() {
  textobombillo.textContent= "Apagado con exito";
});

$( "#clickluz" ).bind("click", function() {
  textobombillo.textContent= "Encendido con exito";
});


$( "#clickled" ).bind("dblclick", function() {
  textoled.textContent= "Apagado con exito";
});

$( "#clickled" ).bind("click", function() {
  textoled.textContent= "Encendido con exito";
});


$( "#clickpc" ).bind("dblclick", function() {
  textopc.textContent= "Apagado con exito";
});

$( "#clickpc" ).bind("click", function() {
  textopc.textContent= "Encendido con exito";
});


$( "#clickbocina" ).bind("dblclick", function() {
  textobocina.textContent= "Apagado con exito";
});

$( "#clickbocina" ).bind("click", function() {
  textobocina.textContent= "Encendido con exito";
});

