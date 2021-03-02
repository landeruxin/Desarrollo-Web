<?php
function recogerVar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
   
/* variables generales */
$mailinfo = 'albertomozodocente@gmail.com'; // email de recepcion mensaje empresa
$cabeceras = 'From: albertomozodocente@gmail.com' . "\r\n" .
    'Reply-To: albertomozodocente@gmail.com' . "\r\n" .
    'Content-type: text/html; charset=utf-8' . "\r\n";
    'X-Mailer: PHP/' . phpversion() ;
?>


<link rel="stylesheet" href="css/estilos.css" type="text/css">