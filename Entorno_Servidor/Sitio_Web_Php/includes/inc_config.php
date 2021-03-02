<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <!-- importaciones css -->
    
     <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/estilos.css">    
    <link rel="shortcut icon" href="fotos/icono.ico" type="image/ico" />
    <?php
    /* MÉTODO PARA RECOGER LA VARIABLE */
function recogerVar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
   ?>
    