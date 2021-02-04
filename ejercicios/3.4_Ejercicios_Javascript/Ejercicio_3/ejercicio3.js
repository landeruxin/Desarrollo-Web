var imagenes = ["fotos/getaria1.jpg","fotos/getaria2.jpg","fotos/getaria3.jpg","fotos/getaria4.jpg","fotos/getaria5.jpg"]

var posicion;



function inicio(){

    var foto = document.getElementById("foto");

    posicion = Math.floor((Math.random() * (4 + 1)));

    foto.setAttribute("src",imagenes[posicion]);

    alert("3.	Crear una galería de imágenes\n"+
    "a.	Utilizar 5 imágenes\n"+
    "b.	Cuando se pulse el botón correspondiente la imagen cambia");
    
}

function anterior(){

    if (posicion==0){
        posicion = 4;

    }else{
        posicion = posicion - 1;
    }

    foto.setAttribute("src",imagenes[posicion]);

}

function siguiente(){

    if (posicion==4){
        posicion = 0;

    }else{
        posicion = posicion + 1;
    }

    foto.setAttribute("src",imagenes[posicion]);

}

