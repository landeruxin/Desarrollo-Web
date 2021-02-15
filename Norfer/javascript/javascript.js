
$(()=>{


    $("#email").click((e)=>{
       window.location.href = "mailto:address@dmail.com";
    });

    $("#ubic").click((e)=>{
         window.open("https://www.google.com/maps/place/Norfer+Ingenieros/@43.3025158,-2.0117478,15z/data=!4m5!3m4!1s0x0:0xbcc094fbe096da82!8m2!3d43.3025158!4d-2.0117478", "_blank");

    });

    $("#tele").click((e)=>{
        window.location.href = "tel:943311335";
    });

    $("#p_email").click((e)=>{
        window.location.href = "mailto:address@dmail.com";
     });
 
     $("#p_ubic").click((e)=>{
          window.open("https://www.google.com/maps/place/Norfer+Ingenieros/@43.3025158,-2.0117478,15z/data=!4m5!3m4!1s0x0:0xbcc094fbe096da82!8m2!3d43.3025158!4d-2.0117478", "_blank");
 
     });
 
     $("#p_tele").click((e)=>{
         window.location.href = "tel:943311335";
     });


});