// // Compruebo que el html encuentra el archivo jquery
// $(()=>{
//     alert("Hola");
// });

//JQUERY
//Evento document.ready
$(document).ready(function(){
    alert("El documento está listo");
});


//otra forma de document.ready
$(function(){
    alert("El documento está listo");
});

//otra forma utilizando las funciones flecha o arrow
$(()=>{
    //Evento click sobre img3
    $("#img3").click((e)=>{
        console.log(e.target);
        console.log(e.currentTarfet);
        alert(`Has hecho click en la imagen ${e.target.src}`);
    });

});

