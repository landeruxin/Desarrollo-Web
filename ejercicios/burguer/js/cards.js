//La función ajax sirve para conectarse desde javascript con otros sitios
//y permite intercambiar datos sin tener que recargar la página
/**
 * Cuando se envía una petición ajax la ejecución del código sigue hacia delante
 * sin esperar la respuesta
 */

$.ajax({
    url: "js/datos.json",
    success: function(result) {
        //Aquí tenemos la respuesta de la petición en caso de éxito
        crearCards(result);
    },
    error: function(error) {
        //Aquí tenemos la respuesta de la petición en caso de error
        alert("Ha ocurrido un error. No es posible comunicarse con el servidor");
    }
});


$("#carrito").hide();

function crearCards(productos) {
    let texto = "";

    productos.forEach(producto => {
        texto += `<div class="col-2 card-group">
        <div class="card my-3 p-1 shadow-sm">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-primary" onclick="carrito('${producto.nombre}')">Quiero una</button>
            </div>
        </div>
        </div>`;
    });

    document.getElementById("contenedorProductos").innerHTML = texto;
}