function inicio(){
    var palabra = prompt("Introduzca una palabra:");

    //a.	 Comprobar si contiene la letra e y en que posición

    var posicion = palabra.indexOf("e");

    if(posicion == -1){
        alert("La palabra que ha introducido no contiene la letra 'e");
    }else{
        alert("La palabra que ha introducido contiene la letra 'e' y su primera posición es:  "+(posicion+1));
    }

    //b.	Comprobar si empieza y si termina por vocal

    var primera = palabra.charAt(0);
    var ultima = palabra.charAt(palabra.length-1);
    primera.toUpperCase;
    ultima.toUpperCase;

    if(primera == "A" ||primera == "E" ||primera == "I" ||primera == "O" ||primera == "U"  ){
        alert("La primera letra de la palabra es una vocal.")
    }else{
        alert("La primera letra de la palabra es una consonante.")
    }

    if(ultima == "A" ||ultima == "E" ||ultima == "I" ||ultima == "O" ||ultima == "U"  ){
        alert("La última letra de la palabra es una vocal.")
    }else{
        alert("La última letra de la palabra es una consonante.")
    }


    /*2.	Dado el texto: ‘En un lugar de la mancha de cuyo nombre no quiero acordarme
a.	Buscar el string ‘mancha’ y mostrar su posición’
 */

    alert("2.	Dado el texto: 'En un lugar de la mancha de cuyo nombre no quiero acordarme'");

    var texto = "En un lugar de la mancha de cuyo nombre no quiero acordarme";


    posicion = texto.indexOf("mancha");

    alert("La posición de la palabra mancha es: "+(posicion+1));

    //b.	Mostrar los primeros 5 caracteres

    alert("Los 5 primeros caracteres son: "+texto.substring(0,5));


    //c.	Extraer los 3 últimos

    alert("Los 3 últimos caracteres son: "+texto.substring((texto.length-3),texto.length));

    //3.	Dada la cadena ‘Donostia’

    var donos = "Donostia";

    //a.	Comprobar la posición de la primera y última o. Mostrar el resultado

    alert("Dada la cadena ‘Donostia’\nLa primera 'o' está en la posición: "+(donos.indexOf("o")+1)+"\nLa última 'o' está en la posición: "+(donos.lastIndexOf("o")+1)+"");

    //4.	Dada la cadena ‘Donostia’

   // a.	Mostrar que carácter contiene en la posición 2 (empezando desde 1)


    alert("El carácter de Donostia en la posicion 2 es: "+donos.charAt(1));

   // b.	Mostrar cuantos caracteres contiene

   alert("La palabra Donostia tienes "+(donos.length+1)+"caracteres.");

}