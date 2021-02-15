// // // Compruebo que el html encuentra el archivo jquery
// $(()=>{
//     alert("Hola");
// });


//2.	Al cargar el documento haz oculta los div con la función hide()
    
$(()=>{
    $( document ).ready(function() {
        $("#container div").hide();
    });

    //3.	Crea un botón que al pulsar muestre los div con la función fadeIn() aplicando a cada uno una velocidad diferente
    $("#b1").click((e)=>{
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(2);
        $("#div3").fadeIn(300);
    });
    //4.	Crea otro botón que los vuelva a mostrar cada uno con una velocidad diferente
    $("#b2").click((e)=>{
        $("#div1").fadeIn(5);
        $("#div2").fadeIn(2800);
        $("#div3").fadeIn(800);
    });


    //5.	Crea otro botón que los muestre u oculte con fadeToggle(), cada uno con su velocidad
    //fadeTo() 

    $("#b3").click((e)=>{
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(2);
        $("#div3").fadeToggle(300);
    });

    //6.	Crea otro botón que cambie la opacidad de los div con diferentes velocidades y a diferentes valores, por ejemplo 0.1, 0.5, 0.8

    $("#b4").click((e)=>{
        $("#div1").fadeTo(1000,0.1);
        $("#div2").fadeTo(2,0.2);
        $("#div3").fadeTo(300,0.6);
    });

    //7.	Añade otro div que contenga tres imágenes de modo que todas se vean con una opacidad de 0.5 y 
    // cuando se pase el ratón por encima de una la opacidad de esta pase a 1, al salir vuelva a 0.5 
    

    $("#imagen1").mouseover((e)=>{
        
        $("#imagen1").fadeTo(300,1);        
    });

    $("#imagen1").mouseout((e)=>{
        $("#imagen1").fadeTo(300,0.5)
    });

    $("#imagen2").mouseover((e)=>{
        
        $("#imagen2").fadeTo(300,1);        
    });

    $("#imagen2").mouseout((e)=>{
        $("#imagen2").fadeTo(300,0.5)
    });

    $("#imagen3").mouseover((e)=>{
        
        $("#imagen3").fadeTo(300,1);        
    });

    $("#imagen3").mouseout((e)=>{
        $("#imagen3").fadeTo(300,0.5)
    });
    
    /* e.	Al hacer click sobre un h2 
            i.	haz que se muestre u oculte su imagen y párrafo correspondientes 
            ii.	que se oculten los demás párrafos e imágenes
            iii.	que cambie el color de fondo y el estilo del texto del h2 cuya 
                    imagen y texto se están mostrando */

    $("#titulo1").click((e)=>{
        $("#img1").slideToggle(1000);
        $("#texto1").slideToggle(1000);
        $("#img2").slideUp(1000);
        $("#texto2").slideUp(1000);
        $("#img3").slideUp(1000);
        $("#texto3").slideUp(1000);
        $("#titulo1").css({"background-color":"blue","color":"white","font-style":"oblique"});
        $("#titulo2").css({"background-color":"white","color":"black","font-style":"normal"});
        $("#titulo3").css({"background-color":"white","color":"black","font-style":"normal"});

    });

    $("#titulo2").click((e)=>{
        $("#img2").slideToggle(1000);
        $("#texto2").slideToggle(1000);
        $("#img1").slideUp(1000);
        $("#texto1").slideUp(1000);
        $("#img3").slideUp(1000);
        $("#texto3").slideUp(1000);
        $("#titulo2").css({"background-color":"blue","color":"white","font-style":"oblique"});
        $("#titulo1").css({"background-color":"white","color":"black","font-style":"normal"});
        $("#titulo3").css({"background-color":"white","color":"black","font-style":"normal"});

    });

    $("#titulo3").click((e)=>{
        $("#img3").slideToggle(1000);
        $("#texto3").slideToggle(1000);
        $("#img2").slideUp(1000);
        $("#texto2").slideUp(1000);
        $("#img1").slideUp(1000);
        $("#texto1").slideUp(1000);
        $("#titulo3").css({"background-color":"blue","color":"white","font-style":"oblique"});
        $("#titulo2").css({"background-color":"white","color":"black","font-style":"normal"});
        $("#titulo1").css({"background-color":"white","color":"black","font-style":"normal"});

    });

    /*    setTimeout()
    10.	Crea otro div como los anteriores que oculte su contenido al cargar el documento
        a.	Al hacer click sobre su h2 haz que se muestre su contenido por 3 segundos*/

    $("#titulo4").click((e)=>{
        $("#img4").slideToggle(10);
        $("#texto4").slideToggle(10);
        setTimeout(function() {            
            $("#img4").slideToggle(10);
            $("#texto4").slideToggle(10);
        }, 3000)
    });

    $("#titulo5").click((e)=>{
        $("#img5").slideToggle(10);
        $("#texto5").slideToggle(10);
        setTimeout(function() {            
            $("#img5").slideToggle(10);
            $("#texto5").slideToggle(10);
        }, 3000)
    });

    $("#titulo6").click((e)=>{
        $("#img6").slideToggle(10);
        $("#texto6").slideToggle(10);
        setTimeout(function() {            
            $("#img6").slideToggle(10);
            $("#texto6").slideToggle(10);
        }, 3000)
    });

    /*11.	Crea un div de tamaño 100 x 100 y algún color de fondo
        a.	Al hacer click sobre el div este debe moverse hasta la parte derecha de la pantalla y pasado un segundo volver a su posición inicial
        b.	Crea un botón que al hacer click cree la siguiente animación sobre el div
            i.	Desplazar hacia la derecha 300px
            ii.	Cambiar opacidad a 0.5
            iii.	Cambiar el tamaño a 200 x 200
            iv.	Cambiar el color de fondo */


    $( "#cuadrado" ).click((e) =>{
        $( "#cuadrado" ).animate({
            left: "+=800"
        }, {
          duration: 1000,
          complete: function() {
            $("#cuadrado").css("left","48vw");
          }
        });
      });

      $("#b5").click((e)=>{
        $( "#cuadrado" ).animate({
            left: "+=300",
            opacity:0.5,
            width:200,
            height:200
           
        }, {
          duration: 1000,
          complete: function() {
            $("#cuadrado").css("background-color","blue");
          }
        });
      });

      $("#b6").click((e)=>{
        $( "#cuadrado" ).animate({
            left: "-=300",
            opacity:1,
            width:100,
            height:100
        }, {
          duration: 1000,
          complete: function() {
            $("#cuadrado").css("background-color","yellow");
          }
        });
      });

      /*12.	Crea otro div de tamaño inicial 100 x 100 y algún color de fondo
            a.	Crea un botón que al pulsar
                i.	Desplace el div 30px a la derecha
                ii.	Aumente el tamaño en 20px
                iii.	Disminuya la opacidad en 0.1
            b.	Crea otro botón que al pulsar haga lo contrario que el botón anterior
 */
        $("#b7").click((e)=>{
            $( "#cuadrado1" ).animate({
                left: "+=30",
                opacity:0.1,
                width:120,
                height:120
            }, {
            duration: 1000,
            });
        });

        $("#b8").click((e)=>{
            $( "#cuadrado1" ).animate({
                left: "-=30",
                opacity:1,
                width:100,
                height:100
            }, {
            duration: 1000,
            });
        });

        /*13.	Crea un h2 al principio del documento con algún texto que tenga
    a.	 un width inicial del 50% 
    b.	una opacidad de 0.2
    c.	un tamaño de fuente de 0.2em
    d.	crea una animación para el h2 para cuando se cargue el documento que al final el h2 tenga
        i.	un width del 100%
        ii.	una opacidad de 1
        iii.	un tamaño de fuente de 2em
         */

        $( document ).ready((e) =>{
            $( "#tit" ).animate({
                opacity:1,
                width:"100%",
                fontSize: "2em"
            }, {
            duration: 1000,
            });
        });

        /*14.	Crea un menú  con una lista y cuatro enlaces al principio del documento, después del h2
                a.	Pon un icono encima del menú
                b.	Haz que el menú aparezca oculto al principio con un margin-left 
                    negativo del ancho del menú
                c.	Dale una posición absoluta y un z-index: 999 para que se mantenga 
                    en el sitio y aparezca siempre por encima de los demás elementos
                d.	Al hacer click sobre el icono haz que aparezca o desaparezca con una 
                    animación
 */     

        $("#icono").click((e)=>{
            $("ul").toggle(
                function(){
                    $('ul').animate({
                        marginLeft: "100vw",
                        display: "block"

                    }, 500);  
                },
                function(){
                    $('ul').animate({
                        marginLeft: "40vw",
                        display: "none"
                    }, 500);
                 
            });
        });
});