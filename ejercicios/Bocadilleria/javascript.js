var total;
var listaNombre = [];
var listaCantidad = [];
var listaPrecio = [];
var listaImagenes = [];
var bocatas = ["Bonito y anchoa", "Huevos rotos","Vegetal con pollo"];
var precioBocatas = [7.5,6,5.5];
var bebidas = ["Agua","Korricolari","Txakoli Ameztoi"];
var precioBebidas = [1,2.2,12];
var contador = 0;
var factura = 1;



function inicio(){
    total = 0;

    /* Inicializamos el LocalStorafe si es la primera vez dándole el valor de factura  */

    if(localStorage.getItem("factura")>factura){
        factura = parseInt(localStorage.getItem("factura"));
    }else{
        localStorage.setItem("factura",factura);
    }

    
}


/* Nos pasará el valor de la fila y si es un bocata o bebida. */




function sumar(num , clase){

   

    let posicion = 0;
    let existe = false;
    let nombre ="";
    let precio = 0;
    /* Caso del bocata*/
    if(clase==1){
        // alert("Ha añadido al carrito un bokata de "+bocatas[num]);
        total = total + precioBocatas[num];
        for(let i=0; i<listaNombre.length;i++){


            if(listaNombre[i]==bocatas[num]){
                posicion = i;
                existe = true;
                nombre = bocatas[num];
                precio = precioBocatas[num];
            }
        }
        /* Miramos si existe para cambiar las unidades o crear una nueva fila*/
        if(existe == true){
            listaCantidad[posicion] = listaCantidad[posicion] + 1;
            cambioFila(nombre,listaCantidad[posicion],precio)
        }else{
            
        listaNombre.push(bocatas[num]);
        listaCantidad.push(1);
        listaPrecio.push(precioBocatas[num]);
        nuevaFila(bocatas[num],precioBocatas[num]);
        }

        
        contador = contador + 1;
        carritoVacio();
        /* Caso de la bebida*/
    }else if(clase==2){
        // alert(bebidas[num]+ " ha sido añadido al carrito.");
        total = total + precioBebidas[num];
        for(let i=0; i<listaNombre.length;i++){
            if(listaNombre[i]==bebidas[num]){
                posicion = i;
                existe = true;
                
                nombre = bebidas[num];
                precio = precioBebidas[num];
                
            }
        }

        if(existe == true){
            listaCantidad[posicion] = listaCantidad[posicion] + 1;
            cambioFila(nombre,listaCantidad[posicion],precio)
        }else{
            
        listaNombre.push(bebidas[num]);
        listaCantidad.push(1);
        listaPrecio.push(precioBebidas[num]);
        
        nuevaFila(bebidas[num],precioBebidas[num]);
        }
        
        contador = contador + 1;
        carritoVacio();
    }
    


   
}

function enseñar(num){

    /* Descripciones a enseñar cuando está encima de la imagen*/
    let lista = ["Bonito, anchoas, mahonesa, guindillas y huevo duro.",
    "Huevos rotos, txistorra y jamón.",
    "Tomate, lechuga, mahonesa, esparragos, pollo y pan de semilla.",
    "Agua Alzola (50cl).",
    "Refresko Korricolari.",
    "Txakoli de Getaria Ameztoi."];
    let precios = [7.5,6,5.5,1,2.2,12];

    document.getElementById('a'+num).innerHTML = lista[num]+"<br><br>"+precios[num]+" €";   

}
/* Quitamos la descripción al salir de la imagen */
function quitar(num){
    document.getElementById('a'+num).innerHTML = "";   
}
/* Hacer invisible el carrito */
function cerrarCarrito(){
    document.getElementById("carrito").style.display="none";
    document.getElementById("boton_carro").style.display="block";
}

function pagar(){

    /*  Aqui creamos una ventana pdf imprimendo la parte que nos interesa en el carrito*/

    let frase ="";

    for (var i=0; i < listaNombre.length; i++){
        frase = frase + "-"+listaNombre[i]+"  x  "+listaCantidad[i]+"  x  "+listaPrecio[i]+"€    =   "+listaCantidad[i]*listaPrecio[i]+"€\n";
    }

    let ventana = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    ventana.defaultStatus;

    ventana.document.write('<html><head><title>Nº Factura: '+factura+'</title>');
    
    
    ventana.document.write('<style type="text/css">  p{font-size: 2vw;} #imprimir1{border: 1vw solid rgb(33, 153, 33); width:40vw; position:relative; left:29vw;} #tit{text-align:center; position:relative; top:-4vw;}body { font-size: 3.5vw; text-align:left;  } #cabec{ text-align:center; position:relative; top:-8vw;  border-bottom: 0.5vw dashed rgb(33, 153, 33);} #cabec p{font-size: 1.8vw;} #tit{font-size: 4.5vw;} #parte2{position:relative; top:-8vw; border-bottom: 0.5vw dashed rgb(33, 153, 33);} #parte2 p{position:relative; left: 2vw;} #parte3{margin-left:1vw;, position:relative; height:5vw; text-align:center; } #parte3 p{font-size:4vw; position: relative; left:2vw; top: -8vw;}</style>');

    document.getElementById("cabec").style.display="block";
    
    ventana.document.write('</head><body>');
    ventana.document.write(document.getElementById("imprimir").innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close(); // necessary for IE >= 10
    ventana.focus(); // necessary for IE >= 10
    document.getElementById("cabec").style.display="none";

    ventana.print();

    
    ventana.close();

    factura = factura + 1;
    localStorage.setItem("factura",factura);
    location.reload();



}

/* Hacemos visible le carrito e invisble el botón*/
function abrirCarrito(){
    document.getElementById("carrito").style.display="block";
    document.getElementById("boton_carro").style.display="none";

}
/* Miramos si el carrito está vacio para enseñar el texto avisando de ello.
En caso contrario se verá la fila */
function carritoVacio(){
    if(contador>0){
        
        document.getElementById("vacia").style.display="none";
        document.getElementById("parte3").style.display="flex";
        document.getElementById("total").style.display="block";
        document.getElementById("parte2").style.display="block";
        document.getElementById("pagar").style.display="block";
        document.getElementById("limpiar").style.display="block";
        abrirCarrito();

    }else{
        
        document.getElementById("vacia").style.display="block";
        document.getElementById("parte3").style.display="none";
        document.getElementById("fila").style.display="none";
        
        document.getElementById("parte2").style.display="none";
        
        document.getElementById("pagar").style.display="none";
        document.getElementById("limpiar").style.display="none";

    }
}
/* Creamos una nueva fila del elementi*/
function nuevaFila(nombre,precio){
    let frase ="";
    
        frase = "-"+nombre+"  x   1   x  "+precio+"€    =   "+precio+"€";
        var div = document.getElementById("parte2");
        var texto = document.createElement("p");
        texto.setAttribute("id",nombre);
        texto.innerHTML = frase;
        div.appendChild(texto); 

    
        document.getElementById("total").innerHTML = total+"€";
      
}
/* Cambios las unidades del elemento*/
function cambioFila(nombre,num,precio){
    document.getElementById(nombre).innerHTML = "-"+nombre+"  x   "+num+"   x  "+precio+"€    =   "+precio*num+"€";
    document.getElementById("total").innerHTML = total+"€";
}
/* Actualizamos la página para borrar el carrito */
function limpiar(){
    location.reload();
}