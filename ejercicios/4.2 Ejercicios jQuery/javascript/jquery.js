// // // Compruebo que el html encuentra el archivo jquery
// $(()=>{
//     alert("Hola");
// });



$(()=>{


    //i.	Botón 1 oculta los enlaces con target = _blank

    $("#b1").click((e)=>{
        $("a[target='_blank']").hide();
    });

    //ii.	Botón 2 oculta los enlaces con target distinto de _blank

    $("#b2").click((e)=>{
        $("a[target!='_blank']").hide();
    });

    //iii.	Botón 3 oculta los h2 que no sean clase=”uno”
    $("#b3").click((e)=>{
        $("h2[class!='uno']").hide();
    });


    // i.	Al pulsar el primero cambia el color de fondo de las filas pares de la tabla

    $("#b4").click((e)=>{
        $("tr:even").css("background-color", "yellow");
    });


    // ii.	Al pulsar el segundo cambia el texto de las filas impares de la tabla a negrita

    $("#b5").click((e)=>{
        $("tr:odd").css("font-weight", "bold");
    });

    /*i. Al pasar el ratón sobre el párrafo cambia: 
            1.	El color de fondo
            2.	Le añade un padding de 10px
            3.	El color del texto        
     ii.Al salir el ratón del párrafo el padding vuelve a 0px*/
      
    $("#parrafo").mouseover((e)=>{
        $("#parrafo").css({"backgroud-color":"yellow","padding":"10px","color":"blue"})
    });

    $("#parrafo").mouseout((e)=>{;
        $("#parrafo").css("padding","0px");
    });
    
    /*Al pasar el ratón sobre ella:
        i.	La opacidad cambia a 1
        ii.	Le añade una sombra
    b.	Al salir el ratón, la imagen vuelve al estado anterior*/

    $("#foto").mouseover((e)=>{
        $("#foto").css({"opacity":"1","box-shadow":"0 0 30px"});
    });
    
    $("#foto").mouseout((e)=>{
        $("#foto").css({"opacity":"0.8","box-shadow":"0 0 0px"});
    });

    
});

