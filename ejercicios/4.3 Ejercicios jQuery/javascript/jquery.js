// // // Compruebo que el html encuentra el archivo jquery
// $(()=>{
//     alert("Hola");
// });



$(()=>{


    /*1.	Crea un documento con dos párrafos
        a.	Cuando el ratón pase por encima de cada párrafo ha de mostrarse un texto antes que diga “Estás sobre el párrafo”
        b.	Cuando el ratón abandone el párrafo ha de mostrarse un texto después que diga “No me abandones”*/

    $(".parrafo").mouseover((e)=>{
       alert("Estás sobre el párrafo");
    });

    $(".parrafo").mouseout((e)=>{;
        alert("No me abandones");
    });

    /*2.	Añade dos botones
        a.	Al pulsar el primero se crea un párrafo nuevo con el texto “Pulsa el otro botón para ver la imagen”. Utiliza el método text()
        b.	Al pulsar el segundo muestra una imagen que creas utilizando el método html() */

    $("#b1").click((e)=>{
        $("#parrafos p").last().text("Pulsa el otro botón para ver la imagen");
    });

    $("#b2").click((e)=>{
        $("#container2").html('<img src="fotos/getaria.jpg"/>');
    });

    /*3.	Añade dos botones más y una imagen
        a.	Cuando se pulse el primero añade un párrafo antes de la imagen con la descripción de la misma utilizando before()
        b.	Cuando se pulse el segundo añade otra imagen después de la imagen de antes
        c.	Cuando hagas click sobre la imagen que has creado antes que esta se elimine utilizando remove() */

    $("#b3").click((e)=>{
        $("#foto").before( "<p>Foto de Getaria, Gipuzkoa</p>" );
    });
    
    $("#b4").click((e)=>{
          $("#foto").after('<img id="foto1" src="fotos/getaria.jpg">');
        
    });
    
    $("#foto1").click((e)=>{
       $("foto1").remove();
    });

    /* 4.	Crea un párrafo con class=”cursiva negrita”
        a.	Crea un css con reglas para las clases cursiva y negrita
        b.	Crea un botón debajo del párrafo con el texto “Quitar estilos” 
        c.	Al pulsar sobre el botón quita los estilos al párrafo anterior con removeClass()
        d.	Crea otro botón que haga lo contrario, le añada los estilos al párrafo con addClass()
        e.	Crea otro botón que haga el trabajo de los dos anteriores con toggleClass() */

    $("#b5").click((e)=>{
        $("#container4 p").removeClass();
    });

    $("#b6").click((e)=>{
        $("#container4 p").addClass("cursiva_negrita");
    });

    $("#b7").click((e)=>{
        $("#container4 p").toggleClass("cursiva_negrita");
    });

    $( document ).ready((e)=> {
        $("#cab").addClass("grande");
                window.onscroll = () => {
                    cambioCab();
                }

    });

    cambioCab = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#cab").removeClass("grande").addClass("peque");
        } else {
            $("#cab").removeClass("peque").addClass("grande");
        }
    }


});