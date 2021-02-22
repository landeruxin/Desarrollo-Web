

jQuery(document).ready(function( $ ) {




	if(localStorage.getItem("vista")=="dia"){
		$("#copyrights").css("background","#5e5a5a");
		$("body").css({"background-color":"white","color":"black"});
		$("#sol").hide();
		$("#luna").show();
		$("#dia_noche").css({"background-color":"black","color":"yellow"});
		$("#tit").css("color","white");

	}else if(localStorage.getItem("vista")=="noche"){
		$("body").css({"background-color":"black","color":"white"});
		$("#copyrights").css("background","black");
		$("#sol").show();
		$("#luna").hide();
		$("#dia_noche").css({"background-color":"white","color":"black"});
		$("#tit").css("color","black");

	}

		$("#tit").slideDown(1500);
		$("#headerwrap").animate({
			opacity : 1
		}, 2000
		);

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });

    // Init Fancybox
    jQuery(".fancybox").fancybox();

    // Init Stellar
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40
	});
	
	$("#enviar").click((e)=>{
		window.location.href = "mailto:estudio@norferingenieros.com?subject="+$("#asunto").val()+"&body="+$("#mensaje").val();
	 });

	 $("#direccion").click((e)=>{
		window.open("https://www.google.com/maps/place/Norfer+Ingenieros/@43.3025158,-2.0117478,15z/data=!4m5!3m4!1s0x0:0xbcc094fbe096da82!8m2!3d43.3025158!4d-2.0117478", "_blank");

   });

   $("#telefono").click((e)=>{
	   window.location.href = "tel:943311335";
   });

   $("#sol").click((e)=>{
		$("#copyrights").css("background","#5e5a5a");
		$("body").css({"background-color":"white","color":"black"});
		$("#sol").hide();
		$("#luna").show();
		$("#dia_noche").css({"background-color":"black","color":"yellow"});
		$("#tit").css("color","white");
		localStorage.setItem("vista","dia");

   });

   $("#luna").click((e)=>{
		$("body").css({"background-color":"black","color":"white"});
		$("#copyrights").css("background","black");
		$("#sol").show();
		$("#luna").hide();
		$("#dia_noche").css({"background-color":"white","color":"black"});
		$("#tit").css("color","black");
		localStorage.setItem("vista","noche");

	});

  
});


