
//Compruebo que el html encuentra este archivo
// alert("Hola");


//Compruebo que el html encuentra el archivo jquery
// $(()=>{
//     $("img").click((e)=>{
//         alert("Imagen tocada");
//     })
// });

//Javascript
//Decalara la variables



//Evento onload()
window.onload = function(){
    //Nuestro código
    // alert("Hola");

    //evento sobre la imagen con id img1

    document.getElementById("img1").addEventListener("click",avisar);


    //evento utilizando funciones anónimas
    document.getElementById("img2").addEventListener("click",function(){
        alert("Has hecho click sobre la segunda imagen");
    });


    //funciones flecha o arrow functions
    //A partir de ES6
    document.getElementById("img3").addEventListener("click",()=>{
        alert("Has hecho click sobre la tercera imagen");
    });


    //Las Funciones flecha pueden no llevar paréntesis si tiene argumento
    document.getElementById("img3").addEventListener("click",e =>{
        alert("Has hecho click sobre la tercera imagen");
    });

};


//Las demñas funciones las ponemos fuera de la funcion onload
function avisar(){
    alert("Has hecho click sobre la primera imagen");
}