<form id="prueba" action="respuestas.php" method="post">
  <p class="tit">Contacto1</p>
  <p>Nombre: <input type="text" name="nombre" size="40"></p>
  <br>
  <p>Año de nacimiento: <input type="number" name="nacido" min="1900"></p>
  <br>
  <p>Correo electrónico: <input type="email" name="email" size="40"></p>
<br>

  <p>Sexo:
    <input type="radio" name="hm" value="hombre"> Hombre
    <input type="radio" name="hm" value="mujer"> Mujer
  </p>
  <br>
<p> Conocimientos :
<input type="checkbox" name="html" value="html"> HTML
<input type="checkbox" name="css" value="css"> CSS
<input type="checkbox" name="js" value="js"> Javascript
<input type="checkbox" name="php" value="php"> PHP
</p>
<br>
<p>Observaciones
<textarea name="observacion"></textarea>
</p>


  <p>
  <br>
  <div id="botones">
    <input type="submit" value="Enviar"  class="boton">
    <input type="reset" value="Borrar"  class="boton" id="rojo">
    </div>
  </p>
</form>
