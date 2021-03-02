<?php
/*inicializar valores error */
$nombreError = $mailError = '';
if ($_SERVER['REQUEST_METHOD']=='POST'){
	/* recoger variables del formulario */
	$verformulario = 'NO';
	$nombre = recogerVar($_POST['nombre']);
	$mail = recogerVar($_POST['mail']);
	//..
	/* validar variables */
	if (!filter_var($mail,FILTER_VALIDATE_EMAIL))
	{$mailError='<span class="error">Email Incorrecto</span>';$verformulario='SI';}

} else {
	/* inicializar variables formulario */
	$nombre = '';
    $mail='';
    $verformulario='SI';
}

if ($verformulario=='SI'){?>
	<form name="formcontacto" action="" method="POST">
		<p>
		<input name="nombre" id="nombre" type="text" value="<?php echo $nombre;?>" />
		<?php echo $nombreError; ?>
		</p>
		<p>
		<input name="mail" id="mail" type="text" value="<?php echo $mail;?>" />
		<?php echo $mailError; ?>
		</p>
		<p><input type="submit"  value="enviar" /></p>
	</form>
<?php 
} else {
	echo "<p>Envio Ok </p>";
}
?>


