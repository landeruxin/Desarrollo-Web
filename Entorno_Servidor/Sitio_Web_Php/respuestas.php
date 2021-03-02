<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("./includes/inc_config.php"); ?>
    <title>Respuesta</title>
</head>
<body>
   <?php   include("./includes/inc_cabecera.php"); ?>
   <div id="respuestas">
   <div id="respuesta">
    <?php
    
    foreach($_REQUEST as $key => $valor ){
        
        $$key = $valor;

        if($valor == ""){
            $valor = "Sin definir";
        }

        echo "<p>$key = $valor </p>";
       
    }
    $num = 2021;
    $frase = 'prueba'; 
    if (isset($hm)) {
        if($hm == "hombre"){
            $frase = 'Estimado';
        }else{
            $frase = 'Estimada';
        }
    }else{
        $frase = 'Usted no ha elegido su género ';
    }

    $correo = ''; 
    if ($email!="") {
        $correo = $email;
    }else{
        $correo = 'Usted no ha introducido el correo, ';
    }

    $nom = ''; 
    if ($nombre!="") {
        $nom = $nombre;
    }else{
        $nom = 'anónimo ';
    }
    
    // if($nacido > 1900){
    //     if(($num-$nacido) >= 18){
    //         $frase = $frase . ' y es mayor de edad.'; 
    //     }else{        
    //         $frase = $frase . ' y es menor de edad.'; 
    //     }

        
    // }else{
    //     $frase = $frase . 'y no ha introducido la fecha de nacimiento.';
    // }

    $diseñador = false;
    $programador = false;
    $trabajo = '';

    if(isset($html) || isset($html) || isset($css)){
        $diseñador = true;
    }

    if(isset($php)){
        $programador = true;
    }



    if($diseñador == true && $programador == true){
        $trabajo = "diseñador / programador";
    }else  if($diseñador == false && $programador == true){
        $trabajo = "programador";
    }else  if($diseñador == true && $programador == false){
        $trabajo = "diseñador";
    }else{
        $trabajo = "ningún puesto";
    }

    $frase = "<br>".$frase ." ". $nom . ":<br>Tomamos nota de su solicitud de trabajo para ".$trabajo.".
    Enviaremos las novedades al correo ".$correo." que nos ha suministrado.<br>
    Saludos,<br>
    Dpto atención cliente " ;

    echo "<p>$frase</p>";    

   
    // require './src/PHPMailer.php';
    // require './src/SMTP.php';

    // $mail = new PHPMailer();
    // $mail->IsSMTP(); // enable SMTP

    // $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    // $mail->SMTPAuth = true; // authentication enabled
    // $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    // $mail->Host = "smtp.gmail.com";
    // $mail->Port = 465; // or 587
    // $mail->IsHTML(true);
    // $mail->Username = "xxxxxx";
    // $mail->Password = "xxxx";
    // $mail->SetFrom("xxxxxx@xxxxx.com");
    // $mail->Subject = "Test";
    // $mail->Body = "hello";
    // $mail->AddAddress("landerux@gmail.com");

    //  if(!$mail->Send()) {
    //     echo "Mailer Error: " . $mail->ErrorInfo;
    //  } else {
    //     echo "Message has been sent";
    //  }

    mail ( "landerux@gmail.com"  , "Prueba formulario" , $frase  ) ;
    

      ?>
      </div>
      </div>
      <?php  include("./includes/inc_pie.php"); ?>  


    <?php  include("./includes/inc_javascript.php"); ?>
</body>
</html>