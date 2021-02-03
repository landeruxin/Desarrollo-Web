
function inicio(){
    var contador = 1;
    var contraseña = false;
    var pregunta;

    alert("4.	Realizar una app que pida por pantalla una contraseña.\na.	La contraseña correcta es cebanc\nb.	Pedir con un bucle while la contraseña hasta que se introduzca la correcta\nc.	Dar tres oportunidades de error\nd.	Mostrar un mensaje contraseña correcta o se agotaron los intentos");
    while(contador < 4 && contraseña == false){
        pregunta = prompt('Intento '+contador+'. Introduzca la contraseña:');
        if(pregunta.toLowerCase() =="cebanc"){
            contraseña = true;
            alert("Contraseña correcta!");
        }else{
            alert("Contraseña incorrecta!");
        }
        contador = contador + 1;
    }
    if(contraseña == true){
        alert("Ha entrado a la página de cebanc!");

    }else{
        alert("Ha fallado 3 veces. Intentelo mañana de nuevo.");
    }
}
