var total;
var listaNombre = [];
var listaCantidad = [];
var listaPrecio = [];
var listaImagenes = [];
var bocatas = ["Bonito y anchoa", "Huevos rotos","Vegetal con pollo"];
var precioBocatas = [7.5,6,5.5];
var imagenBocatas = ["bocadillo1.jpg","bocadillo2.jpg","bocadillo3.jpg"];
var bebidas = ["Agua","Korricolari","Txakoli Ameztoi"];
var precioBebidas = [1,2.2,12];
var imagenBebidas = ["agua.jpg","refresco.jpg","txakoli.jpg"];
var contador = 0;


function inicio(){
    total = 0;
}





function sumar(num , clase){

   

    let = posicion = 0;
    let existe = false;

    if(clase==1){
        alert("Ha añadido al carrito un bokata de "+bocatas[num]);
        total = total + precioBocatas[num];
        for(let i=0; i<listaNombre.length;i++){
            if(listaNombre[i]==bocatas[num]){
                posicion = i;
                existe = true;
            }
        }

        if(existe == true){
            listaCantidad[posicion] = listaCantidad[posicion] + 1;
        }else{
            
        listaNombre.push(bocatas[num]);
        listaCantidad.push(1);
        listaPrecio.push(precioBocatas[num]);
        listaImagenes.push(imagenBocatas[num]);
        }

        
        contador = contador + 1;
        carritoVacio();
        pintarCarrito();
    }else if(clase==2){
        alert(bebidas[num]+ " ha sido añadido al carrito.");
        total = total + precioBebidas[num];
        for(let i=0; i<listaNombre.length;i++){
            if(listaNombre[i]==bebidas[num]){
                posicion = i;
                existe = true;
                
            }
        }

        if(existe == true){
            listaCantidad[posicion] = listaCantidad[posicion] + 1;
        }else{
            
        listaNombre.push(bebidas[num]);
        listaCantidad.push(1);
        listaPrecio.push(precioBebidas[num]);
        listaImagenes.push(imagenBebidas[num]);
        }
        
        contador = contador + 1;
        carritoVacio();
        pintarCarrito();
    }
    


   
}

function enseñar(num){
    let lista = ["Bonito, anchoas, mahonesa, guindillas y huevo duro.",
    "Huevos rotos, txistorra y jamón.",
    "Tomate, lechuga, mahonesa, esparragos, pollo y pan de semilla.",
    "Agua Alzola (50cl).",
    "Refresko Korricolari.",
    "Txakoli de Getaria Ameztoi."];
    let precios = [7.5,6,5.5,1,2.2,12];

    document.getElementById('a'+num).innerHTML = lista[num]+"<br><br>"+precios[num]+" €";   

}

function quitar(num){
    document.getElementById('a'+num).innerHTML = "";   
}

function fin(){

    let frase ="";

    for (var i=0; i < listaNombre.length; i++){
        frase = frase + "-"+listaNombre[i]+"  x  "+listaCantidad[i]+"  x  "+listaPrecio[i]+"€    =   "+listaCantidad[i]*listaPrecio[i]+"€\n";
    }

    alert(frase+"\n\nPrecio total = "+total+"€")


}

function cerrarCarrito(){
    document.getElementById("carrito").style.display="none";
    document.getElementById("boton_carro").style.display="block";
}

function abrirCarrito(){
    document.getElementById("carrito").style.display="block";
    document.getElementById("boton_carro").style.display="none";

}

function carritoVacio(){
    if(contador>0){
        
        document.getElementById("vacio").style.display="none";
        document.getElementById("parte3").style.display="flex";
        document.getElementById("total").style.display="block";
        document.getElementById("fila").style.display="flex";
        

    }else{
        
        document.getElementById("vacio").style.display="block";
        document.getElementById("parte3").style.display="none";
        document.getElementById("fila").style.display="none";
    }
}

function pintarCarrito(){
    for(var i=0; i<listaNombre.length;i++){
        alert(listaNombre[i]);
        document.getElementById('parte2').innerHTML='<div class="fila1">'+
       ' <img src="'+listaImagenes[i]+'" alt="">'+
       ' <p id="nombre">'+listaNombre[i]+'</p>'+
        '<p id="cantidad">'+listaCantidad[i]+'</p>'+
       ' <p id="guion1">-</p>'+
       ' <p id="precio">'+listaPrecio[i]+'</p>'+
       ' <p id="guion2">-</p>'+
       ' <p id="subtotal">'+listaCantidad[i]*listaPrecio[i]+'</p></div>';     
    }
}
