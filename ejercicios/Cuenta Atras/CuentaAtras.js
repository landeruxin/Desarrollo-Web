var hoy = new Date();
var dia = 0;
var hora = 0;
var minuto = 0;
var segundo = 0;
var intervalo ;

function inicio(){

    //COJO LOS VALORES QUE HA INTRODUCIDO EL USUARIO

    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    

    //EL MODO DE INSERCIÓN DE LA FECHA ES YYYY-MM-DD, POR ESO LE CAMBIO LA '-' POR '/'
    fecha = fecha.replace("-","/"); //PRIMER CAMBIO
    fecha = fecha.replace("-","/"); //SEGUNDO CAMBIO

    //CREO UNA VARIABLE PARA JUNTAR LA FECHA Y HORA Y CREAR EL OBJETO
    // OBJETO --> DATE(YYYY/MM/DD HH:MM:SS)
    var fechaEntera =fecha+" "+hora+":00";

    //CREO EL OBJETO CON LA FECHA DEL EVENTO
    var nuevaFecha = new Date(fechaEntera);


    //MIRO SI A INTRODUCIDO NOMBRE
    if(nombre != ""){
        
        //LE INTRODUZCO EL NOMBRE DEL EVENTO AL TITULO DE LA SIGUIENTE PARTE (DIV TEMPORIZADOR)
        document.getElementById("evento").innerHTML ="Evento: "+ nombre;

        //MIRO SI A INTRODUCIDO FECHA
        if(fecha != ""){

            
            //MIRO SI A INTRODUCIDO HORA
            if(hora != ""){

                //COMPARO LA FECHA DEL EVENTO CON LA DE AHORA MISMO
                if(nuevaFecha.getTime()> hoy.getTime()){

                    //PASO EL OBJETO DE LA FECHA DEL EVENTO AL MÉTODO DE CALCULAR
                    calcular(nuevaFecha);
                }else{
                    alert("Introduzca una fecha futura!");
                }
            }else{
                alert("Debe de introducir una hora al evento!");
            }
        }else{
            
            alert("Debe de introducir una fecha al evento!");
        }
        
    }else{
        alert("Debe de introducir un nombre del evento!");
    }

}

function calcular(fecha){


    //RESTO LOS VALORES DE SEGUNDO PARA SABER CUANTO TIEMPO FALTAN EN SEG HASTA EL EVENTO
    var segundos = fecha.getTime() - hoy.getTime();

    //LOS  VALORES LOS DA EN MILISEGUNDOS, POR LO QUE LO DIVIDO ENTRE 1000
    segundos = segundos / 1000;

    //CALCULO DE MANERA REDONDEADA CUANTOS DIAS COMPONE ESOS SEGUNDOS    
    dia = Math.trunc(segundos/86400);

    //LE RESTO LOS SEGUNDOS QUE YA HEMOS CALCULADO PARA LOS DIAS Y ASI SUCESIVAMENTE
    //CON LOS MINUTOS Y SEGUNDOS
    segundos = segundos - dia*86400;
    hora = Math.trunc(segundos / 3600);
    segundos = segundos - hora*3600;
    minuto = Math.trunc(segundos / 60);
    segundos = segundos - minuto * 60;
    segundo = Math.trunc(segundos);
    

    //HAGO INVISIBLE LA PRIMERA PARTE Y MOSTRAMOS LA SEGUNDA CON EL TEMPORIZADOR
    document.getElementById("introduccion").style.display="none";
    document.getElementById("temporizador").style.display="block";

    //DIBUJO LOS DATOS OBTENIDOS POR PRIMERA VEZ Y LUEGO COMENZAMOS CON EL INTERVALO
    pintar();

    empezarIntervalo();
}


function empezarIntervalo(){
    //DEFINIMOS EL INTERVALO DE 1 SEGUNDO Y EL MÉTODO A EJECUTAR
    intervalo  = setInterval(restar,1000);
}


function pintar(){

    //AQUI PINTAMOS LOS VALORES DE LA CUENTA ATRÁS 
    
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("hora1").innerHTML = hora;
    document.getElementById("minuto").innerHTML = minuto;
    document.getElementById("segundo").innerHTML =segundo;
}

function restar(){


    //MIRO SI TODOS LOS VALORES SON 0, QUE SERÍA QUE HA TERMINADO LA CUENTA ATRAS
    if(minuto == 0 && hora == 0 && segundo == 0 && dia == 0){
        //SI ES ASÍ, TERMINAMOS CON EL INTERVALO
        clearInterval(intervalo);
        //Y PASAMOS AL MÉTODO FINAL
        fraseFinal();
    }else{
        //EN CASO CONTRARIO, ES QUE EL TEMPORIZADOR NO HA TERMINADO
        //VAMOS RESTANDO UN SEGUNDO A LOS SEGUNDOS, MENOS CUANDO ES 0. EN ESE CASO 
        //LO CONVERTIMOS EN 59. LOS MISMO CON LAS HORAS Y DÍAS (EN ESTE CASO A 23)
        //CUANDO SE PASA DE 0 A 59 O 23, MIRAMOS SI HAY UN VALOR SUPERIOR, Y SI ES
        //ASÍ LE RESTAMOS 1.EL VALOR SUPERIOR DE SEGUNDO ES MINUTO, DE MINUTO ES HORA, ETC
        if(segundo > 0 ){
            segundo = segundo - 1;
        }else{
            segundo = 59;
            if(minuto > 0){
                minuto = minuto -1;
            }else{
                minuto = 59;
                if(hora > 0){
                    hora = hora -1;
                }else{
                    hora = 23;
                    if(dia > 0){
                        dia = dia -1;
                    }
                }
            }

    }

    
    }

    //DESPUÉS DE CADA CAMBIO PINTAMOS LOS RESULTADOS
    pintar();


}


function fraseFinal(){

    //HACEMOS INVISIBLE EL TEMPORIZADO Y MOSTRAMOS LA FRASE FINAL
    document.getElementById("temporizador").style.display="none";
    document.getElementById("terminado").style.display="block";

    var nom = document.getElementById("nombre").value;

    document.getElementById("final").innerHTML = "¡El evento "+nom+" empezará ahora!";
    
}



function finalizar(){
    //SI LE DA AL BOTÓN DE FINALIZAR EL EVENTO O CREAR UNO NUEVO, RECARGAMOS LA PÁGINA
    location.reload();
    
}