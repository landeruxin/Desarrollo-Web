var valores = [true, 5, false, "hola", "adios", 2];


if(valores[3].length > valores[4].length){
    
    alert ("1- La palabra más larga de la lista es : "+valores[3]);
}else{
    alert ("1- La palabra más larga de la lista es : "+valores[4]);
}

var resultado = valores[0]||valores[2];
alert("2.1- Este resultado debe de salir true: "+resultado);

resultado = valores[0]&&valores[2];
alert("2.2- Este resultado debe de salir false: "+resultado);

var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multi = valores[1] * valores[5];
var divis = valores[1] / valores[5];
var resto = valores[1] % valores[5];

alert("3.1 Suma: "+suma);
alert("3.2 Resta: "+resta);
alert("3.3 Multiplicación: "+multi);
alert("3.4 División: "+divis);
alert("3.5 Resto: "+resto);
 
