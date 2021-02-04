var frases = ["Te regalarán 5 bitcoins.","Te tocará la lotería.","Vivirás en Islandia.","Se te estropeará el coche.","Encontrarás un billete de 50€.","Escribirás un libro.","Te comprarás un barco."]

function inicio(){
    alert("1.	Crear una App que te adivine el futuro\n"+
"a.	Crear un array con 7 frases premonitorias\n"+
"b.	Cada vez que el usuario pulse un botón mostrar por pantalla una frase al azar");

    
}

function futuro(){
    //Valores entre 0 y 6, las posiciones del array
    var resultado = Math.floor((Math.random() * (6 + 1)));

    document.getElementById("frase").innerHTML = frases[resultado];
}