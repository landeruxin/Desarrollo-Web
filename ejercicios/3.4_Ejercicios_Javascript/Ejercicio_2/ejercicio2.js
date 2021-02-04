var imagenes = ["fotos/getaria1.jpg","fotos/getaria2.jpg","fotos/getaria3.jpg","fotos/getaria4.jpg","fotos/getaria5.jpg"]

var posicion;



function inicio(){

    var foto = document.getElementById("foto");

    posicion = Math.floor((Math.random() * (4 + 1)));

    foto.setAttribute("src",imagenes[posicion]);

    alert("2.	Crear una App que muestre una imagen aleatoria de Donosti\n"+
    "a.	Cada vez que el usuario pulse la imagen esta cambia\n"+
    "b.	Utilizar al menos 5 imágenes");
    
}

function cambio(){

    if (posicion==4){
        posicion = 0;

    }else{
        posicion = posicion + 1;
    }

    foto.setAttribute("src",imagenes[posicion]);

}