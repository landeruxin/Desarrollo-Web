// // // Compruebo que el html encuentra el archivo jquery
// $(()=>{
//     alert("Hola");
// });



$(()=>{
    //Ocultar p1 al clicar a1
    $("#a1").click((e)=>{
        $("#p1").hide();
    });

    //Ocultar p2 al clicar a2
    $("#a2").click((e)=>{
        $("#p2").hide();
    });

    //Ocultar texto de la clase intro
    $("#a3").click((e)=>{
        $(".intro").hide();
    });

    //Ocultar primer párrafo con b1
    $("#b1").click((e)=>{
        $("#p3").hide();
    });

    //Ocultar último párrafo con b2
    $("#b2").click((e)=>{
        $("#p4").hide();
    });

    //Ocultar imágen

    $("#b3").click((e)=>{
        $("#foto").hide();
    });

    //Mostrar imágen

    $("#b4").click((e)=>{
        $("#foto").show();
    });

    //Mostrar / Ocultar imágen

   
    $("#b5").click((e)=>{
        $("#foto").toggle();
    });
    
    
});

