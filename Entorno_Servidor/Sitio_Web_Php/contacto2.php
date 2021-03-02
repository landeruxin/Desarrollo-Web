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

            if($mail != ""){  /* QUE NO ESTÉ VACIO */          
                if (!filter_var($mail,FILTER_VALIDATE_EMAIL))
                {$mailError='<span class="error"><br>Email Incorrecto</span>';$verformulario='SI';}
            }else{
                $mailError='<span class="error"><br>Email vacio</span>';$verformulario='SI';
            }

            if($telefono!=""){
                if(validarTelefono($telefono)==0){     /*el método preg_match devuelve 1 si cumple la condición y 0 o false si no la cumple*/       
                    $telefonoError='<span class="error"><br>Teléfono Incorrecto:<br>&nbsp;&nbsp;&nbsp;-Debe de comenzar por 9, 8 7 0 6<br>&nbsp;&nbsp;&nbsp;-Debe de ser de 9 dígitos</span>';$verformulario='SI';
                }
            }else{
                $telefonoError='<span class="error"><br>Teléfono vacio</span>';$verformulario='SI';
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
            <p class="tit">Contacto2</p>
                <p>Nombre: 
                <input name="nombre" id="nombre" type="text" value="<?php echo $nombre;?>" />
                <?php echo $nombreError; ?>
                </p>
                <br>
                <p>Teléfono:
                <input name="telefono" id="telefono" type="text" value="<?php echo $telefono;?>" />
                <?php echo $telefonoError; ?>
                </p>
                <br>
                <p>Correo electrónico
                <input name="mail" id="mail" type="text" value="<?php echo $mail;?>" />
                <?php echo $mailError; ?>
                </p>
                <br>
                <p><input type="submit"  value="Enviar" class="boton" /></p>
            </form>
        <?php 
        } else {
            echo "<p id='respuesta'>Los datos se han enviado correctamente. </p>";
        }
        ?>
</div>


 
<?php  include("./includes/inc_pie.php"); ?>

<?php  include("./includes/inc_javascript.php"); ?>
   
</body>
</html>
