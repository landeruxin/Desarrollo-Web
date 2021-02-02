let total = 0.0;
let precioPizza = 5.0;
let cantidadPizza = 0.0;
let precioHamburguesa = 4.5;
let cantidadHamburguesas = 0;
let precioPasta = 5.5;
let cantidadPasta = 0.0;
let precioRefresco = 1.5;
let cantidadRefresco = 0.0;
let precioCafe = 1.4;
let cantidadCafe = 0.0;
let precioPostre = 3.0;
let cantidadPostre = 0.0;

//operador ++ le suma 1 a la variable total
//total++;

//operador -- le resta 1 a la variable total
//total--;

function carrito(elegido) {
    $("#carrito").show(1000);
    switch (elegido) {
        case "Burguer":
            cantidadHamburguesas++;
            //document.getElementById("cantidadHamburguesa").innerHTML = cantidadHamburguesas;
            $("#cantidadHamburguesa").html(cantidadHamburguesas);
            total = total + precioHamburguesa;
            break;
        case "Pasta":
            cantidadPasta++;
            document.getElementById("cantidadPasta").innerHTML = cantidadPasta;
            total = total + precioPasta;
            break;
        case "Pizza":
            cantidadPizza++;
            document.getElementById("cantidadPizza").innerHTML = cantidadPizza;
            total = total + precioPizza;
            break;
        case "Postre":
            cantidadPostre++;
            document.getElementById("cantidadPostre").innerHTML = cantidadPostre;
            total = total + precioPostre;
            break;
        case "Refresco":
            cantidadRefresco++;
            document.getElementById("cantidadRefresco").innerHTML = cantidadRefresco;
            total = total + precioRefresco;
            break;
        case "Café":
            cantidadCafe++;
            document.getElementById("cantidadCafe").innerHTML = cantidadCafe;
            total = total + precioCafe;
            break;
        default:
            break;

    }
    document.getElementById("totalCuenta").innerHTML = total.toFixed(2) + " €";

}

function pedir() {
    //Actualizamos los valores de las variables a cero
    cantidadPizza = 0;
    cantidadHamburguesas = 0;
    cantidadPasta = 0;
    cantidadRefresco = 0;
    cantidadPostre = 0;
    cantidadCafe = 0;

    //comprueba si tiene algo pedido
    if (total > 0) { //tiene algo pedido
        let mensaje = `Ok. El importe de tu pedido es ${total.toFixed(2)} € \n\nEn 10 minutos lo tienes`;
        alert(mensaje);
    } else { //no tiene algo pedido
        alert("No tienes nada pedido");
    }

    //actualiza el total a cero
    total = 0;

    //actualiza las cantidades que se muestran en pantalla
    document.getElementById("cantidadHamburguesa").innerHTML = cantidadHamburguesas;
    document.getElementById("cantidadPasta").innerHTML = cantidadPasta;
    document.getElementById("cantidadPizza").innerHTML = cantidadPizza;
    document.getElementById("cantidadPostre").innerHTML = cantidadPostre;
    document.getElementById("cantidadRefresco").innerHTML = cantidadRefresco;
    document.getElementById("cantidadCafe").innerHTML = cantidadCafe;
    document.getElementById("totalCuenta").innerHTML = total.toFixed(2) + " €";

}