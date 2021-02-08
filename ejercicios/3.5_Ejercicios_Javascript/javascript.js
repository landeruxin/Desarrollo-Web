
function Pelicula (titulo, descripcion, img) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.img = img;
}



var titulos = ["Mi vecino Totoro (V.O.S.)","LUPIN III The First","Hasta el cielo","El profesor de persa","El padre","Hope","Mi niña","Nuestros mejores años","Las niñas","Crash (V.O.S.)"];
var descripciones = ["Satsuki y Mei son dos niñas que se mudan al campo junto con su padre, un profesor de universidad. Padre e hijas comienzan a vivir en el Japón de los 50 en una vieja casa campestre, cercana al hospital donde la madre de las niñas trata de recuperarse de una grave enfermedad. El nuevo hogar de las pequeñas esconde nuevos y emocionantes misterios, entre ellos, la presencia de unas pequeñas y oscuras criaturas del polvo que habitan la casa. Las niñas conocerán también a Totoro, una gigantesca y simpática criatura que vive en el bosque que rodea su nuevo hogar.",
"Lupin y Leticia, una joven amante de la arqueología, se enfrentan al desafío del “Bresson Diary” que ni tan siquiera el Arsene Lupin original pudo resolver. Se trata del único tesoro que el legendario ladrón de guante blanco Arsene Lupin no pudo robar en toda su vida. Según la leyenda, aquel que sea capaz de desentrañar sus secretos podrá adquirir una inmensa fortuna. Lambert, un investigador de una organización secreta que también busca el “Bresson Diary”, y Gerald, un hombre misterioso que mueve los hilos de la organización se interponen en su camino. ¿Cuál es la sorprendente verdad oculta tras “Bresson Diary”?.",
"Ángel es un chico del extrarradio cuya vida cambiará para siempre el día que conoce a Estrella en una discoteca. Tras una pelea con Poli, el posesivo novio de la chica, éste descubre que Ángel tiene talento para meterse en problemas y, lo más importante, para salir de ellos. Por eso le anima a unirse a su banda de aluniceros que tiene en jaque a la Policía. La ambición de Ángel le hará sumergirse en una pirámide de robos, dinero fácil y turbios negocios, que le llevarán de Madrid a Ibiza. Su habilidad también le convertirá en el protegido de Rogelio, un capo que controla el mercado negro madrileño, y Sole, su hija, se encaprichará con él.",
"Francia, 1942. Gilles es arrestado por soldados de las SS junto con otros judíos y enviado a un campo de concentración en Alemania. Allí consigue evitar la ejecución al jurar a los guardias que no es judío, sino persa. Gracias a esta artimaña, Gilles consigue mantenerse con vida, pero tendrá que enseñar un idioma que no conoce a uno de los oficiales del campo, interesado en aprenderlo. Al tiempo que la relación entre ellos aumenta, las sospechas de los soldados crecen.",
"Anthony, un hombre mordaz de 80 años, algo travieso y que tercamente ha decidido vivir solo, rechaza todos y cada uno de los cuidadores que su hija Anne intenta contratar para que le ayuden en casa. Anne está desesperada porque ya no puede visitarle a diario y siente que la mente de su padre empieza a fallar y se desconecta cada vez más de la realidad por culpa de la demencia. Dado el ir y venir de sus recuerdos, ¿cuánto de su propia identidad podrá recordar con el paso del tiempo? Anne sufre la paulatina pérdida de su padre a medida que su mente se deteriora, ¿pero no tiene ella derecho a vivir también su propia vida?.",
"La relación entre una pareja de artistas es puesta a prueba cuando a ella le descubren que tiene una enfermedad que amenaza con robarle la vida. ¿Qué sucede con el amor cuando a una mujer de mediana edad le pronostican tres meses de vida? Anja y Tomas viven en familia junto a sus hijos biológicos e hijastros pero, durante años, la pareja se ha distanciado. Cuando Anja recibe el diagnóstico de cáncer cerebral terminal el día antes de Navidad, su vida se rompe poniéndose a prueba el amor desatendido. Drama familiar basado en la historia personal de la propia directora del largometraje, Maria Sødahl.",
"Héloïse es una madre de tres hijos que tiene una pequeña crisis cuando la más pequeña de todos ellos, Jade, decide que al cumplir los dieciocho años abandonará su vida en Francia para seguir con sus estudios en Canadá. A medida que se acerca el momento de que Jade continúe su vida lejos de casa, Héloïse ve aumentar su estrés y no puede parar de pensar en todos los momentos vividos junto a su pequeña. La película está basada en una experiencia personal de la propia directora, quien vivió la marcha de su hija menor a la universidad con un ambivalente conflicto interno.",
"La historia de cuatro grandes e íntimos amigos (Giulio, Gemma, Paolo y Riccardo) contada en el transcurso de cuarenta años, desde 1980 hasta la actualidad. Es un viaje desde la adolescencia a la edad adulta. Sus esperanzas, sus decepciones, sus éxitos y sus fracasos son el nexo de unión de una gran historia de amistad y amor a través de la cual se habla también de la Italia y de los italianos de estas cuatro últimas décadas. Un gran mural que cuenta quiénes somos, de dónde venimos y también dónde irán y quiénes serán nuestros hijos, el gran círculo de la vida que se repite con las mismas dinámicas a pesar de ser épocas diferentes.",
"Celia, una niña de 11 años, estudia en un colegio de monjas en Zaragoza y vive con su madre. Brisa, una nueva compañera recién llegada de Barcelona, la empuja hacia una nueva etapa en su vida: la adolescencia. En este viaje, en la España de la Expo y de las Olimpiadas de 1992, Celia descubre que la vida está hecha de muchas verdades y de algunas mentiras. La directora Pilar Palomero explica sobre su ‘ópera prima’ que “de los 4 a los 14 años fui educada en un colegio de monjas sólo para niñas. Llevábamos uniforme, nos confesábamos una vez por semana y asistíamos a misa todos los miércoles. Pero cuando salíamos del colegio nos encontrábamos con una realidad bien diferente”.",
"James es un prestigioso científico cuya vida personal y profesional se encuentra en plena crisis. Una noche, cuando regresa a casa, sufre un accidente de tráfico. Desde ese momento su vida cambiará al establecerse una fuerte relación entre él y la doctora Remington, la otra víctima del accidente. Y es que inmediatamente después del choque de us vehículos los dos experimentarán una extraña atracción mutua. A partir de entonces la vida de James se precipitará hacia un oscuro mundo y prohibido dominado por el peligro, el sexo y la muerte."
];
var imagenes = ["fotos/pelicula1.jpg","fotos/pelicula2.jpg","fotos/pelicula3.jpg","fotos/pelicula4.jpg","fotos/pelicula5.jpg","fotos/pelicula6.jpg","fotos/pelicula7.jpg","fotos/pelicula8.jpg","fotos/pelicula9.jpg","fotos/pelicula10.jpg"];
var pelis = [];
function inicio(){
    
    for (var i = 0; i<titulos.length;i++){
        
        pelis[i] = new Pelicula(titulos[i],descripciones[i],imagenes[i]);
        
    }

    
    var padre = document.getElementById("botones");
    


    for(var j=0; j<10;j++){

        
        var radio = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = pelis[j].titulo+"<br>";
        label.setAttribute("for",pelis[j].titulo);
        radio.setAttribute("type","checkbox");
        radio.setAttribute("name","checkbox");
        radio.setAttribute("id",pelis[j].titulo);
        radio.setAttribute("onchange","validar()");
        radio.setAttribute("value",pelis[j].titulo);
        padre.appendChild(radio);
        padre.appendChild(label);


    }
    



}

