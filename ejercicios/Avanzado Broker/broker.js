    var contador = 100;

    var capital = 1000;

    var accion = 0;

    var valor = accion * contador;

function inicio(){

    
    var nombre = prompt("Introduzca su nombre:");

    var frase = "Jugador: "+nombre

    document.getElementById('nombre').innerHTML='<p>'+frase+'</p>';

    

    document.getElementById('v1').innerHTML=capital;

    document.getElementById('v2').innerHTML=contador;

    document.getElementById('v3').innerHTML=accion;

    document.getElementById('v4').innerHTML=valor;

}


function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

setTimeout(contador=contador*random(-50,50),5000);


function comprar(){



    if(capital>=contador){
        v3 = v3 +1;
        v2 = v2 - v1;
        v4 = v3 * v1;
    }

    alert(v1 + v2 + v3 + v4);
    

    document.getElementById('v1').innerHTML=v1.Number;

    document.getElementById('v2').innerHTML=v2;

    document.getElementById('v3').innerHTML=v3;

    document.getElementById('v4').innerHTML=v4;



}

function vender(v1,v2,v3,v4){

    v1 = v1 + 2;

    alert(v1);

    var a1 = Number("v1");
    var a2 = Number("v2");
    var a3 = Number("v3");
    var a4 = Number("v4");


    if(a3>0){
        a3 = a3 - 1;
        a2 = a2 + a1;
        a4 = a3 * a1;
    }

    

    document.getElementById('v1').innerHTML=a1;

    document.getElementById('v2').innerHTML=a2;

    document.getElementById('v3').innerHTML=a3;

    document.getElementById('v4').innerHTML=a4;
}
