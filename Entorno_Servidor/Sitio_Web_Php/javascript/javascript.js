(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="nombre"]');
    var asunto = $('.validate-input input[name="asunto"]');
    var mensaje = $('.validate-input textarea[name="mensaje"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(asunto).val().trim() == ''){
            showValidate(asunto);
            check=false;
        }

        if($(mensaje).val().trim() == ''){
            showValidate(mensaje);
            check=false;
        }

        if(check==true){
                    
            window.location.href = "mailto:estudio@norferingenieros.com?subject="+$("#nombre").val()+"-"+$("#asunto").val()+"&body="+$("#texto").val();
        }

        return check;

        
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

})(jQuery);