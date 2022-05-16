/* ETIQUETAS DEL INDEX */

var menu = document.getElementById('menu');
var ico_menu = document.getElementById('ico_menu');


/* FUNCION */

function activar(){
    menu.classList.add("activar");
}


/* EVENTO ALGO QUE PASA */

ico_menu.addEventListener('click',activar);

