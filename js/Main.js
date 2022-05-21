/**********************************************************************/
/* CREACION DE LA ETIQUETA ACTIVAR Y DESACTIVAR MENU */
var activarMenu = document.getElementById("ico_menu");

//FUNCION ACTIVAR Y DESACTIVAR MENU
function activateMenu(){

    var Menu = document.getElementById("menu");

    if (Menu.style.display === "none"){
        Menu.style.display = "inline-block";
    }else{
        Menu.style.display = "none";
    }

}
//EVENTO PARA EL MENU
activarMenu.addEventListener('click',activateMenu);
/**********************************************************************/



/**********************************************************************/
/* CREACION DE ETIQUETAS PARA ACTIVAR Y DESACTIVAR LA  VENTANA */

var activarse = document.getElementById("ico_explorer");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
function ActivarDesactivar() {    
        
    var explorer = document.getElementById("ventanita");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar);
/**********************************************************************/



/******************************************************************** */
/* CREACION DE LA VARIABLE PARA AMPLIAR */
var ampliar = document.getElementById("ampliar");

/* FUNCION PARA MAXIMIZAR LA VENTANA */
function maximizar(){
    var maximizar = document.getElementById("ventanita");

    console.log("maximizar ",maximizar);

    if(maximizar.style.width === "100%"){
        maximizar.style.width = "600px";
        maximizar.style.height = "400px";
    }else{
        maximizar.style.width = "100%";
        maximizar.style.height = "100%";
       
    }
}

/*EVENTO PARA AMPLIAR O MAXIMIZAR LA VENTANA */
ampliar.addEventListener('click', maximizar);
/******************************************************************** */



/**********************************************************************/
/* CREACION DE VARIABLES PARA EL BOTON CERRAR Y MINIMIZAR */

var closeWindow = document.getElementById("cerrar");
var minimizar = document.getElementById("minimizar");

/* FUNCION PARA DESACTIVAR LA VENTANA */
function cerrar(){

    var cerrarExplorer = document.getElementById("ventanita");

    console.log("cerrar,",cerrarExplorer);

        if (cerrarExplorer.style.display === "block"){
            cerrarExplorer.style.display = "none";
        }

    }

    //EVENTOS
    closeWindow.addEventListener('click',cerrar);
    minimizar.addEventListener('click',cerrar);
/**********************************************************************/




