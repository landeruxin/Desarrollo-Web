
function inicio(){

    
    
    var nombre = prompt("Introduzca su nombre:");

    var fecha = new Date();

    var hora = fecha.getHours();

    /*las partes del día se dividen en Mañana: de 6 a 12, Tarde: de 12 a 20 ,Noche: de 20  6 */

    if(hora>=6 && hora<12){ //Caso de la mañana entre las 6 y 12
        document.getElementById("respuesta").innerHTML = "Muy buenos días "+nombre+".";
    }else if(hora>=12 && hora < 20){ //Caso de la tarde entre las 12 y 20
        document.getElementById("respuesta").innerHTML = "Buenas tardes "+nombre+".";
    }else{ //Resto la noche
        document.getElementById("respuesta").innerHTML = "Muy buenas noches "+nombre+". Pronto a dormir!";
    }

    
    
    

    
}
