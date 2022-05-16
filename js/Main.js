/* ETIQUETAS DEL INDEX */

var menu = document.getElementById('menu');
var ico_menu = document.getElementById('ico_menu');



var ventana = document.getElementById('ventanita')
var ico_explorer = document.getElementById('ico_explorer');


/* FUNCION */

function activar(){
    menu.classList.add("activar");
    
    
}


function ventanaActivate(){
    ventana.classList.add("ventanaActivate");
}


/* EVENTO ALGO QUE PASA */

ico_menu.addEventListener('click',activar);


ico_explorer.addEventListener('click',ventanaActivate);



