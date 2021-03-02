<!DOCTYPE html>
<html lang="es">
<head>
    <?php include("./includes/inc_config.php"); ?>
    
    <title>Contacto</title>
</head>
<body id="contacto">
   <?php   include("./includes/inc_cabecera.php"); ?>
  
    <div id="formulario">
    
    <div class="bg-contact2">
		<div class="container-contact2">
			<div class="wrap-contact2">
				<form class="contact2-form validate-form">
					<span class="contact2-form-title">
						Contáctanos
					</span>

					<div class="wrap-input2 validate-input" data-validate="El nombre es obligatorio">
						<input class="input2" type="text" name="nombre" id="nombre">
						<span class="focus-input2" data-placeholder="NOMBRE"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate = "El asunto no puede estar vacio">
						<input class="input2" type="text" name="asunto" id="asunto">
						<span class="focus-input2" data-placeholder="ASUNTO"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate = "El mensaje es obligatorio">
						<textarea style="resize: none;" class="input2" name="mensaje" id="texto"></textarea>
						<span class="focus-input2" data-placeholder="MENSAJE"></span>
					</div>

					<div class="container-contact2-form-btn">
						<div class="wrap-contact2-form-btn">
							<div class="contact2-form-bgbtn"></div>
							<button class="contact2-form-btn">
								Enviar mensaje
							</button>
						</div>
                    </div>
                    
                   

				</form>
			</div>
		</div>
	</div>



        </div>

    </div>
    
   <?php  include("./includes/inc_pie.php"); ?>

   <?php  include("./includes/inc_javascript.php"); ?>

   
</body>
</html>
