    var precio = 100;

    var capital = 1000;

    var accion = 0;

    var valor = accion * precio;

    var total;


    var precio_viejo;
    



    

function inicio(){

    setTimeout(function(){fin()},30000)

    empezarAleatorio();
    
    var nombre = prompt("Bienvenido al juego, recuerde que la duración de este es de 10 segundos. \n\nIntroduzca su nombre:");

    var frase = "Jugador: "+nombre;

    document.getElementById('nombre').innerHTML='<p>'+frase+'</p>';    

}


function reinicio(){

    setTimeout(function(){fin()},30000)

    empezarAleatorio();
  

}

    


function empezarAleatorio(){
    	
        setInterval(function(){random1()},1000); 
    	
    }



function random1() {
    var max = precio * 1.5;
    var min = precio * 0.5;
    var resultado = Math.floor((Math.random() * (max - min + 1)) + min);

    precio = resultado;



    pintar_resultado(precio);
    pintar();


    document.getElementById('cambio').innerHTML=''; 
    if(precio > precio_viejo){
        document.getElementById('cambio').innerHTML='<img class="cambio" src="subida.png">';  
        
    }else{
        document.getElementById('cambio').innerHTML='<img class="cambio" src="bajada.png">';
    }

    precio_viejo = precio;
    

    return precio;

    
    
}




function comprar(){



    if(capital>=precio){
        accion  = accion +1;
        capital = capital - precio;
        valor = accion * precio;
    }


    
   pintar();



}

function vender(){

    if(accion>0){
        accion = accion -1;
        capital = capital + precio;
        valor = accion * precio;
    }

    pintar();
   
}


function pintar(){
    

    document.getElementById('capital').innerHTML=capital;

    document.getElementById('accion').innerHTML=accion;

    document.getElementById('valor').innerHTML=valor;

}

function pintar_resultado(precio){
    
    document.getElementById('precio').innerHTML=precio;

    valor = accion * precio;

    document.getElementById('valor').innerHTML=valor;
}

function fin(){
    
    

    
    
    document.getElementById('todo').style.display = 'none'; 
    total = capital + valor;
    
    

    var frase1 = "Felicidades, ha batido el recor con un total de "+total+" euros.";
    var frase2 = "La suma de su capital y el valor en acciones es de: "+total+" euros.";


    if(total > localStorage.getItem("Record")){      
        
        
        document.getElementById('fin').innerHTML='<p>'+frase1+'</p><br><br><img id="copa" src="copa.png"><br><br><button id="repetir" type="submit" onclick="repetir()"> Repetir </button> <button id="salir" type="submit" onclick="salir()"> Salir </button>';
   
        localStorage.setItem("Record", total);
    }else{
        
        document.getElementById('fin').innerHTML='<p>'+frase2+'</p><br><br><button id="repetir" type="submit" onclick="repetir()"> Repetir </button> <button id="salir" type="submit" onclick="salir()"> Salir </button>';
    }

    
    
}

function repetir(){
    document.getElementById('fin').innerHTML=''; 
    document.getElementById('todo').style.display = 'block';  
    capital = 1000;
    reinicio();
}

function salir(){
    alert("Gracias por usar el programa, ¡Hasta la próxima!");
    window.close();
}