function validar(){

    var limite = 0;

    for( var i = 0 ; i<pelis.length;i++){
        var check = document.getElementById(pelis[i].titulo)
        if (check.checked){
            limite = limite + 1;
        }
    }

    if(limite == 3){

        for( var j = 0 ; j<pelis.length;j++){
            var check = document.getElementById(pelis[j].titulo)
            if(check.checked==false){
                
            check.disabled = true;
            }
        }

        document.getElementById("boton").disabled = false;

    }else{
        for( var j = 0 ; j<pelis.length;j++){
            var check = document.getElementById(pelis[j].titulo)
            check.disabled = false;
        }

        document.getElementById("boton").disabled = true;
    }

}

function mostrar(){

    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "block";

    var lista = [];

    for( var j = 0 ; j<pelis.length;j++){
        var check = document.getElementById(pelis[j].titulo)
            if(check.checked){

                lista.push(pelis[j].titulo);
            }
    }

    for(var i = 0; i<3;i++){
        
        for(var z = 0; z<pelis.length;z++){
            if(lista[i]==pelis[z].titulo){
                document.getElementById("titulo"+(i+1)).innerHTML=pelis[z].titulo;
                document.getElementById("descripcion"+(1+i)).innerHTML=pelis[z].descripcion;
                document.getElementById("imagen"+(1+i)).src=pelis[z].img;

            }
        }
    }


}

function volver(){
    location.reload();
}






   