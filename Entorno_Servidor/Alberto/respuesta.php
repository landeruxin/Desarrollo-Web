<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("./includes/inc_config.php"); ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
   <?php   include("./includes/inc_cabecera.php"); ?>
    <h1>Contacto</h1>
    <?php

    /*
    echo $_POST['nombre'];
    echo $_POST['nacido'];
    if (isset($_POST['html'])){
          echo $_POST['html'];
    } else {
        echo 'No has marcado html';
    }
    if (isset($_POST['css'])){
        echo $_POST['css'];
    }
    echo $_POST['js'];
    echo $_POST['php'];
    echo $_POST['observacion'];
    */

    ?>
    <p>
    <?php
   
    echo '----- foreach POST-------</p>';
    
    foreach($_POST as $key => $valor ){
        $$key = $valor; // $key = nombre $nombre
        echo '<p>$_POST[\''.$key .'\']= '.  $valor. '</p>';
    } 
    /* comprobar los datos */
    // comprobar los check
    
    if (isset($_REQUEST['html'])){$html=$_REQUEST['html'];}else { $html='';} 
    if (isset($_REQUEST['css'])){$css=$_REQUEST['css'];} else { $css='';} 
    if (isset($_REQUEST['js'])){$js=$_REQUEST['js'];}else { $js='';} 
    if (isset($_REQUEST['php'])){$php=$_REQUEST['php'];}else { $php='';} 
    if (isset($_REQUEST['java'])){$java=$_REQUEST['java'];}else { $java='';}   
    
    
    
    
    /*
    echo '----- foreach REQUEST -------</p>';
    foreach($_REQUEST as $key => $valor ){
        $$key = $valor; // $key = nombre $nombre
        echo '<p>$_REQUEST[\''.$key .'\']= '.  $valor. '</p>';
    }
    echo '----- foreach GET -------</p>';

    foreach($_GET as $key => $valor ){
        $$key = $valor; // $key = nombre $nombre
        echo '<p>$_GET[\''.$key .'\']= '.  $valor. '</p>';
    }
    echo '----- foreach SESSION -------</p>';
    foreach($_SESSION as $key => $valor ){
        $$key = $valor; // $key = nombre $nombre
        echo '<p>$_SESSION[\''.$key .'\']= '.  $valor. '</p>';
    }
    echo '----- foreach COOKIE -------</p>';
    foreach($_COOKIE as $key => $valor ){
        $$key = $valor; // $key = nombre $nombre
        echo '<p>$_COOKIE[\''.$key .'\']= '.  $valor. '</p>';
    }
    echo '----- foreach SERVER -------</p>';
    foreach($_SERVER as $key => $valor ){
        $$key = $valor; // $key = nombre $nombre
        echo '<p>$_SERVER[\''.$key .'\']= '.  $valor. '</p>';
    }*/
    if ($hm == 'h') 
    { $sexo = 'o';} 
    else 
    {$sexo='a';}
    $disenador= false;
    $desarrollador = false;
    if ($css=='css3' or $html=='HTML' or $js=='JAVASCRIPT') { $disenador = true;}
    if ($php=='PHP8' and $java=='JAVA') {$desarrollador = true;}
    $texto = "Estimad$sexo $nombre, ";
    if ($disenador and $desarrollador) 
    {$trabajo = " diseñador y desarrollador"; }
    else {
        if ($disenador){
            $trabajo = ' diseñador ';
        } else {
            if ($desarrollador)
            {
                $trabajo = 'desarrollador';
            } else {
                $trabajo = '';
            }
        }
    }
    $texto .= "Gracias por contactar con nostros para $trabajo";
    $cabeceras = 'From: albertomozodocente@gmail.com' . "\r\n" .
    'Reply-To: albertomozodocente@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    mail($mailinfo,'prueba','Este es el mensaje',$cabeceras);

    echo "<p> Estimad$sexo  $nombre " . $_POST['nombre']  . ", nacido en $nacido hemos recibido sus datos</p>";
    
    
    if ($trabajo == ''){
        echo '<p>Lo siento ya esta el puesto ocupado </p>';
    } else {
        echo "<p> Tomamos nota que ha solicitado el puesto de $trabajo </p>";
    }


    echo 'sr/a  $nombre ' . $_POST['nombre']  . ', nacido en $nacido hemos recibido sus datos';
    echo 'esto ira seguido';
    echo '<p> sr/a  $nombre ' . $_POST['nombre']  . ', nacido en $nacido hemos recibido sus datos</p>';
    $textohtml = '<html><head>';
    $textohtml = $textohtml . '<body>';
    $textohtml .= '<table><tr><td>Valor</td></tr></table>';
    if (mail($mailinfo,'prueba',$textohtml,$cabeceras)){
        echo '<p class="aviso">mail enviado</p>'
        ;
    }else {
        echo '<p class="error">mail NO enviado</p>';
    }

    
    include("./includes/inc_pie.php"); ?>
</body>
</html>