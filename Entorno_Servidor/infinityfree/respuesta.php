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
    foreach($_REQUEST as $key => $valor ){
        $$key = $valor;
        echo "<p>$key = $valor</p>";
    }

     include("./includes/inc_pie.php"); ?>
</body>
</html>