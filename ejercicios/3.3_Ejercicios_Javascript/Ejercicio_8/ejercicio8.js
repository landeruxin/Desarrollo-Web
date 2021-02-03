
    var primero = ["Ensalada Mixta","Tallarines a la crema de marisco","Alubias rojas con morcila","Rissoto de verduritas al queso","Marmitako de atún"];
    var segundo = ["Carrilleras al Oporto","Dorada a la plancha","Solomillo al Foie","Rape a la parrilla","Entrecot con su guarnición"];
    var postre = ["Flan","Mousse de limón","Arroz con leche","Pantxineta","Tarta de queso"];
    var imagen = ["fotos/flan.jpg","fotos/mousse.jpg","fotos/arroz.jpg","fotos/pantxineta.jpg","fotos/tarta.jpg"];
    var semana = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
function inicio(){



    mandar(0);

    
    
}

function mandar(num){
    document.getElementById("subtitulo").innerHTML ="El menu del día de hoy "+semana[num]+" es: ";
    document.getElementById("primero").innerHTML = primero[num];
    document.getElementById("segundo").innerHTML = segundo[num];
    document.getElementById("postre").innerHTML = postre[num];
    var foto = document.getElementById("foto");
    foto.setAttribute("src",imagen[num]);
}
