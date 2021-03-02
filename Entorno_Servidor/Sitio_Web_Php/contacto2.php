<!DOCTYPE html>
<html lang="es">
<head>
<?php include("./includes/inc_config.php"); ?>


<?php
function validarTelefono($numero){
  $reg = "^[9|8|7|6]\d{8}$^"; /* 9 números, de los cuales puede empezar por 6 , 7 , 8 o 9 */
  return preg_match($reg, $numero);
}?>
    
    <title>Contacto 2</title>
</head>
<body >
<nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="index.php">NORFER</a>
        </div>
        <div class="main_list" id="mainListDiv">
            <ul>
                <li><a href="index.php">Incio</a></li>
                <li><a href="nosotros.php">Contacto1</a></li>
                <li><a href="contacto2.php">Contacto2</a></li>
                <li><a href="servicios.php">Servicios</a></li>
                <li><a href="contacto.php">Contactanos</a></li>
            </ul>
        </div>
    </div>
</nav>
<div id="contacto2">
<?php
        /*inicializar valores error */
        $nombreError = $mailError = $telefonoError = '';
        if ($_SERVER['REQUEST_METHOD']=='POST'){
            /* recoger variables del formulario */
            $verformulario = 'NO';
            $nombre = recogerVar($_POST['nombre']);
            $telefono = recogerVar($_POST['telefono']);
            $mail = recogerVar($_POST['mail']);
            //..
            /* validar variables */
            
            if($nombre == ""){  /* QUE NO ESTÉ VACIO */          
                $nombreError='<span class="error"><br>Nombre vacio</span>';$verformulario='SI';
            }
            if (!filter_var($mail,FILTER_VALIDATE_EMAIL))
            {$mailError='<span class="error"><br>Email Incorrecto</span>';$verformulario='SI';}

            if(validarTelefono($telefono)==0){            
                $telefonoError='<span class="error"><br>Teléfono Incorrecto<br>Debe de comenzar por 9, 8 7 0 6<br>y debe de ser de 9 dígitos</span>';$verformulario='SI';
            }

        } else {
            /* inicializar variables formulario */
            $nombre = '';
            $mail='';
            $telefono='';
            $verformulario='SI';
        }

        if ($verformulario=='SI'){?>
            <form name="formcontacto" action="" method="POST">
                <p>Nombre: 
                <input name="nombre" id="nombre" type="text" value="<?php echo $nombre;?>" />
                <?php echo $nombreError; ?>
                </p>
                <p>Teléfono:
                <input name="telefono" id="telefono" type="text" value="<?php echo $telefono;?>" />
                <?php echo $telefonoError; ?>
                </p>
                <p>Correo electrónico
                <input name="mail" id="mail" type="text" value="<?php echo $mail;?>" />
                <?php echo $mailError; ?>
                </p>
                <p><input type="submit"  value="enviar" /></p>
            </form>
        <?php 
        } else {
            echo "<p id='respuesta'>Envio Ok </p>";
        }
        ?>
</div>


 
<?php  include("./includes/inc_pie.php"); ?>

<?php  include("./includes/inc_javascript.php"); ?>
   
</body>
</html>
